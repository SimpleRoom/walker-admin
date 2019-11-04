// import { createSelector } from 'reselect'

import { namespace } from './reducer'

export const getButtonWave = state => state[namespace].ButtonWave

// 获取Dialog
export const getDialog = state => state[namespace].dialog

export const getPermissionRoute = state => state[namespace].routeList

// 获得github个人信息
export const getGithubData = state => state[namespace].githubData || {}