import 'date-fns'
import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers'

import GridItem from '../Grid/GridItem'

export default function MuiTimepicker() {
  // The first commit of Material-UI
  const [selectedTime, setSelectedTime] = useState(new Date())

  const handleTimeChange = time => {
    setSelectedTime(time)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <GridItem xs={12} sm={12} md={3}>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="当前时间"
          value={selectedTime}
          onChange={handleTimeChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </GridItem>
    </MuiPickersUtilsProvider>
  )
}