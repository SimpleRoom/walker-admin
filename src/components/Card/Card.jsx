import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// core components
import styles from '../../assets/jss/material-dashboard-react/components/cardStyle'

const useStyles = makeStyles(styles)

const Card = ({ className, children, plain, profile, chart, ...rest }) => {
  const classes = useStyles()
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  })
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
}

export default Card
