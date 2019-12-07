import { handleActions } from 'redux-actions'
import { sessionStore } from '../../../utils/index'
import {
  setLogin,
  setLoginOut,
} from './action'

export const namespace = 'account'

const info = sessionStore.fetch()

export const defaultState = {
  temp: 'account',
  storeTips: 'account store module',
  userInfo: info,
  loginState: (info && Object.keys(info).length) ? 1 : 0,
}

export const accountReducer = handleActions(
  {
    // 示例
    [setLogin]: (state, action) => {
      const { info } = action.payload
      let status = 0
      if (info && Object.keys(info).length) {
        sessionStore.save(info)
        status = 1
      }
      // let status = (info && Object.keys(info).length) ? 1 : 0
      return { ...state, loginState: status }
    },
    [setLoginOut]: (state) => {
      sessionStore.remove()
      return { ...state, loginState: 0, userInfo: null }
    }
  },
  defaultState
)

