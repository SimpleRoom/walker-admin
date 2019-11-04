import React, { Fragment } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// material-ui components
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// core components
import Card from '../Card/Card'
import CardBody from '../Card/CardBody'
import CardHeader from '../Card/CardHeader'

import styles from '../../assets/jss/material-dashboard-react/components/customTabsStyle'

const useStyles = makeStyles(styles)

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0)
  const handleChange = (e, value) => {
    e.stopPropagation()
    setValue(value)
  }
  const classes = useStyles()
  const { headerColor, plainTabs, tabs, title } = props
  const cardTitle = classNames({
    [classes.cardTitle]: true,
  })
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone
          }}
          variant='scrollable'
          scrollButtons='auto'
        >
          {tabs.map((prop, key) => {
            var icon = {}
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />
              }
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            )
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop, key) => {
          if (key === value) {
            return <Fragment key={key}>{prop.tabContent}</Fragment>
          }
          return null
        })}
      </CardBody>
    </Card>
  )
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose'
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired
    })
  ),
  plainTabs: PropTypes.bool
}
