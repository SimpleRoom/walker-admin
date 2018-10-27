import React, { PureComponent } from 'react'
import { withRouter } from "react-router-dom";
import styled from "styled-components"
import { connect } from 'react-redux'
// import actions
import { fetchNewTheme } from "../redux/actionCreators"
// utils
import { sessionStore } from "@src/utils"
// global common style
import {
    levelOneZindex,
    ClearFix,
    headerHeight,
    sideBarWidth,
    themeRgbaColor,
} from "./common-style"
// common scoped style
const HeaderBox = styled(ClearFix)`
    position:fixed;
    z-index:${levelOneZindex};
    left:${sideBarWidth}px;
    top:0;
    background:${themeRgbaColor};
    width: calc(100% - ${sideBarWidth}px);
    height:${headerHeight}px;
    color:#fff;
    box-shadow:0 6px 10px -2px rgba(0,0,0,0.5);
`;

const UserInfoBox = styled.div`
    float:right;
`;

const SignOutBtn = styled.button`
    line-height:30px;
    color: #fff;
    margin-left:25px;
    padding:15px;
`;

const ColorList = styled.div`
   float:left;
   line-height:${headerHeight}px; 
`;
const ToggleButton = styled.button`
    display:inline-block;
    width:30px;
    height:30px;
    vertical-align:middle;
    border-radius:50%;
    margin-left:15px;
    background:${props => props.bgColor ? props.bgColor : themeRgbaColor};
`;
class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            userName: null,
        }
        // console.log(this.props, `Header props`)
    }
    componentDidMount() {
        let info = sessionStore.fetch()
        const { history } = this.props
        if (!info) {
            // back to login
            history.push("/login")
        } else {
            let { userName } = info
            this.setState({ userName })
        }
    }
    signOut = () => {
        sessionStore.remove()
        this.props.history.push("/login")
    }
    toggleColor = e => {
        let target = e.target
        let color = target.getAttribute("data-color")
        this.props.updateTheme(color)
    }
    render() {
        const { userName } = this.state
        return (
            <HeaderBox>
                <ColorList>
                    <ToggleButton onClick={this.toggleColor} data-color="#9c27b0" bgColor="#9c27b0"></ToggleButton>
                    <ToggleButton onClick={this.toggleColor} data-color="#4caf50" bgColor="#4caf50"></ToggleButton>
                    <ToggleButton onClick={this.toggleColor} data-color="#00bcd4" bgColor="#00bcd4"></ToggleButton>
                    <ToggleButton onClick={this.toggleColor} data-color="#ff9800" bgColor="#ff9800"></ToggleButton>
                </ColorList>
                <UserInfoBox>
                    {
                        userName ? <p>欢迎{userName}<SignOutBtn onClick={this.signOut}>退出</SignOutBtn></p> : null
                    }
                </UserInfoBox>
            </HeaderBox>
        )
    }
}
// 1、connect 參數1映射屬性到組件
const mapStateToProps = state => {
    console.log(state, `Header state update`)
    return { ...state }
}
/*
 * 2 connect 參數2 函數，更新主题
 *   updateTheme 函數作為屬性传递 
 */
const mapDispatchToProps = dispatch => ({
    updateTheme: (rgba) => dispatch(fetchNewTheme(rgba)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))