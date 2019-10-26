// import { createSelector } from 'reselect'
import { namespace } from './reducer'
// Example
export const getTemp = state => state[namespace].temp

export const getRouterText = state => state[namespace].routerText