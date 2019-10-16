import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from './TestPlopAutoCreate.module.scss'

class TestPlopAutoCreate extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        待编辑
      </div>
    )
  }
}

TestPlopAutoCreate.propTypes = {
}

TestPlopAutoCreate.defaultProps = {
}

export default TestPlopAutoCreate
