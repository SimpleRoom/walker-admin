import React from 'react'
import PropTypes from 'prop-types'

import GirdContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'
import CardBasic from '../CardBasic/CardBasic'

const HotelList = ({ infoList }) => (
  <GirdContainer>
    {
      infoList !== undefined ? infoList.map(info => (
        <GridItem xs={12} sm={12} md={3} key={info.id}>
          <CardBasic hotelInfo={info} />
        </GridItem>
      )) : <div>当前列表为空</div>
    }
  </GirdContainer>
)

HotelList.propTypes = {
  infoList: PropTypes.array,
}

HotelList.defaultProps = {
  infoList: [],
}

export default HotelList
