import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import routeList from "@src/routes"
import SideBar from "@src/components/SideBar"
import NotFound from "@src/components/NotFound"

class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className="main-box clear-fix">
                    <SideBar />
                    <div id="container" className="container">
                        <Switch>
                            {routeList.map((item, index) => (
                                // Render more <Route>s with the same paths as
                                // above, but different components this time.
                                <Route
                                    key={index}
                                    path={item.path}
                                    exact={item.exact}
                                    component={item.component} />
                            ))}
                            <Route exact path="/" render={() => (
                                <Redirect to="/css" />
                            )} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main