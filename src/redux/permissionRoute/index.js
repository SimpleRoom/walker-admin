/*
 * current user route
 *
 */
import * as actionTypes from '../actionTypes'
import routeList from "../../routes"
// initial default
export const initState = {
    routeList: routeList,
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_PERMISSION_ROUTE:
            return {
                ...state,
                routeList: routeList.filter(item => item.permission <= action.permissionId),
            }

        default:
            return state
    }
}