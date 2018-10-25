import React, { PureComponent } from 'react'
import { BrowserRouter as Redirect, withRouter } from "react-router-dom"
import styled from "styled-components"
import { setCookie, getCookie } from "@src/utils"

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
        let info = JSON.parse(getCookie("USER"))
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
            // setCookie
            setCookie("USER", JSON.stringify(info), 2)
            // this.props.history.push("/app")


            this.props.getUserInfo(info)
            console.log(this.props)
        } else {
            // 
        }

    }
    render() {
        let { userName, userPwd} = this.state
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