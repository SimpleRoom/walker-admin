import { handleActions } from 'redux-actions'

import {
  tempSetInfo,
  setRouterText,
} from './action'

export const namespace = 'theme'

export const defaultState = {
  temp: 'theme',
  routerText: '',
}

export const themeReducer = handleActions(
  {
    // 示例
    [tempSetInfo]: (state, action) => {
      const { data } = action.payload
      return { ...state, data }
    },
    [setRouterText]: (state, action) => {
      const { routerText } = action.payload || ''
      return { state, routerText }
    }
  },
  defaultState
)

