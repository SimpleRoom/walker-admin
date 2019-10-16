import { createSelector } from 'reselect'

import { namespace } from './reducer'

// 获取Dialog
export const getDialog = state => state[namespace].dialog
