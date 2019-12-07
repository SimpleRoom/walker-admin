import { createSelector } from 'reselect'

import { namespace } from './reducer'

// Example
export const getLoginState = state => state[namespace].loginState

export const getPermissionRoute = state => state[namespace].routeList

// 用户信息
export const getUserInfo = state => state[namespace].userInfo
// 用户名字
export const getUserName = createSelector(
  [getUserInfo],
  userInfo => (userInfo ? userInfo.userName : null)
)
