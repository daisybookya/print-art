import React, { Component } from 'react';
import { Layout,BackTop } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './component/layout/Header'
import Foot from './component/layout/Foot'
import MainPage from './component/layout/MainPage'
import IntroContainer from './component/introduce/IntroContainer'
import ExhibitContainer from './component/exhibition/ExhibitContainer'
import InforContainer from './component/infor/InforContainer'

import './css/App.css'
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
          <Layout className="layout">
            <Header></Header>
            <BackTop />
            <Content style={{padding:'10px 30px',background:'#fff'}}>
              <Route exact path="/" component={MainPage} />
              <Route path="/intro" component={IntroContainer} />
              <Route path="/exhibition" component={ExhibitContainer} />
              <Route path="/infor" component={InforContainer} />
            </Content>
            <Route component={Foot} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      </Layout>
    </Router>
    );
  }
}

export default App;
