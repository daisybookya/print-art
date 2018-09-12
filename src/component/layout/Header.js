import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router,Link } from "react-router-dom";
class Header extends Component {
    state = { 
        current: '',
     }
     handleClick = (e) => {
        this.setState({
          current: e.key,
        });
      }
    render() { 
        return ( 
            
            <div className="header">
            <Link to="/" onClick={()=>this.handleClick({key:'home'})}><h1>Colour Woodcut Intro</h1></Link>
        
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className="header-menu"
            >
                <Menu.Item key="home">
                    <Link to="/"><Icon type="home" theme="outlined" />Home</Link>
                </Menu.Item>
                <Menu.Item key="introduce">
                    <Link to="/intro"><Icon type="notification" />Woodcut Introduce</Link>
                </Menu.Item>
                <Menu.Item key="exhibition">
                    <Link to="/exhibition"><Icon type="eye" />Woodcut Exhibition</Link>
                </Menu.Item>
                <Menu.Item key="information">
                    <Link to="/infor"><Icon type="info-circle" />Domestic Exhibition Information</Link>
                </Menu.Item>
            </Menu>
      </div>
         );
    }
}
 
export default Header;
