import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;
const SelectOption = (props:{handleOpt:Function,value:string,level:string,optionData:Object}) => {

    const checkLevel = (level:string)=>{
        let items;
        switch(level){
            case '1':
                items = Object.entries(props.optionData);
                return items.map((option,index)=>
                    <Option value={option[0]} key={index}>{option[1]}</Option>
                )
            break;
            case '2':
                items = props.optionData;
                return items.map(option=>
                    <Option value={option} key={option}>{option}</Option>
                )
            break;
            default:
                items = Object.entries(props.optionData);
                return items.map((option)=>
                    <Option value={option[0]} key={option[0]}>{option[1]}</Option>
                )
            break;
        }
    }
    const handleSelectOpt = (value)=>{
        props.handleOpt(value)
    }
    return ( 
        <Select value={props.value} style={{ width: 150,marginRight:'15px' }} onChange={handleSelectOpt}>
            {
                checkLevel(props.level)
            }
        </Select>
     );
}
 
export default SelectOption;