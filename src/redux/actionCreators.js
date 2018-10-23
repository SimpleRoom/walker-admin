/**
 *  1 創建不同類型的動作
 * 
 */

import * as types from './types'

const fetchNewTime = () => ({
    type: types.FETCH_NEW_TIME,
    payload: new Date().toString(),
})

const login = (user) => ({
    type: types.LOGIN,
    payload: user,
})

const logout = () => ({
    type: types.LOGOUT
})

export {
    fetchNewTime,
    login,
    logout
}