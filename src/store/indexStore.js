import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import commonSaga from './modules/common/saga'
import { defaultState, commonReducer, namespace as commonNamespace } from './modules/common/reducer'

export { namespace as commonNamespace, commonReducer } from './modules/common/reducer'

const rootReducer = combineReducers({
  [commonNamespace]: commonReducer,
})

export function* rootSaga() {
  yield all([
    ...commonSaga,
  ])
}

// const sagaMiddleware = createSagaMiddleware()
export const sagaMiddleware = createSagaMiddleware()

export default (receivedState) => {
  const initialState = receivedState
  initialState[commonNamespace] = {
    ...defaultState,
    ...initialState[commonNamespace],
  }
  // 浏览器redux查看插件
  const reduxDebug = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

  const store =  createStore(
    rootReducer,
    initialState,
    // applyMiddleware(sagaMiddleware),
    compose(
      applyMiddleware(sagaMiddleware),
      reduxDebug
    )
  )
  // sagaMiddleware(rootSaga)
  return store
}