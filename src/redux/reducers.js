import {
    combineReducers
} from 'redux'
import * as currentTheme from "./themeColor"
import * as settingBox from "./settingTool"
import * as sideBarStatus from "./sideBarOpenStatus"

// collect default state and update all state to root/components

export const rootReducer = combineReducers({
    currentTheme: currentTheme.reducer,
    settingBox: settingBox.reducer,
    sideBarStatus: sideBarStatus.reducer,
})

export const initialState = {
    currentTheme: currentTheme.initialState,
    settingBox: settingBox.initState,
    sideBarStatus: sideBarStatus.initState,
}

export default rootReducer