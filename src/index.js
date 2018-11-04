import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import registerServiceWorker from './registerServiceWorker'


import { Provider } from 'react-redux'
// // 1、引入Store
import configureStore from "./redux/configureStore"

import "./styles/index.styl"
import Login from "./components/Login"
import NotFound from "./components/NotFound"
import Home from "./views/Home"

const Root = ()=>{
    // set store to root for global props
    const store = configureStore()
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    {/* Redirect to first route in home */}
                    <Route exact path="/" render={() => (
                        <Redirect to="/home/dashboard" />
                    )} />
                    {/* home page */}
                    <Route path="/home" component={Home} />
                    {/* login page */}
                    <Route exact path="/login" component={Login} />
                    <Route exact component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    )
}
console.log("Welcome to->%c https://github.com/SimpleRoom", "color:purple");

ReactDOM.render( <Root /> , document.getElementById('root'));
registerServiceWorker();