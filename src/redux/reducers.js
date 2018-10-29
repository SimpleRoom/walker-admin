import { combineReducers } from 'redux'
import * as currentTheme from "./themeColor"
import * as settingBox from "./settingTool"

// collect default state and update all state to root/components

export const rootReducer = combineReducers({
    currentTheme: currentTheme.reducer,
    settingBox: settingBox.reducer,
})

export const initialState = {
    currentTheme: currentTheme.initialState,
    settingBox: settingBox.initState,
}

export default rootReducer