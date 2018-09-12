import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchIntroData } from '../../action/action'

const TabPane = Tabs.TabPane;

function output(array){
    const key = new Date();
    const newArray = array.map((item,index)=> <p key={index*key}>{item}</p>)
    return newArray
}
class IntroContainer extends Component {
    state = {}
    componentDidMount(){
        this.props.fetchIntroData()
    }

    render() { 
        return ( 
            <div className="intro-content">
                <div className="box-title">
                    <h1>彩色木刻版畫(Colour Woodcut)-浮世繪介紹</h1>
                    <p>浮世繪是日本的一種繪畫藝術形式，起源於17世紀，主要描繪人們日常生活、風景、和戲劇。浮世繪常被認為專指彩色印刷的木版畫（日語稱為錦繪），但事實上也有手繪的作品。</p>
                </div>
                <Tabs defaultActiveKey="0">
                    {
                        this.props.introData.map((item,index)=>
                            <TabPane tab={item.tab} key={index}>{output(item.content)}</TabPane>
                        )
                    }
                </Tabs>
            </div>
         );
    }
}
const mapStateToProps = store =>{
    return{
        introData:store.introData,
        loaded:store.introIsLoad
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        fetchIntroData
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(IntroContainer)