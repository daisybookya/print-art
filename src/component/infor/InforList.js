import React from 'react';
import { List, Icon } from 'antd';
import { priceFormat } from '../../common/formatFun'

const IconText = ({ pic, text ,type,url,title }) => (
    <a href={checkUrl(type,url,title)}
    target='_blank'
    >
      <Icon type={pic} style={{ marginRight: 8 }} />
      {text}
    </a>
  );

  function checkUrl(type='link',url,title){
      if(type === 'map'){
        return `https://www.google.com.tw/maps/place/${url}`
      }
      if(url === ''){
          return `https://www.google.com.tw/search?q=${title}`
      }
      return url;
  }
  
const ExhiList = (props:{dataList:Object,isLoading:Boolean}) => {
    
    const checkPrice = (value)=>{
        switch(value.onSales){
            case 'Y':
             return priceFormat(value.price)
            break;
            case 'N':
                return `免費入場`
            break;
            case 'UNKNOWN':
                return `請洽來源連結或搜尋網站`
            break;
        }
    }
    const checkImg = (value)=>{
        if(value !== ''){
            return <img width={272} src={value} />
        }
        //return <img width={272} src={process.env.PUBLIC_URL+'/img/noImg.png'} />;
        return ``
    }
    const checkDescript = (value)=>{
        let newPrice = value.replace(/\r\n|\n/g,'<br>')
        newPrice = value.replace(/&nbsp;/g,' | ')
        if(newPrice.length > 750){
            return `${newPrice.slice(0,700)}.....<<請點來源網站看詳情>>`
        }
        return newPrice;
    }
    const backToTop = ()=>{
        window.scrollTo(0, 0)
    }
    return ( 
        <div>
        <List 
            itemLayout="vertical"
            
            size="large"
            pagination={{
            pageSize: 15,
            onChange:backToTop
            }}
            locale={{emptyText: '無展覽數據'}}
            loading={props.isLoading}
            dataSource={props.dataList}
            renderItem={item => (
            <List.Item
                key={item.title}
                actions={[<span style={{color:'#1890ff'}}><Icon type="pay-circle" theme="outlined" /> 票價 : {checkPrice(item.showInfo[0])}</span>, 
                <IconText pic="car" text="展覽地圖" type="map" url={item.showInfo[0].location}/>,<IconText pic="link" text="來源網站" type="link" url={item.sourceWebPromote} title={item.title} />]}
                extra={checkImg(item.imageUrl)}
            >
            <List.Item.Meta
                title={item.title}
                description={<span style={{color:'#dc6969',fontSize:'1.1em'}}>展覽日期 : {item.startDate}~{item.endDate} / 展覽地點 : {item.showInfo[0].locationName} ( {item.showInfo[0].location} )</span>}
                />
                {checkDescript(item.descriptionFilterHtml)}
            </List.Item>
            )}
        />
        </div>
     );
}
 
export default ExhiList;