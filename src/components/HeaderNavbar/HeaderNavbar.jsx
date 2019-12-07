import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
// material component
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
// component
import Button from '../CustomButtons/CustomButtons'
import NavbarItem from './NavbarItem'

import styles from '../../assets/jss/material-dashboard-react/components/headerStyle'
import { setLoginOut } from '../../store/modules/account/action'
import { getRouterText } from '../../store/modules/theme/selector'
import { getUserName } from '../../store/modules/account/selector'
// global common style
import {
  levelOneZindex,
  ClearFix,
  headerAndLogoHeight,
  sideBarWidth,
  closedSideBarLeft,
} from '../common-style'
// Header left value while closing sideBar
const closedLeft = sideBarWidth - closedSideBarLeft
const openWidth = `calc(100% - ${sideBarWidth}px)`
const closeWidth = `calc(100% - ${closedLeft}px)`

// common scoped style
const HeaderBox = styled(ClearFix)`
  /* position:fixed; */
  position:relative;
  z-index:${levelOneZindex};
  transition:all .4s;
  left:${props => props.isOpenedSideBar ? sideBarWidth + "px" : closedLeft + "px"};
  top:0;
  width: ${props => props.isOpenedSideBar ? openWidth : closeWidth};
  height:${headerAndLogoHeight}px;
  color:#fff;
`;

const useStyles = makeStyles(styles)

const HeaderNavbar = (props) => {
  const classes = useStyles()
  const { color, isOpenedSideBar, activeBgColor, history, userName, setLoginOut, routerText } = props
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  })
  return (
    <HeaderBox isOpenedSideBar={isOpenedSideBar}>
      <AppBar className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            {/* Here we create navbar brand, based on route name */}
            <Button
              className={classes.title}
              color="transparent"
            >
              <span>{routerText}</span>
            </Button>
          </div>
          <Hidden smDown implementation="css">
            <NavbarItem
              userName={userName}
              activeBgColor={activeBgColor}
              historyRouter={history}
              loginOut={setLoginOut}
            />
          </Hidden>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </HeaderBox>
  )
}

HeaderNavbar.propType = {
  isOpenedSideBar: PropTypes.bool,
  activeBgColor: PropTypes.string,
  history: PropTypes.object,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  routerText: PropTypes.string,
}

const mapStateToProps = state => ({
  routerText: getRouterText(state),
  userName: getUserName(state),
})

const mapDispatchToProps = {
  setLoginOut,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderNavbar))
