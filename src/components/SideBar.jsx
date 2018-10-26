import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import routeList from "@src/routes"
// button wave effect
import ButtonWaveEffect from "@src/utils/ButtonWaveEffect"

const barWidth = "252px";
const barBg = "#282C34";
const barFontColor = "#ffffff"
const barActiveColor = "#E2777A"
const barActiveBg = "#357b7b"
const barIndex = 10

const InLineBox = styled.div`
    display:inline-block;
    vertical-align:middle;
`;

const SideBarBox = styled.div`
    position:fixed;
    z-index:${barIndex};
    width:${barWidth};
    height:100%;
    background-color:${barBg};
    left:0;
    top:0;
    box-shadow: 0 10px 40px 5px rgba(0, 0, 0, 0.5);
    ul{
        width:85%;
        margin:15px auto 0 auto;
    }
    li{
        margin-bottom:10px;
        border-radius:5px;
        overflow:hidden;
    }
    a{
        position:relative;
        overflow:hidden;
        display: block;
        text-align:center;
        height: 50px;
        line-height:50px;
        color:${barFontColor};
        font-size:20px;
        &.active{
            /* color:${barActiveColor}; */
            background-color:${barActiveBg};
        }
    }
    .wave-mask{
        position:absolute;
        z-index:0;
        width:100%;
        height:100%;
        left:0;
        top:0;
        background-color:transparent;
    }
`;

// logo
const LogoBox = styled.div`
    width:85%;
    margin:0 auto;
    text-align:center;
    vertical-align:middle;
    position:relative;
    height:70px;
    line-height:70px;

    &:after{
        display:table;
        content:"";
        width:100%;
        height:1px;
        left:0;
        bottom: 0;
        background-color:rgba(170, 170, 170, 0.3);
    }
`;
const LogoBg = styled(InLineBox)`
    width:50px;
    height:49px;
    background-size:100% 100%;
    background-image:url("/images/logo.svg");
`;

const BarTitle = styled(InLineBox)`
    font-size:22px;
    color: #999;
`;
class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.ButtonWave = new ButtonWaveEffect()
    }
    clickHandle = (e) => {
        this.ButtonWave.showWave(e)
    }
    render() {
        return (
            <SideBarBox>
                <LogoBox>
                    <LogoBg></LogoBg>
                    <BarTitle>Simple Room</BarTitle>
                </LogoBox>
                <ul>
                    {
                        routeList.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path} activeClassName="active">{item.sidebarName}
                                    <span className="wave-mask" onClick={this.clickHandle}></span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </SideBarBox>
        )
    }
}

export default SideBar