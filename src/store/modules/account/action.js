import { createActions } from 'redux-actions'

export const { tempGetInfo } = createActions(
  {
    TEMP_SET_INFO: info => ({
      info,
    }),
  },
  'TEMP_GET_INFO'
)

export default {}

