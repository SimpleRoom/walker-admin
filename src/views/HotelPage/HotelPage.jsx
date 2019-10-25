import React from 'react'
import styled from 'styled-components'
import ScrollToTopMount from '../../components/ScrollToTopMount'
// core icon
import Room from '@material-ui/icons/Room'
// material ui component
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import HotelCard from '../../components/HotelCard/HotelCard'
import CustomTabs from '../../components/CustomTabs/CustomTabs'
import HotelList from '../../components/HotelList/HotelList'
// global common style
import { ClearFix } from '../../components/common-style'

import { hotelCategorys, hotelList } from '../../dbdata/hoteldata'

const ProfileBox = styled(ClearFix)`
    position:relative;
`;

const HotelPage = () => {
  console.log(hotelCategorys, '111')
  return (
    <ProfileBox>
      <ScrollToTopMount />
      <GridContainer>
        {
          hotelCategorys !== undefined ? hotelCategorys.map(category => (
            <GridItem xs={12} sm={12} md={3} key={category.id}>
              <HotelCard
                title={category.title}
                imgSrc={category.img_url}
                descText={category.description}
              />
            </GridItem>
          )) : null
        }
      </GridContainer>
      {/* 列表 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            headerColor="success"
            tabs={[
              {
                tabName: "三亚",
                tabIcon: Room,
                tabContent: (
                  <HotelList infoList={hotelList[0]} />
                )
              },
              {
                tabName: "湖州",
                tabIcon: Room,
                tabContent: (
                  <HotelList infoList={hotelList[1]} />
                )
              },
              {
                tabName: "上海",
                tabIcon: Room,
                tabContent: (
                  <HotelList infoList={hotelList[2]} />
                )
              },
              {
                tabName: "杭州",
                tabIcon: Room,
                tabContent: (
                  <HotelList infoList={hotelList[3]} />
                )
              },
              {
                tabName: "苏州",
                tabIcon: Room,
                tabContent: (
                  <HotelList infoList={hotelList[4]} />
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </ProfileBox>
  )
}

export default HotelPage