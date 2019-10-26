import { createSelector } from 'reselect'
import { namespace } from './reducer'
import { getPermissionRoute } from '../common/selector'
// Example
export const getTemp = state => state[namespace].temp

export const getRouterText = createSelector(
  [getPermissionRoute],
  routeList => {
    console.log(routeList, 'theme----')
    if(routeList.length) {
      return routeList[0].sidebarName
    }
    return ''
  }
)
