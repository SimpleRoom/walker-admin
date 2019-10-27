import React from 'react'
import PropTypes from 'prop-types'

import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'
import MuiDatepicker from '../MuiDatepicker/MuiDatepicker'
import Button from '../CustomButtons/CustomButtons'

const PickerWithButton = ({ color }) => {
  return (
    <GridContainer>
      <MuiDatepicker />
      <GridItem xs={12} sm={12} md={3}>
        <Button color={color}>查询</Button>
      </GridItem>
    </GridContainer>
  )
}

PickerWithButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'transparent'
  ]),
}

export default PickerWithButton
