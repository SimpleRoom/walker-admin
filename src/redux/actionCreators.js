/**
 *  create action list fro user operate
 */
import * as actionTypes from './actionTypes'
// toggle theme color
const fetchNewTheme = obj => ({
    type: actionTypes.FETCH_NEW_THEME,
    active: obj.id,
    newColor: obj.color,
})
// toggle setting box is hiding
const fetchSettingStatus = isHiding => ({
    type: actionTypes.FETCH_SETTING_STATUS,
    isHide: isHiding,
})
// toggle sidebar isClosed
const fetchBarIsOpened = isOpening => ({
    type: actionTypes.FETCH_SIDE_BAR_IS_CLOSED,
    isOpening,
})
export {
    fetchNewTheme,
    fetchSettingStatus,
    fetchBarIsOpened,
}