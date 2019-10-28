import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
// // 1、引入Store
import configureStore, { commonNamespace, rootSaga, sagaMiddleware } from './store/indexStore'
// reset style
import './styles/reset.css'
import './assets/css/material-dashboard-react.css'
import Login from './components/Login/Login'
import NotFound from './components/NotFound'
import Home from './views/Home'

const Root = ()=>{
    // set store to root for global props
    const store = configureStore({
        [commonNamespace]: {
            globalTips: 'static global store',
        }
    })
    return (
        <Provider store={store}>
          {/* 
            如果需要部署到服务器二级目录下，需要添加如：basename='/admin'，
            对应: www.xx.com/admin 是项目更目录！需要在package.json内配置："homepage": "/admin"，
            来读取相关资源css,js，注意还需要webpack.config的output路径，即config/paths/appBuild
          */}
            <Router basename='/admin'>
            {/* <Router basename='/admin'> */}
                <Switch>
                    {/* Redirect to first route in home */}
                    <Route exact path='/' render={() => (
                        <Redirect to='/home/' />
                    )} />
                    {/* home page */}
                    <Route path='/home/' component={Home} />
                    {/* login page */}
                    <Route exact path='/login/' component={Login} />
                    <Route exact component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    )
}
console.log('%c Welcome to-> https://github.com/SimpleRoom','background:#357b7b;color:#bada55;')

ReactDOM.render( <Root /> , document.getElementById('root'))

sagaMiddleware.run(rootSaga)

serviceWorker.unregister();