
/**
 *  1、創建Store 
 * 
 */

// import { createStore, combineReducers  } from 'redux'
// import { rootReducer, initialState } from './reducers'


// import { reducer, initialState as userInitialState } from './currentUser'

// const configureStore = () => {
//     const store = createStore(
//         // rootReducer, // root reducer
//         // initialState, // our initialState

//         combineReducers({
//             time: rootReducer,
//             user: reducer
//         }),
//         {
//             time: initialState,
//             user: userInitialState
//         }
//     )
//     return store
// }
// export default configureStore



import { createStore } from 'redux'
import { rootReducer , initialState } from "./reducers"

export const configureStore = () =>{
    const store = createStore(
        rootReducer,
        initialState,
    )
    return store
}

export default configureStore