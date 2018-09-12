import React from 'react';
import { Carousel } from 'antd';

const imgList =['poster1.jpg','poster2.jpg','poster3.jpg']
const MainPage = () => {
    //本機為process.env.PUBLIC_URL
    return ( 
        <div className="main">
            <div className="main-slick">
                <Carousel autoplay vertical>
                    {
                        imgList.map((item,index)=> <div className="main-slide" key={new Date()*index}><span style={{backgroundImage:`url(${process.env.PUBLIC_URL+`/img/`+item})`}}></span></div>)
                    }
                </Carousel>
            </div>
            
        </div>
     );
}
 
export default MainPage;