/**
 * 
 */

import * as types from './types'
// initial starting state
export const initialState = {
    currentTime: new Date().toString(),
    tips: "currentTime",
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_NEW_TIME:
            return { ...state,
                currentTime: action.payload
            }

        default:
            return state;
    }
}

export default reducer