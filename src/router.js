import React from 'react';

import { Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import Loading from 'components/Loading';

// 路由
const Home = loadable({
    loader: () => import('pages/Home'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const Page = loadable({
    loader: () => import('pages/page'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const Counter = loadable({
    loader: () => import('pages/Counter'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const DnD = loadable({
    loader: () => import('pages/DnD'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page" component={Page}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/dnd" component={DnD}/>
    </Switch>
);

export default getRouter;
