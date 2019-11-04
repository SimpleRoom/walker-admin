import { handleActions } from 'redux-actions'

import {
  tempSetInfo,
  switchThemeColor,
  switchTool,
  setRouterText,
} from './action'

export const namespace = 'theme'

export const defaultState = {
  temp: 'theme',
  // 按钮主题
  themeColor: {
    color: "#4caf50",
    text: "current-theme",
    activeIndex: 1,
  },
  // 右侧tool是否展开
  toolIsOpened: false,
  routerText: '',
}

export const themeReducer = handleActions(
  {
    // 示例
    [tempSetInfo]: (state, action) => {
      const { data } = action.payload
      return { ...state, data }
    },
    // 主题切换
    [switchThemeColor]: (state, action) => {
      const { themeInfo } = action.payload
      const newTheme = {
        color: themeInfo.color,
        activeIndex: themeInfo.id,
      }
      // console.log(state, action)
      return { ...state, themeColor: { ...newTheme} }
    },
    // 右侧tool工具栏显示切换
    [switchTool]: (state, action) => {
      const { status } = action.payload
      return { ...state, toolIsOpened: status }
    },
    // router text切换
    [setRouterText]: (state, action) => {
      const { routerText } = action.payload || ''
      return { ...state, routerText }
    }
  },
  defaultState
)

