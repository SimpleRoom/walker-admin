import { handleActions } from 'redux-actions'
import { sessionStore } from '../../../utils/index'
import routeList from '../../../routes'
import {
  setLogin,
  setLoginOut,
  fetchPermissionRoute,
} from './action'

export const namespace = 'account'

const info = sessionStore.fetch()

export const defaultState = {
  temp: 'account',
  storeTips: 'account store module',
  userInfo: info,
  loginState: (info && Object.keys(info).length) ? 1 : 0,
  routeList: [],
}

export const accountReducer = handleActions(
  {
    // 登录(真实情况需要经过saga)
    [setLogin]: (state, action) => {
      const { info } = action.payload
      let status = 0
      if (info && Object.keys(info).length) {
        sessionStore.save(info)
        status = 1
      }
      // let status = (info && Object.keys(info).length) ? 1 : 0
      return { ...state, loginState: status, userInfo: info }
    },
    // 退出：1.清除用户信息 2.登录状态 3.清除匹配的路由
    [setLoginOut]: (state) => {
      sessionStore.remove()
      return { ...state, loginState: 0, userInfo: null, routeList: [] }
    },
    // 获取路由列表
    [fetchPermissionRoute]: (state, action) => {
      const { permissionId } = action.payload || {}
      console.log(action, ' 权限路由匹配成功..')
      const list = routeList.filter(item => item.permission <= permissionId)
      return { ...state, routeList: [ ...list ]}
    },
  },
  defaultState
)

