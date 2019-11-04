// import { createSelector } from 'reselect'
import { namespace } from './reducer'
// Example
export const getTemp = state => state[namespace].temp

export const getBtnColor = state => state[namespace].themeColor

export const getToolIsOpen = state => state[namespace].toolIsOpened

export const getSideBarStatus = state => state[namespace].sidebarIsOpened

export const getRouterText = state => state[namespace].routerText