import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// global common style
import {
  levelOneZindex,
  ClearFix,
  sideBarWidth,
  closedSideBarLeft,
  headerAndLogoHeight,
  borderRadius,
  themeRgbaColor,
  whiteColor,
} from "./common-style"
// scoped style
const smallBarWidth = sideBarWidth - closedSideBarLeft
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
    left:${props => props.isOpened ? '0' : -closedSideBarLeft + 'px'};
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
    height:calc(100vh - ${headerAndLogoHeight}px);
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
    height:${headerAndLogoHeight}px;
    line-height:${headerAndLogoHeight}px;
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
        border-radius:${borderRadius}px;
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
        background-color:${props => props.activeBgColor};
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
    position:relative;
    width:${smallBarWidth}px;
    display:${props => props.isOpened ? "none" : "block"};
    transition:all .3s;
    a{
        display:block;
        height:${smallBarWidth}px;
        line-height:${smallBarWidth}px;
        text-align:center;
        transition:all .3s;
        .nav-icon{
            margin:0;
        }
    }
    a.active{
        background-color:${props => props.activeBgColor};
    }
`;
// hover tips while sidebar closed

const HoverBox = styled.div`
    position:absolute;
    height:${smallBarWidth}px;
    line-height:${smallBarWidth}px;
    background:${props => props.activeBgColor};
    left:${smallBarWidth + 14}px;
    top:${props => props.offTop}px;
    padding: 0 20px;
    white-space: nowrap;
    color:${whiteColor};
    font-size:14px;
    border-radius:${borderRadius - 2}px;
    box-shadow:0 12px 20px -10px ${props => props.activeBgColor};
    
    &:before{
        display:table;
        position:absolute;
        top:50%;
        left:-16px;
        transform:translateY(-50%);
        content:"";
        border:8px solid transparent;
        border-right-color:${props => props.activeBgColor};
    }
`;
const HoverTips = ({ activeBgColor, currentNavName, offTop }) => (
  currentNavName ?
    <HoverBox
      activeBgColor={activeBgColor}
      offTop={offTop}>
      {currentNavName}
    </HoverBox> : null
)

// opened
const SideNavLink = ({ item, onClick }) => (
  <NavLink to={item.path} activeClassName="active">
    <span className="nav-icon"></span>
    <span>{item.sidebarName}</span>
    <span className="wave-mask" data-text={item.sidebarName} onClick={onClick}></span>
  </NavLink>
)
// closed
const SmallNavLink = ({ item, onMouseEnter, onMouseLeave }) => (
  <NavLink to={item.path} activeClassName="active"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    data-name={item.sidebarName}>
    <span className="nav-icon"></span>
  </NavLink>
)
class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNavName: null,
      offsetTop: 0,
    }
  }
  clickHandle = event => {
    const { setTextToHeader } = this.props
    const { text } = event.currentTarget.dataset
    text && setTextToHeader(text)
    // use global function with event from redux
    this.props.ButtonWave.showWave(event)
  }
  mouserEnter = event => {
    event.persist()
    let targetElem = event.target
    let currentNavName = targetElem.getAttribute("data-name")
    let offsetTop = targetElem.offsetTop
    this.setState({ currentNavName, offsetTop })
  }
  mouserLeave = () => {
    this.setState({ currentNavName: null })
  }
  render() {
    const { activeBgColor, isOpenedSideBar, routeList } = this.props
    const { currentNavName, offsetTop } = this.state
    return (
      <SideBarBox isOpened={isOpenedSideBar}>
        {/* bg image */}
        <SideBarBgImage />
        <SideBarMask />
        {/* logo */}
        <LogoBox isOpened={isOpenedSideBar}>
          <LogoBg />
          <BarTitle>徒步者</BarTitle>
        </LogoBox>
        {/* bar list */}
        <BarList>
          {
            isOpenedSideBar ?
              (<OpenSideBar
                activeBgColor={activeBgColor}
                isOpened={isOpenedSideBar}>
                {
                  routeList.map((item, index) => (
                    <OpenList key={index} iconSrc={item.icon}>
                      <SideNavLink
                        item={item}
                        onClick={this.clickHandle} />
                    </OpenList>
                  ))
                }
              </OpenSideBar>) :
              (<ClosedSideBar
                activeBgColor={activeBgColor}
                isOpened={isOpenedSideBar}>
                {
                  routeList.map((item, index) => (
                    <OpenList key={index} iconSrc={item.icon}>
                      <SmallNavLink
                        onMouseEnter={this.mouserEnter}
                        onMouseLeave={this.mouserLeave}
                        item={item} />
                    </OpenList>
                  ))
                }
                <HoverTips
                  activeBgColor={activeBgColor}
                  currentNavName={currentNavName}
                  offTop={offsetTop} />
              </ClosedSideBar>)
          }
        </BarList>
      </SideBarBox>
    )
  }
}
export default SideBar