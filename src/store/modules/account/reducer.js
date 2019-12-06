import { handleActions } from 'redux-actions'

import {
  setLogin,
  setLoginOut,
} from './action'

export const namespace = 'account'

export const defaultState = {
  temp: 'account',
  storeTips: 'account store module',
  loginState: 0,
}

export const accountReducer = handleActions(
  {
    // 示例
    [setLogin]: (state, action) => {
      const { info } = action.payload
      let status = (info && Object.keys(info).length) ? 1 : 0
      return { ...state, loginState: status }
    },
    [setLoginOut]: (state) => ({...state, loginState: 0})
  },
  defaultState
)

