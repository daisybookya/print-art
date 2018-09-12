import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Button } from 'antd';

import { fetchImgData,isLoadedImg,loadImgPage } from '../../action/action'
import ImgMasonry from './ImgMasonry'

class ExhibitContainer extends Component {
    state = { 
        btnTxt:'看更多作品',
        disabled:false,
     }
    componentDidMount(){
        this.props.fetchImgData();
        
    }

    enterLoading = () => {
        let nowPage = this.props.page;
        
        if(nowPage < 5){
            this.props.fetchImgData(nowPage+1)
            this.props.isLoadedImg(true)
            this.props.loadImgPage(nowPage+1)
        }else{
            alert('展品已閱覽完畢!')
            this.setState({btnTxt:'展品已閱覽完畢',disabled:true})
        }
        
        
      }
    render() { 
        return ( 
            <div className="img-content">
                <div className="box-title">
                    <h1>木刻板畫線上展覽</h1>
                </div>
                <ImgMasonry data={this.props.imgData} loading={this.props.imgIsLoad}></ImgMasonry>
                <Button disabled={this.state.disabled} type="primary" icon="plus-circle" loading={this.props.imgIsLoad} onClick={this.enterLoading}>
                {this.state.btnTxt}
                </Button>
            </div>
         );
    }

}
const mapStateToProps = store =>{
    return{
        imgData:store.imgListData,
        imgIsLoad:store.imgListIsLoad,
        page:store.imgPage
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        fetchImgData,
        isLoadedImg,
        loadImgPage
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ExhibitContainer)
