// import { createSelector } from 'reselect'

import { namespace } from './reducer'

// Example
export const getLoginState = state => state[namespace].loginState

export const getPermissionRoute = state => state[namespace].routeList

