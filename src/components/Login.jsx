import React, { PureComponent } from 'react'
import { withRouter } from "react-router-dom"
import styled from "styled-components"

import { sessionStore } from "@src/utils"
import { CanvasBg } from "@src/canvas"
// global common style
import {
    levelOneZindex,
    ClearFix,
    buttonActiveBg,
    themeRgbaColor,
} from "./common-style"
// login box
const LoginBgBox = styled(ClearFix)`
    position:fixed;
    width:100%;
    height:100%;
    z-index:${levelOneZindex};
    background-image: radial-gradient(ellipse farthest-corner at center top, ${themeRgbaColor} 0%, #000105 100%);
    cursor: move;
`;
// login form
const FormBox = styled.div`
    width:260px;
    height:200px;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom: 0;
    margin:auto;
    cursor:pointer;
    input{
        padding:2px 15px;
        font-size:14px;
        border:1px solid #bebebe;
        margin-bottom:10px;
        width:100%;
        height:40px;
        line-height:40px;
        cursor:pointer;
        background:#fff;
    }
`;
const LoginBtn = styled.button`
    width:100%;
    height:40px;
    line-height:40px;
    font-size:14px;
    background:${buttonActiveBg};
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
        let info = sessionStore.fetch()
        const { history } = this.props
        if (info) {
            history.push("/")
        }
        this.canvasBackground = new CanvasBg({ id: "canvasMoveBg" })
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
            sessionStore.save(info)
            // back to home
            history.push("/")
        }

    }
    render() {
        let { userName, userPwd } = this.state
        return (
            <LoginBgBox>
                <canvas id="canvasMoveBg"></canvas>
                <FormBox>
                    <input className="user-name" autoComplete="off" type="text" value={userName} onChange={this.updateUserName} placeholder="用户名" maxLength="10" />
                    <input className="user-pwd" autoComplete="off" type="password" value={userPwd} onChange={this.updateUserPwd} placeholder="密码" maxLength="10" />
                    <LoginBtn onClick={this.login}>登录</LoginBtn>
                </FormBox>
            </LoginBgBox>
        )
    }
}
export default withRouter(Login)