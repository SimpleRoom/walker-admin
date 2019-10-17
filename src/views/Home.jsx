import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
    fetchPermissionRoute,
    // fetchNewTheme,
    // fetchBarIsOpened,
    // fetchSettingStatus,
} from '../store/modules/common/action'
import {
    getThemeColor,
    getButtonWave,
    getSideBarIsOpened,
    getPermissionRoute,
} from '../store/modules/common/selector'

import { sessionStore } from '../utils'
// import routeList from "../routes"
// import Dialog from '../components/Dialog/Dialog'
import SideBar from '../components/SideBar'
import NotFound from '../components/NotFound'
import Header from '../components/Header/Header'
import SideTool from '../components/SideTool'

// global common style
import {
    levelOneZindex,
    ClearFix,
    headerAndLogoHeight,
    sideBarWidth,
    closedSideBarLeft,
} from "../components/common-style"
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
    constructor(props) {
        super(props)
        this.state = {
            routeList: []
        }
    }
    componentDidMount() {
        const info = sessionStore.fetch()
        if (info && Object.keys(info).length) {
            const { permissionId = 0 } = info || {}
            this.props.fetchPermissionRoute(permissionId)
        }
        // console.log(this.props)
    }

    render() {
        // listener theme color from props by redux
        const { buttonColor, sideBarIsShow, buttonWave, routeList } = this.props
        // console.log(routeList, 'permission')
        return (
            <HomeBox>
                {/* <Dialog /> */}
                {/* side nav bar */}
                <SideBar
                    routeList={routeList}
                    isOpenedSideBar={sideBarIsShow}
                    activeBgColor={buttonColor.color}
                    ButtonWave={buttonWave} />
                {/* top header */}
                <Header
                    activeBgColor={buttonColor.color}
                    isOpenedSideBar={sideBarIsShow}
                    ButtonWave={buttonWave} />
                {/* setting */}
                <SideTool />
                <ContainerBox isOpenedSideBar={sideBarIsShow}>
                    <Switch>
                        {/* component list */}
                        {routeList.length ? routeList.map((item, index) => (
                            <Route
                                key={index}
                                path={item.path}
                                exact={item.exact}
                                component={item.component} />
                        )) : null}
                        {/* default No.1 component */}
                        <Route exact path="/home/" render={() => (
                            <Redirect to={routeList.length ? routeList[0].path : '/login'} />
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

const mapStateToProps = state => ({
    buttonColor: getThemeColor(state),
    sideBarIsShow: getSideBarIsOpened(state),
    buttonWave: getButtonWave(state),
    routeList: getPermissionRoute(state),
})

const mapDispatchToProps = {
    fetchPermissionRoute,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)