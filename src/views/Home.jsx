import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import styled from "styled-components"

import routeList from "@src/routes"
import SideBar from "@src/components/SideBar"
import NotFound from "@src/components/NotFound"
import Header from "@src/components/Header"

// global common style
import {
    levelOneZindex,
    ClearFix,
    headerHeight,
    sideBarWidth,
} from "@src/components/common-style"

const ContainerBox = styled(ClearFix)`
    position:relative;
    z-index:${levelOneZindex - 1};
    /* will reset padding with props */
    padding-left:${props => props.sideBarIsHide ? '20px' : sideBarWidth + 20 + 'px'};
    padding-top:${props => props.headerIsHide ? '20px' : headerHeight + 20 + 'px'};
    padding-right:20px;
    padding-bottom:20px;
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
        let { color } = this.props.currentTheme
        return (
            <HomeBox>
                {/* side nav bar */}
                <SideBar themeBgColor={color} />
                {/* top header */}
                <Header />
                <ContainerBox>
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