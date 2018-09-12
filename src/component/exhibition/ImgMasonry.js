import React from 'react';
import Masonry from 'react-masonry-css'
import { Spin} from 'antd';
const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    800: 2,
    500: 1
  };
const ImgMasonry = (props:{data:Object,loading:boolean}) => {
    const itemData = props.data;
    const searchMaker = data =>{
        const txtPos = data.indexOf(',');
        return data.slice(txtPos+2)
    }
    const createImg = (data)=>{
        if(data === null) return <span>(no image data)</span>
        return <img src={data.url} />
    }

    
    const ImgLink = ({url,imageUrl}) => (
        <div className="layer">
          <a href={url} target="_blank">>查看放大圖片</a>
          {imageUrl !== null ? <a className="btn-pin" data-pin-do="buttonPin" data-pin-media={imageUrl.url} data-pin-custom="true" href="https://www.pinterest.com/pin/create/button/"><img src="https://addons.opera.com/media/extensions/55/19155/1.1-rev1/icons/icon_64x64.png" width="25" height="25" /></a>:''}
        </div>
      );
    return ( 
        <div className="masonry-container">
            <Spin spinning={props.loading}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                    >
                    {
                        itemData.map((item,index) =>{
                            return <div className="each-work" key={`${item.title}-${index}`}>
                                        <div className="img-box">
                                            {createImg(item.webImage)}
                                            <ImgLink url={item.links.web} imageUrl={item.webImage}></ImgLink>
                                            
                                        </div>
                                        <p style={{marginBottom:0}}>{item.title}<span>{searchMaker(item.longTitle)}</span></p>
                                </div>
                        })
                    }
                </Masonry>
            </Spin>
        </div>
     );
}
 
export default ImgMasonry;