import { createActions } from 'redux-actions'

export const { tempSetInfo, tempGetInfo } = createActions(
  {
    TEMP_SET_INFO: info => ({
      info,
    }),
  },
  'TEMP_GET_INFO'
)

export default {}

