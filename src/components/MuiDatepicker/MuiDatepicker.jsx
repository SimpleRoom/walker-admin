import 'date-fns'
import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
// 自定义重置 datepicker样式
import styles from '../../assets/jss/material-dashboard-react/components/muiDatepicker'

import GridItem from '../Grid/GridItem'

const useStyles = makeStyles(styles)

export default function MuiDatepicker() {
  const classes = useStyles()
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <GridItem xs={12} sm={12} md={3}>
        <KeyboardDatePicker
          className={classes.noMargin}
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