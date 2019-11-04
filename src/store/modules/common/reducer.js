import { handleActions } from 'redux-actions'
import routeList from '../../../routes'

import {
  displaySetDialog,
  fetchPermissionRoute,
  // 暂存github信息
  setGithubInfo,
} from './action'

export const namespace = 'common'

export const defaultState = {
  dialog: {
    key: 0,
    displayed: false,
  },
  routeList: [],
  // github个人信息
  githubInfo: {},
}

export const commonReducer = handleActions(
  {
    [displaySetDialog]: (state, action) => {
      const { dialog, displayed = true } = action.payload || {}
      const { key } = state.dialog
      dialog.key = key + 1
      return { ...state, dialog: { ...dialog, displayed } }
    },

    [fetchPermissionRoute]: (state, action) => {
      const { permissionId } = action.payload || {}
      console.log(action, ' 权限路由匹配成功..')
      const list = routeList.filter(item => item.permission <= permissionId)
      return { ...state, routeList: [ ...list ]}
    },

    [setGithubInfo]: (state, action) => {
      const { githubData } = action.payload
      return { ...state, githubData }
    }
  },
  defaultState
)
