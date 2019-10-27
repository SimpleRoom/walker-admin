import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Icon from '@material-ui/core/Icon'
import Warning from '@material-ui/icons/Warning'
import Update from '@material-ui/icons/Update'
import Accessibility from '@material-ui/icons/Accessibility'
import SearchIcon from '@material-ui/icons/Search'
import ScrollToTopMount from '../../components/ScrollToTopMount'
// global common style
import { CommonWrap } from '../../components/common-style'
// material ui component
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import CardFooter from '../../components/Card/CardFooter'
import CardIcon from '../../components/Card/CardIcon'
import Danger from '../../components/Typography/Danger'

import MuiDatepicker from '../../components/MuiDatepicker/MuiDatepicker'
import MaterialTableWrap from '../../components/MaterialTable/MaterialTable'
import Button from '../../components/CustomButtons/CustomButtons'

import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle'
// Table thead config
import { columnsArr } from './memberTableConfig'
// mock data
import { memberList } from '../../dbdata/memberdata'
// make styles
const useStyles = makeStyles(styles)

const MemberPage = () => {
  const classes = useStyles()
  return (
    <CommonWrap>
      <ScrollToTopMount />
      <GridContainer>
        {/* 变更情况 */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4>本月会员变更详情</h4>
              <p>每月最后一周更新</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                {/* 1 */}
                <GridItem xs={12} sm={6} md={6}>
                  <Card>
                    <CardHeader color="success" stats icon>
                      <CardIcon color="success">
                        <Accessibility />
                      </CardIcon>
                      <p className={classes.cardCategory}>新增会员</p>
                      <h3 className={classes.cardTitle}>+245</h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <Update />
                        刚刚更新
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                {/* 2 */}
                <GridItem xs={12} sm={6} md={6}>
                  <Card>
                    <CardHeader color="danger" stats icon>
                      <CardIcon color="danger">
                        <Icon>info_outline</Icon>
                      </CardIcon>
                      <p className={classes.cardCategory}>即将过期会员</p>
                      <h3 className={classes.cardTitle}>15</h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <Danger>
                          <Warning />
                        </Danger>
                        <a href='#pablo' onClick={e => e.preventDefault()}>查看详情</a>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {/* -------会员管理------- */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <h4 className={classes.cardTitleWhite}>本月新增会员</h4>
                  <p className={classes.cardCategoryWhite}>每月最后一周更新</p>
                </GridItem>
                <MuiDatepicker />
                {/* <Button color="transparent">查询</Button> */}
                <Button color='transparent' round><SearchIcon />查询</Button>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <MaterialTableWrap
                columnsConfigArr={columnsArr}
                dataList={memberList} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </CommonWrap>
  )
}

export default MemberPage