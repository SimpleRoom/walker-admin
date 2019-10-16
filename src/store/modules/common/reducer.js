import { handleActions } from 'redux-actions'

import {
  displaySetDialog,
} from './action'

export const namespace = 'common'

export const defaultState = {
  dialog: {
    key: 0,
    displayed: false,
  },
}

export default handleActions(
  {
    [displaySetDialog]: (state, action) => {
      const { dialog, displayed = true } = action.payload || {}
      const { key } = state.dialog
      dialog.key = key + 1
      return { ...state, dialog: { ...dialog, displayed } }
    },
  },
  defaultState
)

