import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom"
import Login from "@src/components/Login"
import Main from "./Main"

import routeList from "@src/routes"
import SideBar from "@src/components/SideBar"
import NotFound from "@src/components/NotFound"

// mock user info start
import { setCookie, getCookie } from "@src/utils"
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

// delete cookie
// setCookie("USER", null, 2)

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: JSON.parse(getCookie("USER")),
        }
        console.log(this.state)
    }
    getInfo = userInfo => {
        this.setState({ userInfo })
        console.log(userInfo)
    }
    logOut = () => {
        setCookie("USER", null, 2)
        this.setState({ userInfo: null })
        // console.log(location)
    }
    render() {
        let { userInfo } = this.state
        return (
            <Router>
                {/* {userInfo ? <Main /> : <Route exact path="/" render={props => <Login {...props} getUserInfo={this.getInfo} />} />} */}
                <Switch>
                    {
                        userInfo ? <React.Fragment>
                            <SideBar />
                            <p>{userInfo.name} <button onClick={this.logOut}>退出</button></p>
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
                        </React.Fragment> : <Route exact path="/" render={props => <Login {...props} getUserInfo={this.getInfo} />} />}
                    }
                </Switch>
            </Router>
        )
    }
}


// const AuthButton = withRouter(
//     ({ history }) =>
//         fakeAuth.isAuthenticated ? (
//             <p>Welcome!{" "}
//                 <button onClick={() => {
//                     fakeAuth.signout(() => history.push("/"));
//                 }}>Sign out</button></p>) : (<p>You are not logged in.</p>)
// );

export default Home