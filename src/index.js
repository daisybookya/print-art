import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import fetchIntro from './middlewares/fetchIntro'
import fetchInforList from './middlewares/fetchInforList'
import fetchImgList from './middlewares/fetchImgList'
import reducer from './reducer/reducer'
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer,applyMiddleware(fetchIntro,fetchInforList,fetchImgList));

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <Route path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
