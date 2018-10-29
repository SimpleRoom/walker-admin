import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components"
// import { connect } from 'react-redux'
import routeList from "@src/routes"
// button wave effect
import { ButtonWaveEffect } from "@src/utils"
// global common style
import {
    levelOneZindex,
    ClearFix,
    sideBarWidth,
    closedSideBarWidth,
    // buttonActiveBg,
    sideLogoHeight,
    themeRgbaColor,
    whiteColor,
} from "./common-style"

const InLineBox = styled.div`
    display:inline-block;
    vertical-align:middle;
`;
// side bar box
const SideBarBox = styled.div`
    position:fixed;
    z-index:${levelOneZindex};
    width:${sideBarWidth}px;
    height:100%;
    left:${props => props.isOpened ? '0' : -closedSideBarWidth + 'px'};
    top:0;
    box-shadow: 0 10px 40px 5px rgba(0, 0, 0, 0.5);
    transition:left .4s;

    .opened-sidebar{
        display:${props => props.isOpened ? "block" : "none"};
    }
    .closed-sidebar{
        float:right;
        display:${props => props.isOpened ? "none" : "block"};

        a{
            display:block;
            padding:10px 12px;
            color:#fff;
            transition:all .3s;
        }
        a.active{
            color:#00bcd4;
        }
    }
`;
// side bar background-image
const SideBarBgImage = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    z-index:${levelOneZindex + 1};
    background-size:cover;
    background-position:center center;
    background-image:url("/images/sidebar-bg1.jpg");
`;

const SideBarMask = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    z-index:${levelOneZindex + 2};
    background:${themeRgbaColor};
`;
// bar list
const BarList = styled(ClearFix)`
    position:relative;
    height:calc(100vh - ${sideLogoHeight}px);
    z-index:${levelOneZindex + 3};
    .opened-sidebar{
        width:85%;
        margin:15px auto 0 auto;
    }
    .opened-sidebar li{
        margin-bottom:10px;
        border-radius:5px;
        overflow:hidden;
    }
    .opened-sidebar a{
        position:relative;
        overflow:hidden;
        display: block;
        text-align:center;
        height: 50px;
        line-height:50px;
        color:${whiteColor};
        font-size:20px;
        transition:all .6s;
        &.active{
            background-color:${props => props.themeBgColor};
        }
    }
    .opened-sidebar .wave-mask{
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
    opacity:${props => props.isOpened ? 1 : 0};
    width:85%;
    margin:0 auto;
    text-align:center;
    vertical-align:middle;
    position:relative;
    height:${sideLogoHeight}px;
    line-height:${sideLogoHeight}px;
    position:relative;
    z-index:${levelOneZindex + 3};
    transition:opacity .3s;

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

const SideNavLink = ({ item, onClick }) => (
    <NavLink to={item.path} activeClassName="active">{item.sidebarName}
        <span className="wave-mask" onClick={onClick}></span>
    </NavLink>
)

const SmallNavLink = ({ index, item }) => (
    <NavLink to={item.path} activeClassName="active">{index + 1}</NavLink>
)
class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.ButtonWave = new ButtonWaveEffect()
    }
    clickHandle = (e) => {
        this.ButtonWave.showWave(e)
    }
    render() {
        let { themeBgColor, isOpenedSideBar } = this.props
        return (
            <SideBarBox isOpened={isOpenedSideBar}>
                {/* bg image */}
                <SideBarBgImage></SideBarBgImage>
                <SideBarMask></SideBarMask>
                {/* logo */}
                <LogoBox isOpened={isOpenedSideBar}>
                    <LogoBg></LogoBg>
                    <BarTitle>Simple Room</BarTitle>
                </LogoBox>
                {/* bar list */}
                <BarList themeBgColor={themeBgColor}>
                    {
                        isOpenedSideBar ? <ul className="opened-sidebar">
                            {
                                routeList.map((item, index) => (
                                    <li key={index}>
                                        <SideNavLink item={item} onClick={this.clickHandle} />
                                    </li>
                                ))
                            }
                        </ul> : <ul className="closed-sidebar">
                                {

                                    routeList.map((item, index) => (
                                        <li key={index}>
                                            <SmallNavLink index={index} item={item} />
                                        </li>
                                    ))
                                }
                            </ul>
                    }
                </BarList>
            </SideBarBox>
        )
    }
}
export default SideBar