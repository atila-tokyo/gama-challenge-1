import React from 'react';
import { Switch, Route, BrowserRoute } from 'react-router-dom';
import Home from './pages/Home';
import Subscribed from './pages/Subscribed';

export default function Routes() {
    return (
        <BrowserRoute>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/subscribed' component={Subscribed} />
            </Switch>
        </BrowserRoute>
    )
}