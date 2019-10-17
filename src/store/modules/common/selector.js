// import { createSelector } from 'reselect'

import { namespace } from './reducer'

export const getButtonWave = state => state[namespace].ButtonWave

// 获取Dialog
export const getDialog = state => state[namespace].dialog

export const getPermissionRoute = state => state[namespace].routeList

export const getThemeColor = state => state[namespace].buttonColor

export const getSideBarIsOpened = state => state[namespace].isOpened

export const getSideToolIsHiding = state => state[namespace].isHiding