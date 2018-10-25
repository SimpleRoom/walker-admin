import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Login from "@src/components/Login"
import NotFound from "@src/components/NotFound"
import Home from "./Home"

const Root = () => (
    <Router>
        <Switch>
            {/* Redirect to No.1 under home */}
            <Route exact path="/" render={() => (
                <Redirect to="/home/curry" />
            )} />
            {/* home page */}
            <Route path="/home" component={Home} />
            {/* login page */}
            <Route exact path="/login" component={Login} />
            <Route exact component={NotFound} />
        </Switch>
    </Router>
)

export default Root