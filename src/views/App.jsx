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

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app-box clear-fix">
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
                            <Route exact component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App