import React, { Fragment, useState, useEffect } from 'react'
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
import { sessionStore } from '../../utils'
const useStyles = makeStyles(styles)

const List = [
  "You have unread messages.",
  "You got a new task.",
  "You have unread mail.",
  "Other notifications."
]

const NavbarItem = ({ activeBgColor, historyRouter }) => {
  const classes = useStyles()
  const [showMsg, setShowMsg] = useState(false)
  const [showPersonal, setShowPersonal] = useState(false)
  const [myName, setMyName] = useState('')
  const showMsgHandle = () => {
    setShowMsg(!showMsg)
    showPersonal && setShowPersonal(false)
  }
  const showPersonalHandle = () => {
    setShowPersonal(!showPersonal)
    showMsg && setShowMsg(false)
  }
  const signOutHandle = () => {
    historyRouter.push('/login')
  }
  useEffect(() => {
    const info = sessionStore.fetch()
    const { userName } = info
    setMyName(userName)
  }, [])
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
          <span className={classes.notifications}>5</span>
        </Button>
        {/* ------dropdown-list----- */}
        {
          showMsg ? (<DropdownList
            activeBgColor={activeBgColor}
            list={List} />) : null
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
      <div className={classes.manager}>{myName}</div>
    </Fragment>
  )
}

NavbarItem.propType = {
  activeBgColor: PropTypes.string,
  historyRouter: PropTypes.object,
}

export default NavbarItem
