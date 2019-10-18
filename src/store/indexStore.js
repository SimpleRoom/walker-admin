import {
  createStore,
  combineReducers,
  // compose,
  // applyMiddleware,
} from 'redux'

import { defaultState, commonReducer, namespace as commonNamespace } from './modules/common/reducer'

export { namespace as commonNamespace, commonReducer } from './modules/common/reducer'

const rootReducer = combineReducers({
  [commonNamespace]: commonReducer,
})

export default (receivedState) => {
  const initialState = receivedState
  initialState[commonNamespace] = {
    ...defaultState,
    ...initialState[commonNamespace],
  }

  return createStore(
    rootReducer,
    initialState || null,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}