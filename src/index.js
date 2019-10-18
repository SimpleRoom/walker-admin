import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
// // 1、引入Store
import configureStore, { commonNamespace } from './store/indexStore'
// reset style
import "./styles/reset.css"
import Login from "./components/Login"
import NotFound from "./components/NotFound"
import Home from "./views/Home"

const Root = ()=>{
    // set store to root for global props
    const store = configureStore({
        [commonNamespace]: {
            globalTips: 'static global store',
        }
    })
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    {/* Redirect to first route in home */}
                    <Route exact path="/" render={() => (
                        <Redirect to="/home/" />
                    )} />
                    {/* home page */}
                    <Route path="/home/" component={Home} />
                    {/* login page */}
                    <Route exact path="/login/" component={Login} />
                    <Route exact component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    )
}
console.log('%c Welcome to-> https://github.com/SimpleRoom','background:#357b7b;color:#bada55;');

ReactDOM.render( <Root /> , document.getElementById('root'));
registerServiceWorker();