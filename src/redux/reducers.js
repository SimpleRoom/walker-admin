
/**
 * 
 */

// import * as types from './types'

// // initial starting state
// const initialState = {
//     currentTime: new Date().toString(),
//     tips: "hello",
// }


// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case types.FETCH_NEW_TIME:
//             return { ...state,
//                 currentTime: action.payload
//             }

//         default:
//             return state;
//     }
// }

// export {
//     rootReducer,
//     initialState
// }


import {  combineReducers  } from 'redux'

import * as currentTime from "./currentTime"
import * as currentUser from "./currentUser"

export const rootReducer = combineReducers({
    currentTime: currentTime.reducer,
    currentUser: currentUser.reducer,
})

export const initialState = {
    currentTime: currentTime.initialState,
    currentUser: currentUser.initialState,
}

export default rootReducer