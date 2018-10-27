/**
 *  create action list
 */
import * as types from './types'

const fetchNewTheme = rgba => ({
    type: types.FETCH_NEW_THEME,
    payload: rgba,
})

export {
    fetchNewTheme,
}