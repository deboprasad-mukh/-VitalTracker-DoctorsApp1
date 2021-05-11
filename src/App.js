import React from 'react';
import Front from './Front';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login/Login';
import Page from './Admin/Page';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={()=><Redirect to="/front"/>}/>
                <Route exact path="/front" component={()=><Front/>} />
                <Route exact path="/login" component={()=><Login/>}/>
                <Route exact path="/page" component={()=><Page/>}/> 
                </Switch>
            </BrowserRouter> 
        </div>
    )
}

