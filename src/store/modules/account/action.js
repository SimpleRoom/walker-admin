import { createActions } from 'redux-actions'

export const {
  setLogin,
  setLoginOut,
  fetchPermissionRoute,
} = createActions(
  {
    SET_LOGIN: info => ({ info }),
    FETCH_PERMISSION_ROUTE: (permissionId) => ({ permissionId }),
  },
  'SET_LOGIN_OUT'
)

export default {}

