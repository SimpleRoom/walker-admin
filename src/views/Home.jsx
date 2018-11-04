import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import styled from "styled-components"

import routeList from "@src/routes"
import SideBar from "@src/components/SideBar"
import NotFound from "@src/components/NotFound"
import Header from "@src/components/header/Header"
import SideTool from "@src/components/SideTool"

// global common style
import {
    levelOneZindex,
    ClearFix,
    headerAndLogoHeight,
    sideBarWidth,
    closedSideBarLeft,
} from "@src/components/common-style"
// content padding-left value while sidebar closed
const closedPadLeft = sideBarWidth - closedSideBarLeft + 20

const ContainerBox = styled(ClearFix)`
    position:relative;
    z-index:${levelOneZindex - 1};
    /* reset padding with props */
    padding-left:${props => props.isOpenedSideBar ? sideBarWidth + 20 + "px" : closedPadLeft + "px"};
    padding-top:${headerAndLogoHeight + 20}px;
    padding-right:20px;
    padding-bottom:20px;
    transition:padding-left .4s;
    /* set height---------------will delete--------------- */
    .long-content{
        line-height:300px;
    }
`;

// HomeBox
const HomeBox = styled.div`
    width:100%;
    height:auto;
    position:relative;
`;
class Home extends React.Component {
    render() {
        // listener theme color from props by redux
        let { buttonColor, sideBar, buttonWave } = this.props
        return (
            <HomeBox>
                {/* side nav bar */}
                <SideBar
                    isOpenedSideBar={sideBar.isOpened}
                    activeBgColor={buttonColor.color}
                    ButtonWave={buttonWave.ButtonWave} />
                {/* top header */}
                <Header
                    activeBgColor={buttonColor.color}
                    isOpenedSideBar={sideBar.isOpened}
                    ButtonWave={buttonWave.ButtonWave} />
                {/* setting */}
                <SideTool />
                <ContainerBox isOpenedSideBar={sideBar.isOpened}>
                    <Switch>

                        {/* component list */}
                        {routeList.map((item, index) => (
                            <Route
                                key={index}
                                path={item.path}
                                exact={item.exact}
                                component={item.component} />
                        ))}
                        {/* default No.1 component */}
                        <Route exact path="/" render={() => (
                            <Redirect to="/dashboard" />
                        )} />
                        <Route exact component={NotFound} />
                    </Switch>
                </ContainerBox>
            </HomeBox >
        )
    }
}

// export default Home
// Listening global state from props
const mapStateToProps = state => {
    return { ...state }
}

export default connect(
    mapStateToProps,
)(Home)