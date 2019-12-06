import { createActions } from 'redux-actions'

export const {
  setLogin,
  setLoginOut,
} = createActions(
  {
    SET_LOGIN: info => ({ info }),
  },
  'SET_LOGIN_OUT'
)

export default {}

