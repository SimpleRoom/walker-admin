/**
 *  create action list for user operating
 *  組件內部引入使用(用戶操作，改變指定state)
 */
import * as actionTypes from './actionTypes'
//fetch current route list
const fetchRoutePrimisson = permissionId => ({
    type: actionTypes.FETCH_USER_PERMISSION_ROUTE,
    permissionId,
})

// Setting the sidebar button to select the background color
const fetchNewTheme = obj => ({
    type: actionTypes.FETCH_NEW_THEME,
    active: obj.id,
    newColor: obj.color,
})
// toggle side tool box's hiding state
const fetchSettingStatus = isHiding => ({
    type: actionTypes.FETCH_SETTING_STATUS,
    isHide: isHiding,
})
// toggle sidebar's opening state
const fetchBarIsOpened = isOpening => ({
    type: actionTypes.FETCH_SIDE_BAR_IS_OPENED,
    isOpening,
})
export {
    fetchRoutePrimisson,
    fetchNewTheme,
    fetchSettingStatus,
    fetchBarIsOpened,
}