import React, { PureComponent } from 'react'
import { withRouter } from "react-router-dom";
import styled from "styled-components"

import { sessionStore } from "@src/utils"
// common
const ClearFix = styled.div`
    &:before,&:after{
        display:table;
        content:"";
        clear:both;
    }
`;
const headerIndex = 10
const headerHeight = "70px"
const barBg = "#282C34";
const barWidth = "252px";
// header
const HeaderBox = styled(ClearFix)`
    position:fixed;
    z-index:${headerIndex};
    left:${barWidth};
    top:0;
    background-color:${barBg};
    width: calc(100% - ${barWidth});
    height:${headerHeight};
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
        console.log(info)
    }
    signOut = () => {
        sessionStore.remove()
        this.props.history.push("/login")
    }
    render() {
        const { userName } = this.state
        return (
            <HeaderBox>
                <UserInfoBox>
                    {
                        userName ? <p>欢迎{userName}<SignOutBtn onClick={this.signOut}>退出</SignOutBtn></p> : null
                    }
                </UserInfoBox>
            </HeaderBox>
        )
    }

}

export default withRouter(Header)