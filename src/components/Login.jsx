import React, { PureComponent } from 'react'
import { BrowserRouter as Redirect } from "react-router-dom"
import styled from "styled-components"
import { setCookie } from "@src/utils"

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
            redirectToReferrer: false,
        }
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
            let info = {
                name: userName,
                pwd: userPwd,
            }
            this.setState({ redirectToReferrer: true })
            this.props.getUserInfo(info)
            // setCookie
            setCookie("USER", JSON.stringify(info), 2)
        } else {
            // 
        }

    }
    render() {
        let { userName, userPwd, redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from: { pathname: "/" } };

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }
        return (
            <LoginBox>
                <input className="user-name" autoComplete="off" type="text" value={userName} onChange={this.updateUserName} placeholder="用户名" maxLength="10" />
                <input className="user-pwd" autoComplete="off" type="password" value={userPwd} onChange={this.updateUserPwd} placeholder="密码" maxLength="10" />
                <LoginBtn onClick={this.login}>登录</LoginBtn>
            </LoginBox>
        )
    }
}
export default Login