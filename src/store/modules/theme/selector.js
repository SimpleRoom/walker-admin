// import { createSelector } from 'reselect'
import { namespace } from './reducer'

export const getButtonWave = state => state[namespace].ButtonWave

export const getBtnColor = state => state[namespace].themeColor

export const getToolIsOpen = state => state[namespace].toolIsHided

export const getSideBarStatus = state => state[namespace].sidebarIsOpened

export const getRouterText = state => state[namespace].routerText