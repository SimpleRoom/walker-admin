import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from "@src/components/Login"
import Main from "./Main"

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
    render() {
        let { userInfo } = this.state
        return (
            <Router>
                <Switch>
                    {userInfo ? <Main /> : <Route exact path="/" render={props => <Login {...props} getUserInfo={this.getInfo} />} />}
                </Switch>
            </Router>
        )
    }
}

export default Home