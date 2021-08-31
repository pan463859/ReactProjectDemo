import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import getRouter from './router';
import { Provider } from 'react-redux';
import './styles.less'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// const RouterPath=process.env.uat?'/ReactProjectDemo/':'/'
// const RouterPath=process.env.uat?'/reactdemo/':'/'
import store from './redux/store';
ReactDom.render(
    <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
            <Router>
                <Nav />
                {getRouter()}
            </Router>
        </Provider>
    </DndProvider>
    ,
    document.getElementById('app')
)


