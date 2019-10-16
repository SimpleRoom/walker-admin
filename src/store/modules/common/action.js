import { createActions } from 'redux-actions'

export const {
  displaySetDialog,
  tempGetInfo,
} = createActions(
  {
    DISPLAY_SET_DIALOG: (dialog, displayed) => ({
      dialog,
      displayed,
    }),
  },
  'TEMP_GET_INFO'
)

export default {}

