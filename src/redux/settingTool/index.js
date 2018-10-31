/*
 * current setting box's hiding state
 * 
 */
import * as actionTypes from '../actionTypes'
// initial default
export const initState = {
    isHiding: true,
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SETTING_STATUS:
            return { ...state,
                isHiding: action.isHide,
            }

        default:
            return state;
    }
}