/*
 * current theme background-color 
 * 
 */
import * as types from './types'
// initial starting state
export const initialState = {
    color: "#357b7b",
    text: "current-theme",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_NEW_THEME:
            return { ...state,
                color: action.payload
            }

        default:
            return state;
    }
}

export default reducer