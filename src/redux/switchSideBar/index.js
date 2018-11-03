/*
 * current sidebar box is opened
 */
import * as actionTypes from '../actionTypes'
// initial default
export const initState = {
    isOpened: true,
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SIDE_BAR_IS_OPENED:
            return { ...state,
                isOpened: action.isOpening,
            }

        default:
            return state;
    }
}