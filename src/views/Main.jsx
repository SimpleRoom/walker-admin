import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import routeList from "@src/routes"
import SideBar from "@src/components/SideBar"
import NotFound from "@src/components/NotFound"

// mock user info start
// import { setCookie, getCookie } from "@src/utils"
// const mockSetInfo = () => {
//     let info = {
//         name: "React",
//         avatar: "xxx",
//     }
//     setCookie("USER", JSON.stringify(info), 2)
// }
// const user = getCookie("USER")
// !user && mockSetInfo()
// mock user info end

class Main extends React.Component {
    render() {
        return (
            <div className="app-box clear-fix">
                <div id="container" className="container">
                    <SideBar />
                    <Switch>
                        {routeList.map((item, index) => (
                            <Route
                                key={index}
                                path={item.path}
                                exact={item.exact}
                                component={item.component} />
                        ))}
                        <Route exact path="/" render={() => (
                            <Redirect to="/css" />
                        )} />
                        <Route exact component={NotFound} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Main