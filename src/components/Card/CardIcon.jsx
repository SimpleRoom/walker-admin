import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// core components
import styles from '../../assets/jss/material-dashboard-react/components/cardIconStyle'

const useStyles = makeStyles(styles)

const CardIcon = ({ className, children, color, ...rest }) => {
  const classes = useStyles()
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + 'CardHeader']]: color,
    [className]: className !== undefined
  })
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  )
}

CardIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose'
  ]),
  children: PropTypes.node
}

export default CardIcon
