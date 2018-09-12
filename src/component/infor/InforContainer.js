import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Divider } from 'antd';
import { fetchExhiData } from '../../action/action'
import InforList from './InforList'
import SelectOption from './SelectOption'
import { areaRange,cityRange,priceSelect } from '../../common/formatFun'

let selectedData = [];

class InforContainer extends Component {
    state = {
        selectedArea:'all',
        selectedCity:'不分區',
        selectedPrice:'all'
    }
    componentDidMount(){
        this.props.fetchExhiData()        
    }
    handleChangeArea = (value) =>{
        const cityDefault = cityRange[value][0];
        this.setState({selectedArea:value,selectedCity:cityDefault,selectedPrice:'all'})
    }
    handleChangeCity = (value) =>{
        this.setState({selectedCity:value,selectedPrice:'all'})
    }
    handleChangePrice = (value) =>{
        this.setState({selectedPrice:value})
    }
    handlePrice = (data,type) =>{
        selectedData = data.filter((item)=>{
            if(type === 'free') return item.showInfo[0].onSales === 'N'
            if(type === 'pay') return item.showInfo[0].onSales === 'Y' || item.showInfo[0].onSales === 'UNKNOWN'
            return item
        })
    }

    handleArea = (data,area)=>{
        switch (area){
            case 'north':
                selectedData = data.filter((item)=>{
                    if(item.showInfo.length !== 0){
                        return item.showInfo[0].location.search(/台北|臺北|新北|基隆|桃園|宜蘭|新竹/g) > -1
                    }
                })
            break
            case 'middle':
                selectedData = data.filter((item)=>{
                    if(item.showInfo.length !== 0){
                        return item.showInfo[0].location.search(/"台中|臺中|南投|彰化|雲林|苗栗"/g) > -1
                    }
                })
            break
            case 'south':
                selectedData = data.filter((item)=>{
                    if(item.showInfo.length !== 0){
                        return item.showInfo[0].location.search(/台南|臺南|嘉義|高雄|屏東/g) > -1
                    }
                })
            break
            case 'east':
                selectedData = data.filter((item)=>{
                    if(item.showInfo.length !== 0){
                        return item.showInfo[0].location.search(/花蓮|台東|臺東|金門|澎湖|馬祖/g) > -1
                    }
                })
            break
            default:
                selectedData = data
            break
        }
    }
    handleCity = (data,city)=>{
        if(city === '全縣市' || city === '不分區') return false;
        if(city.indexOf('台') > -1){
            let lastLetter = city.slice(1,2);
            let keyword = `臺${lastLetter}`
            let reg = new RegExp(`${city}|${keyword}`,'g')
            selectedData = data.filter((item)=>{
                if(item.showInfo.length !== 0){
                    return item.showInfo[0].location.search(reg) > -1
                }
            })
            return selectedData;
        }
        selectedData = data.filter((item)=>{
            if(item.showInfo.length !== 0){
                return item.showInfo[0].location.search(city) > -1
            }
        })
        return selectedData;
    }
    
    render() { 
       const {inforData} = this.props
       this.handleArea(inforData,this.state.selectedArea)
       this.handleCity(selectedData,this.state.selectedCity)
       this.handlePrice(selectedData,this.state.selectedPrice)
        return ( 
            <div className="exhibit-content" >
                <div className="box-title">
                    <h1>國內展覽資訊</h1>
                    <SelectOption handleOpt={this.handleChangeArea} value={this.state.selectedArea} level="1" optionData={areaRange}></SelectOption>
                    <SelectOption handleOpt={this.handleChangeCity} value={this.state.selectedCity} level="2" optionData={cityRange[this.state.selectedArea]}></SelectOption>
                    <SelectOption handleOpt={this.handleChangePrice} value={this.state.selectedPrice} level="1" optionData={priceSelect}></SelectOption>
                </div>
                <Divider>展覽列表 Exhibitions</Divider>
                <InforList dataList={selectedData} isLoading={this.props.inforIsLoad}></InforList>
            </div>
         );
    }
}

const mapStateToProps = store =>{
    return{
        inforData:store.inforData,
        inforIsLoad:store.inforIsLoad
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        fetchExhiData
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(InforContainer)