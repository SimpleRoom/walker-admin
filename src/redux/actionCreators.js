/**
 *  create action list for user operating
 */
import * as actionTypes from './actionTypes'
// Setting the sidebar button to select the background color
const fetchNewTheme = obj => ({
    type: actionTypes.FETCH_NEW_THEME,
    active: obj.id,
    newColor: obj.color,
})
// toggle setting box's hiding state
const fetchSettingStatus = isHiding => ({
    type: actionTypes.FETCH_SETTING_STATUS,
    isHide: isHiding,
})
// toggle sidebar's hiding state
const fetchBarIsOpened = isOpening => ({
    type: actionTypes.FETCH_SIDE_BAR_IS_CLOSED,
    isOpening,
})
export {
    fetchNewTheme,
    fetchSettingStatus,
    fetchBarIsOpened,
}