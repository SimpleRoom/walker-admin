import {
  createActions
} from 'redux-actions'

export const {
  tempSetInfo,
  tempGetInfo,
  switchThemeColor,
  switchTool,
  // 设置路由名字到header组件
  setRouterText,
} = createActions({
    TEMP_SET_INFO: info => ({
      info,
    }),
    SWITCH_THEME_COLOR: themeInfo => ({ themeInfo }),
    SWITCH_TOOL: status => ({ status }),
    // 设置路由名字到header组件
    SET_ROUTER_TEXT: routerText => ({ routerText })
  },
  'TEMP_GET_INFO'
)

export default {}