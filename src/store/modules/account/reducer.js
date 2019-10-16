import { handleActions } from 'redux-actions'

import {
  tempSetInfo,
} from './action'

export const namespace = 'account'

export const defaultState = {
  temp: 'account',
}

export default handleActions(
  {
    // 示例
    [tempSetInfo]: (state, action) => {
      const { data } = action.payload
      return { ...state, data }
    },
  },
  defaultState
)

