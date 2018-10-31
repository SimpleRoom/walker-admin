/*
 * current theme background-color 
 * 
 */
import * as actionTypes from '../actionTypes'
// initial starting state
export const initialState = {
    color: "#357b7b",
    text: "current-theme",
    activeIndex: 0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEW_THEME:
            return { ...state,
                color: action.newColor,
                activeIndex: action.active,
            }

        default:
            return state;
    }
}