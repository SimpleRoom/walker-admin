import React, { PureComponent } from 'react'
import { withRouter } from "react-router-dom";
import styled from "styled-components"
import { setCookie, getCookie } from "@src/utils"

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

class User extends PureComponent {
    constructor(props) {
        super(props)
        console.log(this.props, 'User')
        console.log(this.context)
    }
    signOut = () => {
        console.log(this.props)
        // setCookie("USER", null, 2)
        // this.props.history.location.pathname = "/"
    }
    render() {
        const { userInfo } = this.props
        return (
            <HeaderBox>
                <UserInfoBox>
                    <p>欢迎{userInfo.name}<SignOutBtn onClick={this.signOut}>退出</SignOutBtn></p>
                </UserInfoBox>
            </HeaderBox>
        )
    }

}

export default withRouter(User)