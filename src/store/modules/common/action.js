import { createActions } from 'redux-actions'

export const {
  // 模板
  tempGetInfo,
  tempSetInfo,
  // 无接口本地公有
  displaySetDialog,
  fetchPermissionRoute,
  fetchBarIsOpened,
  // 获取github个人信息
  fetchGitInfo,
  setGithubInfo,
} = createActions(
  {
    DISPLAY_SET_DIALOG: (dialog, displayed) => ({
      dialog,
      displayed,
    }),
    FETCH_PERMISSION_ROUTE: (permissionId) => ({ permissionId }),
    FETCH_BAR_IS_OPENED: (isOpened) => ({ isOpened }),
    // 获取github个人信息
    FETCH_GIT_INFO: (username) => ({ username }),
    SET_GITHUB_INFO: (githubData) => ({ githubData}),
  },
  'TEMP_GET_INFO'
)

export default {}

