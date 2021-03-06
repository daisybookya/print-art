import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
const Foot = ({location}) => {
    return ( 
        //如果為首頁的話加上fixed class
        <Footer className={location.pathname.slice(1,2)===''?'fixed':''} style={{ textAlign: 'center' }}>
            Colour Woodcut Intro ©2018 / Art images and information was developed using the  <a href="https://www.rijksmuseum.nl/en/api" target="_blank" >Rijksmuseum API</a> , 
            <a href="https://data.gov.tw/" target="_blank" >Open Data</a> , 
            <a href="https://zh.wikipedia.org/zh-tw/%E6%B5%AE%E4%B8%96%E7%B9%AA" target="_blank" >Wiki</a>
        </Footer>
        
     );
}
 
export default Foot;