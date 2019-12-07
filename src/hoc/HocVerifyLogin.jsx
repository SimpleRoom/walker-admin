import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getLoginState } from '../store/modules/account/selector'

export default WrappedComponent => {
  const mapStateToProps = state => ({
    isLogin: getLoginState(state),
  })
  return connect(mapStateToProps)(class HocVerifyLogin extends Component {
    render() {
      console.log(this.props, 'HOC_Verify_Login')
      const { isLogin } = this.props
      if (!isLogin) return (<Redirect to='/login' />)
      return (
        <WrappedComponent {...this.props} />
      )
    }
  })
}
