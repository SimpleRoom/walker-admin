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

    .closed-sidebar{
        float:right;
        display:${props => props.isOpened ? "none" : "block"};
        transition:all .3s;
        a{
            display:block;
            padding:10px 12px;
            color:#fff;
            transition:all .3s;
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
    height:50px;
    background-size:100% 100%;
    background-image:url("/images/logo.svg");
`;

const BarTitle = styled(InLineBox)`
    font-size:24px;
    color: #999;
`;

const OpenSideBar = styled.div`
    width:85%;
    margin:15px auto 0 auto;
    display:${props => props.isOpened ? "block" : "none"};
    transition:left .4s;
    a{
        position:relative;
        overflow:hidden;
        display: block;
        color:${whiteColor};
        font-size:16px;
        transition:all .6s;
        border-radius:5px;
        padding:14px 20px;
        span{
            display:inline-block;
            vertical-align:middle;
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
    a.active{
        background-color:${props => props.themeBgColor};
    }
`;

const OpenList = styled.div`
    margin-bottom:10px;
    .nav-icon{
        display:inline-block;
        vertical-align:middle;
        width:22px;
        height:22px;
        margin:0 10px;
        background-size:100% 100%;
        background-image:url(${props => props.iconSrc ? "/images/icon-" + props.iconSrc + ".svg" : ""});
    }
`;
// closed bar list
const ClosedSideBar = styled.div`
    float:right;
    width:32px;
    display:${props => props.isOpened ? "none" : "block"};
    transition:all .3s;
    a{
        display:block;
        text-align:center;
        padding:5px 0;
        transition:all .3s;
        .nav-icon{
            margin:0;
        }
    }
    a.active{
        background-color:${props => props.themeBgColor};
    }
`;
const SideNavLink = ({ item, onClick }) => (
    <NavLink to={item.path} activeClassName="active">
        <span className="nav-icon"></span>
        <span>{item.sidebarName}</span>
        <span className="wave-mask" onClick={onClick}></span>
    </NavLink>
)

const SmallNavLink = ({ item }) => (
    <NavLink to={item.path} activeClassName="active">
        <span className="nav-icon"></span>
    </NavLink>
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
                <BarList>
                    {
                        isOpenedSideBar ? <OpenSideBar themeBgColor={themeBgColor} isOpened={isOpenedSideBar}>
                            {
                                routeList.map((item, index) => (
                                    <OpenList key={index} iconSrc={item.icon}>
                                        <SideNavLink item={item} onClick={this.clickHandle} />
                                    </OpenList>
                                ))
                            }
                        </OpenSideBar> : <ClosedSideBar themeBgColor={themeBgColor} isOpened={isOpenedSideBar}>
                                {

                                    routeList.map((item, index) => (
                                        <OpenList key={index} iconSrc={item.icon}>
                                            <SmallNavLink index={index} item={item} />
                                        </OpenList>
                                    ))
                                }
                            </ClosedSideBar>
                    }
                </BarList>
            </SideBarBox>
        )
    }
}
export default SideBar