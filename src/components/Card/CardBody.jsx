import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// core components
import styles from '../../assets/jss/material-dashboard-react/components/cardBodyStyle'

const useStyles = makeStyles(styles)

const CardBody = ({ className, children, plain, profile, ...rest }) => {
  const classes = useStyles()
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  })
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  )
}

CardBody.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  children: PropTypes.node
}

export default CardBody
