import React from 'react'
import ScrollToTopMount from "../../components/ScrollToTopMount"
// global common style
import { CommonWrap } from "../../components/common-style"
// material ui component
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import CustomTabs from '../../components/CustomTabs/CustomTabs'
// import CustomTable from '../../components/CustomTabs/CustomTable'
// core icon
import People from '@material-ui/icons/People'
import DriveEta from '@material-ui/icons/DriveEta'
import LeakAdd from '@material-ui/icons/Flag'

import MuiTimepicker from '../../components/MuiTimepicker/MuiTimepicker'
import MaterialTableWrap from '../../components/MaterialTable/MaterialTable'

import { employeeList } from '../../dbdata/employeedata'
import { columnsArr } from './employeeTableConfig'
import { createMockList } from '../../dbdata/create'
const list  = createMockList(20)
console.log(list)
// console.log(JSON.stringify(list))

const EmployeeManagement = () => {
  return (
    <CommonWrap>
      <ScrollToTopMount />
      <MuiTimepicker />
      {/* 员工*/}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="勇攀高登小组"
            headerColor="primary"
            tabs={[
              {
                tabName: "组长",
                tabIcon: People,
                tabContent: (
                  <MaterialTableWrap
                    columnsConfig={columnsArr}
                    dataList={employeeList[0]} />
                )
              },
              {
                tabName: "司机",
                tabIcon: DriveEta,
                tabContent: (
                  <MaterialTableWrap
                    columnsConfig={columnsArr}
                    dataList={employeeList[1]} />
                )
              },
              {
                tabName: "领队",
                tabIcon: LeakAdd,
                tabContent: (
                  <MaterialTableWrap
                    columnsConfig={columnsArr}
                    dataList={employeeList[2]} />
                )
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </CommonWrap>
  )
}

export default EmployeeManagement
