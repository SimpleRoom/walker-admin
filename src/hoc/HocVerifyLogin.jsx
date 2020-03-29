import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getLoginState } from '../store/modules/account/selector'

/**
 * 验证登录状态的的高阶组件
 * 1.登录成功后setLogin把登录状态暂存
 * 2.每次路由切换都会进入这个高阶组件进行验证登录是否过期，先获取getLoginState，融合到HocVerifyLogin，
 *  若过期返回登录页面(类式vue路由的before验证)
 * 3.严格验证
 */
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
