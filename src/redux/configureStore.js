// create store to root for global
import { createStore } from 'redux'
import { rootReducer, initialState } from "./reducers"

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        // 使用redux-devtools chrome工具必须要添加的配置
        // https://github.com/zalmoxisus/redux-devtools-extension#usage
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

export default configureStore