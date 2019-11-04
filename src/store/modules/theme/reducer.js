import { handleActions } from 'redux-actions'
import ButtonWaveEffect from '../../../utils/ButtonWaveEffect'

import {
  tempSetInfo,
  switchThemeColor,
  switchTool,
  switchSideBar,
  setRouterText,
} from './action'

export const namespace = 'theme'

export const defaultState = {
  storeTips: 'theme store',
  ButtonWave: new ButtonWaveEffect(),
  // 按钮主题
  themeColor: {
    color: "#4caf50",
    text: "current-theme",
    activeIndex: 1,
  },
  // 右侧tool是否展开
  toolIsHided: true,
  sidebarIsOpened: true,
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
      return { ...state, toolIsHided: status }
    },
    [switchSideBar]: (state, action) => {
      const { status } = action.payload
      return { ...state, sidebarIsOpened: status }
    },
    // router text切换
    [setRouterText]: (state, action) => {
      const { routerText } = action.payload || ''
      return { ...state, routerText }
    }
  },
  defaultState
)

