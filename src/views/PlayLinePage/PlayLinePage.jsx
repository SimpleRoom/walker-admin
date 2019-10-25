import React from 'react'
import styled from 'styled-components'
// core icon
import Favorite from '@material-ui/icons/Favorite'
// material ui component
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import CustomTabs from '../../components/CustomTabs/CustomTabs'
import CustomTable from '../../components/CustomTabs/CustomTable'
// global common style
import ScrollToTopMount from '../../components/ScrollToTopMount'
import { ClearFix } from '../../components/common-style'

// mock data
import { hotSealist, fameStyle, mountains } from '../../dbdata/linedata'

const ProfileBox = styled(ClearFix)`
    position:relative;
`;
const UserPage = () => {
  return (
    <ProfileBox>
      <ScrollToTopMount />
      {/* 海滨 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="温情浪漫海滨"
            headerColor="success"
            tabs={[
              {
                tabName: "北海",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="success"
                    taskList={hotSealist[0]} />
                )
              },
              {
                tabName: "厦门",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="success"
                    taskList={hotSealist[1]} />
                )
              },
              {
                tabName: "海南",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="success"
                    taskList={hotSealist[2]} />
                )
              },
              {
                tabName: "山东",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="success"
                    taskList={hotSealist[3]} />
                )
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      {/* 异域民族风情 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="异域民族风情"
            headerColor="rose"
            tabs={[
              {
                tabName: "西藏",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="rose"
                    taskList={fameStyle[0]} />
                )
              },
              {
                tabName: "云南",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="rose"
                    taskList={fameStyle[1]} />
                )
              },
              {
                tabName: "贵州",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="rose"
                    taskList={fameStyle[2]} />
                )
              },
              {
                tabName: "广西",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="rose"
                    taskList={fameStyle[3]} />
                )
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      {/* 诗情名山胜水 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="诗情名山胜水"
            headerColor="info"
            tabs={[
              {
                tabName: "华东",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="info"
                    taskList={mountains[0]} />
                )
              },
              {
                tabName: "四川",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="info"
                    taskList={mountains[1]} />
                )
              },
              {
                tabName: "湖南",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="info"
                    taskList={mountains[2]} />
                )
              },
              {
                tabName: "西北",
                tabIcon: Favorite,
                tabContent: (
                  <CustomTable
                    tableHeaderColor="info"
                    taskList={mountains[3]} />
                )
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </ProfileBox>
  )
}

export default UserPage