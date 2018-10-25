import React, { PureComponent } from 'react'
import { withRouter } from "react-router-dom"
import styled from "styled-components"

import { SESSION } from "@src/utils"
// login box
const LoginBox = styled.div`
    width:260px;
    margin:0 auto;

    input{
        padding:2px 10px;
        border:1px solid #bebebe;
        margin: 5px 0;
        width:100%;
        height:30px;
        line-height:30px;
    }
`;
const LoginBtn = styled.button`
    width:100%;
    height:30px;
    line-height:30px;
`;

class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            userPwd: "",
        }
    }
    componentDidMount() {
        let info = SESSION.fetch()
        const { history } = this.props
        if (info) {
            history.push("/")
        }
        console.log(this.props, info)
    }
    updateUserName = e => {
        let userName = e.target.value
        this.setState({ userName })
    }
    updateUserPwd = e => {
        let userPwd = e.target.value
        this.setState({ userPwd })
    }
    login = () => {
        let { userName, userPwd } = this.state
        if (userName && userPwd) {
            const { history } = this.props
            let info = { userName, userPwd }
            // save to sessionStorage
            SESSION.save(info)
            // back to home
            history.push("/")
        }

    }
    render() {
        let { userName, userPwd } = this.state
        return (
            <LoginBox>
                <input className="user-name" autoComplete="off" type="text" value={userName} onChange={this.updateUserName} placeholder="用户名" maxLength="10" />
                <input className="user-pwd" autoComplete="off" type="password" value={userPwd} onChange={this.updateUserPwd} placeholder="密码" maxLength="10" />
                <LoginBtn onClick={this.login}>登录</LoginBtn>
            </LoginBox>
        )
    }
}
export default withRouter(Login)