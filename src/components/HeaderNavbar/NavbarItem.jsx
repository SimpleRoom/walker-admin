import React, { Fragment, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// // @material-ui/icons
import Notifications from '@material-ui/icons/Notifications'
import Person from '@material-ui/icons/Person'
import Search from '@material-ui/icons/Search'
// core components
import CustomInput from '../CustomInput/CustomInput'
import Button from '../CustomButtons/CustomButtons'
import DropdownList from './DropdownList'

import styles from '../../assets/jss/material-dashboard-react/components/headerLinksStyle'
// utils
const useStyles = makeStyles(styles)

const List = [
  '个人面板',
  '我的订单',
  '密码修改',
]

const MsgList = [
  '权限升级通知',
  '今日任务',
  '订单取消通知',
  '过期任务未删除',
  '3项新任务尚未处理',
]

const NavbarItem = ({ userName, activeBgColor, historyRouter, loginOut }) => {
  const classes = useStyles()
  const [count, setCount] = useState(5)
  const [showMsg, setShowMsg] = useState(false)
  const [showPersonal, setShowPersonal] = useState(false)
  const readMsgHandle = () => {
    let num = count - 1
    if (num <= 0) num = 0
    setCount(num)
  }
  const showMsgHandle = (e) => {
    e.stopPropagation()
    setShowMsg(!showMsg)
    showPersonal && setShowPersonal(false)
  }
  const showPersonalHandle = (e) => {
    e.stopPropagation()
    setShowPersonal(!showPersonal)
    showMsg && setShowMsg(false)
  }
  const signOutHandle = () => {
    loginOut()
    historyRouter.push('/login')
  }

  // 点击其他地方取消dropdown的显示，useCallback去除副作用
  const cancleDropHandle = useCallback(() => {
    showMsg && setShowMsg(false)
    showPersonal && setShowPersonal(false)
  }, [showMsg, showPersonal])

  useEffect(() => {
    // 点击其他地方就取消
    window.addEventListener('click', cancleDropHandle)
    return () => {
      window.removeEventListener('click', cancleDropHandle)
    }
  }, [cancleDropHandle])

  return (
    <Fragment>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div>
      <div className={classes.manager}>
        <Button
          color="transparent"
          justIcon
          simple
          onClick={showMsgHandle}
        >
          <Notifications className={classes.icons} />
          {
            count ? <span className={classes.notifications}>{count}</span> : null
          }
        </Button>
        {/* ------dropdown-list----- */}
        {
          showMsg ? (<DropdownList
            activeBgColor={activeBgColor}
            onClick={readMsgHandle}
            list={MsgList} />) : null
        }
      </div>
      <div className={classes.manager}>
        <Button
          color="transparent"
          justIcon
          simple
          onClick={showPersonalHandle}
        >
          <Person className={classes.icons} />
        </Button>
        {/* ------dropdown-list----- */}
        {
          showPersonal ? (<DropdownList
            activeBgColor={activeBgColor}
            list={List}
            signOut={signOutHandle} />) : null
        }
      </div>
      <div className={classes.manager}>{userName}</div>
    </Fragment>
  )
}

NavbarItem.propType = {
  activeBgColor: PropTypes.string,
  historyRouter: PropTypes.object,
  loginOut: PropTypes.func,
  userName: PropTypes.string,
}

export default NavbarItem
