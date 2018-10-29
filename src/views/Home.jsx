import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import styled from "styled-components"

import routeList from "@src/routes"
import SideBar from "@src/components/SideBar"
import NotFound from "@src/components/NotFound"
import Header from "@src/components/Header"
import Setting from "@src/components/Setting"

// global common style
import {
    levelOneZindex,
    ClearFix,
    headerHeight,
    sideBarWidth,
    closedSideBarWidth,
} from "@src/components/common-style"

const closedPadLeft = sideBarWidth - closedSideBarWidth + 20

const ContainerBox = styled(ClearFix)`
    position:relative;
    z-index:${levelOneZindex - 1};
    /* will reset padding with props */
    padding-left:${props => props.isOpenedSideBar ? sideBarWidth + 20 + "px" : closedPadLeft + "px"};
    padding-top:${headerHeight + 20}px;
    padding-right:20px;
    padding-bottom:20px;
    transition:padding-left .4s;
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
        let { currentTheme, sideBarStatus } = this.props
        return (
            <HomeBox>
                {/* side nav bar */}
                <SideBar isOpenedSideBar={sideBarStatus.isOpened} themeBgColor={currentTheme.color} />
                {/* top header */}
                <Header isOpenedSideBar={sideBarStatus.isOpened} />
                {/* setting */}
                <Setting />
                <ContainerBox isOpenedSideBar={sideBarStatus.isOpened}>
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
                            <Redirect to="/curry" />
                        )} />
                        <Route exact component={NotFound} />
                    </Switch>
                </ContainerBox>
            </HomeBox >
        )
    }
}

// export default Home
// 监听全局状态到props
const mapStateToProps = state => {
    return { ...state }
}

export default connect(
    mapStateToProps,
)(Home)