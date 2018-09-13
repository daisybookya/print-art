import React, { Component } from 'react';
import { Layout,BackTop } from 'antd';
import { BrowserRouter as Router, Route ,HashRouter } from "react-router-dom";
import Header from './component/layout/Header'
import Foot from './component/layout/Foot'
import MainPage from './component/layout/MainPage'
import IntroContainer from './component/introduce/IntroContainer'
import ExhibitContainer from './component/exhibition/ExhibitContainer'
import InforContainer from './component/infor/InforContainer'

import './css/App.css'
const { Content } = Layout;
const routes = [
  {
    path:'/',
    component:MainPage
  },
  {
    path:'/intro',
    component:IntroContainer
  },
  {
    path:'/exhibition',
    component:ExhibitContainer
  },
  {
    path:'/infor',
    component:InforContainer
  }
]
class App extends Component {
  render() {
    return (
      <HashRouter>
          <Layout className="layout">
            <Header></Header>
            <BackTop />
            <Content style={{padding:'10px 30px',background:'#fff'}}>
              {
                routes.map(route=>
                  <Route exact path={route.path} component={route.component} key={route.path} />
                )
              }
            </Content>
            <Route component={Foot} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      </Layout>
    </HashRouter>
    );
  }
}

export default App;
