import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Button.module.scss'

const Button = ({ type, size, onClick, className, children, theme, status, ...props }) => (
  <button
    type={type}
    onClick={onClick}
    className={classnames(styles[theme], styles[size], styles[status], className)}
    {...props}
  >
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.string,
  status: PropTypes.string,
  types: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  type: 'button',
  theme: 'flat',
  status: 'primary',
  className: '',
  onClick: null,
  size: '',
}

export default Button
