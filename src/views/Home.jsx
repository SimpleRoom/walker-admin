import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import Dialog from '../components/Dialog/Dialog'
import SideBar from '../components/SideBar'
import NotFound from '../components/NotFound'
import HeaderNavbar from '../components/HeaderNavbar/HeaderNavbar'
import SideTool from '../components/SideTool'
import Footer from '../components/Footer/Footer'
import HocVerifyLogin from '../hoc/HocVerifyLogin'

// global common style
import {
  levelOneZindex,
  ClearFix,
  sideBarWidth,
  closedSideBarLeft,
} from '../components/common-style'
// react-actions
import { fetchPermissionRoute } from '../store/modules/account/action'
import { setRouterText } from '../store/modules/theme/action'
// reselect
import { getUserInfo, getPermissionRoute } from '../store/modules/account/selector'

import { getButtonWave, getBtnColor, getSideBarStatus } from '../store/modules/theme/selector'

// content padding-left value while sidebar closed
const closedPadLeft = sideBarWidth - closedSideBarLeft + 20

const ContainerBox = styled(ClearFix)`
  position:relative;
  z-index:${levelOneZindex - 1};
  /* reset padding with props */
  padding-left:${props => props.isOpenedSideBar ? sideBarWidth + 20 + "px" : closedPadLeft + "px"};
  padding-top:4px;
  padding-right:20px;
  padding-bottom:20px;
  transition:padding-left .4s;
`;

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routeList: []
    }
  }
  componentDidMount() {
    const { routeList = [], isLogin, userInfo } = this.props
    if (isLogin === 1 && !routeList.length) {
      const { permissionId = 0 } = userInfo || {}
      this.props.fetchPermissionRoute(permissionId)
    }
    // console.log(this.props)
  }

  render() {
    // listener theme color from props by redux
    const { buttonColor, sideBarIsShow, buttonWave, routeList, setRouterText } = this.props
    // console.log(routeList, 'permission')
    return (
      <Fragment>
        {/* <Dialog /> */}
        {/* side nav bar */}
        <SideBar
          routeList={routeList}
          isOpenedSideBar={sideBarIsShow}
          activeBgColor={buttonColor.color}
          ButtonWave={buttonWave}
          setTextToHeader={setRouterText} />
        {/* ----top header bar--- */}
        <HeaderNavbar
          // color="info"
          isOpenedSideBar={sideBarIsShow}
          activeBgColor={buttonColor.color} />
        {/* side-setting */}
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
            <Route exact path="/home" render={() => (
              <Redirect to={routeList.length ? routeList[0].path : '/login'} />
            )} />
            <Route exact component={NotFound} />
          </Switch>
          <Footer />
        </ContainerBox>
      </Fragment>
    )
  }
}

// export default Home
// Listening global state from props

const mapStateToProps = state => ({
  buttonColor: getBtnColor(state),
  sideBarIsShow: getSideBarStatus(state),
  buttonWave: getButtonWave(state),
  userInfo: getUserInfo(state),
  routeList: getPermissionRoute(state),
})

const mapDispatchToProps = {
  fetchPermissionRoute,
  // set router to Header
  setRouterText,
}

export default HocVerifyLogin(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home))