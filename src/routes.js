import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Subscribed from './pages/Subscribed';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/subscribed' component={Subscribed} />
            </Switch>
        </BrowserRouter>
    )
}
