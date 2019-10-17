import { createActions } from 'redux-actions'

export const {
  displaySetDialog,
  fetchPermissionRoute,
  fetchNewTheme,
  fetchBarIsOpened,
  fetchSettingStatus,
  tempGetInfo,
} = createActions(
  {
    DISPLAY_SET_DIALOG: (dialog, displayed) => ({
      dialog,
      displayed,
    }),
    FETCH_PERMISSION_ROUTE: (permissionId) => ({ permissionId }),
    FETCH_NEW_THEME: (info) => ({ info }),
    FETCH_BAR_IS_OPENED: (isOpened) => ({ isOpened }),
    FETCH_SETTING_STATUS: (isHiding) => ({ isHiding }),
  },
  'TEMP_GET_INFO'
)

export default {}

