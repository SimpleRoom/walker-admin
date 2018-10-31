import {
    combineReducers
} from 'redux'
import * as buttonColor from "./toggleButtonColor"
import * as sideTool from "./switchSideTool"
import * as sideBar from "./switchSideBar"

// collect default state and update all state to root/components
export const rootReducer = combineReducers({
    buttonColor: buttonColor.reducer,
    sideTool: sideTool.reducer,
    sideBar: sideBar.reducer,
})
// create default state for components
export const initialState = {
    buttonColor: buttonColor.initialState,
    sideTool: sideTool.initState,
    sideBar: sideBar.initState,
}

export default rootReducer