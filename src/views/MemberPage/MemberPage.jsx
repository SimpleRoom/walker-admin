import React from 'react'
import ScrollToTopMount from '../../components/ScrollToTopMount'
// global common style
import { CommonWrap } from '../../components/common-style'
// material ui component
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import MuiDatepicker from '../../components/MuiDatepicker/MuiDatepicker'
import MaterialTableWrap from '../../components/MaterialTable/MaterialTable'

class MemberPage extends React.Component {
  render() {
    return (
      <CommonWrap>
        <ScrollToTopMount />
        <MuiDatepicker />
        {/* -------会员管理------- */}
        <GridContainer>
          {/* 地区统计*/}
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success">
                <h4>本月新增会员</h4>
                <p>每月最后一周更新</p>
              </CardHeader>
              <CardBody>
                <MaterialTableWrap />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </CommonWrap>
    )
  }
}

export default MemberPage