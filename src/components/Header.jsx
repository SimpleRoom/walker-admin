import React, { PureComponent } from 'react'
import { withRouter } from "react-router-dom";
import styled from "styled-components"
// utils
import { sessionStore } from "@src/utils"
// global common style
import {
    levelOneZindex,
    ClearFix,
    headerAndLogoHeight,
    sideBarWidth,
    closedSideBarLeft,
    themeRgbaColor,
} from "./common-style"
// Header left value while closing sideBar
const closedLeft = sideBarWidth - closedSideBarLeft
const openWidth = `calc(100% - ${sideBarWidth}px)`
const closeWidth = `calc(100% - ${closedLeft}px)`

// common scoped style
const HeaderBox = styled(ClearFix)`
    position:fixed;
    z-index:${levelOneZindex};
    transition:all .4s;
    left:${props => props.isOpenedSideBar ? sideBarWidth + "px" : closedLeft + "px"};
    top:0;
    background:${themeRgbaColor};
    width: ${props => props.isOpenedSideBar ? openWidth : closeWidth};
    height:${headerAndLogoHeight}px;
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
    render() {
        const { userName } = this.state
        const { isOpenedSideBar } = this.props
        return (
            <HeaderBox isOpenedSideBar={isOpenedSideBar}>
                <UserInfoBox>
                    {
                        userName ? <p>Welcome {userName}<SignOutBtn onClick={this.signOut}>Sign out</SignOutBtn></p> : null
                    }
                </UserInfoBox>
            </HeaderBox>
        )
    }
}


export default withRouter(Header)