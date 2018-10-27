import { combineReducers } from 'redux'
import * as currentTheme from "./currentTheme"

export const rootReducer = combineReducers({
    currentTheme: currentTheme.reducer,
})

export const initialState = {
    currentTheme: currentTheme.initialState,
}

export default rootReducer