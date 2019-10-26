import 'date-fns'
import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

import GridItem from '../Grid/GridItem'

export default function MuiDatepicker() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <GridItem xs={12} sm={12} md={3}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="当前日期"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </GridItem>
    </MuiPickersUtilsProvider>
  );
}