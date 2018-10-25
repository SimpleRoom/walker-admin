import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"

import routeList from "@src/routes"
import SideBar from "@src/components/SideBar"
import NotFound from "@src/components/NotFound"
import Header from "@src/components/Header"

class Home extends React.Component {
    render() {
        return (
            <div className="app-box">
                {/* side nav bar */}
                <SideBar />
                {/* top header */}
                <Header />
                <Switch>
                    {/* component list */}
                    {routeList.map((item, index) => (
                        <Route
                            key={index}
                            path={item.path}
                            exact={item.exact}
                            component={item.component} />
                    ))}
                    {/* default No.1 component */}
                    <Route exact path="/" render={() => (
                        <Redirect to="/curry" />
                    )} />
                    <Route exact component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default Home