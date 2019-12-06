import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {
  all
} from 'redux-saga/effects'

import commonSaga from './modules/common/saga'
// 其他需要异步
// import themeSaga from './modules/theme/saga'
import {
  defaultState,
  commonReducer,
  namespace as commonNamespace
} from './modules/common/reducer'
import {
  themeReducer,
  defaultState as themeDefault,
  namespace as themeNameSpace
} from './modules/theme/reducer'
import {
  accountReducer,
  defaultState as accountState,
  namespace as accountNameSpace
} from './modules/account/reducer'

export {
  namespace as commonNamespace, commonReducer
}
from './modules/common/reducer'

const rootReducer = combineReducers({
  [accountNameSpace]: accountReducer,
  [commonNamespace]: commonReducer,
  [themeNameSpace]: themeReducer,
})

export function* rootSaga() {
  yield all([
    ...commonSaga,
    // ...themeSaga,
  ])
}

// const sagaMiddleware = createSagaMiddleware()
export const sagaMiddleware = createSagaMiddleware()

export default (receivedState) => {
  const initialState = receivedState
  initialState[accountNameSpace] = {
    ...accountState,
    ...initialState[accountNameSpace],
  }
  initialState[commonNamespace] = {
    ...defaultState,
    ...initialState[commonNamespace],
  }
  initialState[themeNameSpace] = {
    ...themeDefault,
    ...initialState[themeNameSpace],
  }
  // 浏览器redux查看插件
  const reduxDebug = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

  const store = createStore(
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