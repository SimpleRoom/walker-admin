import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

// global common style
import { ClearFix } from '../../components/common-style'
import ScrollToTopMount from '../../components/ScrollToTopMount'

// @material-ui/icons
import Icon from '@material-ui/core/Icon'
import Store from '@material-ui/icons/Store'
import Warning from '@material-ui/icons/Warning'
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'
// import ArrowUpward from '@material-ui/icons/ArrowUpward'
// import AccessTime from '@material-ui/icons/AccessTime'
import Accessibility from '@material-ui/icons/Accessibility'
// import BugReport from '@material-ui/icons/BugReport'
// import Code from '@material-ui/icons/Code'
// import Cloud from '@material-ui/icons/Cloud'

// material ui component
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
// import CardAvatar from '../../components/Card/CardAvatar'
// import CardBody from '../../components/Card/CardBody'
import CardFooter from '../../components/Card/CardFooter'
import CardIcon from '../../components/Card/CardIcon'

import Danger from '../../components/Typography/Danger'

import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle'

const useStyles = makeStyles(styles)


const DashboardBox = styled(ClearFix)`
  position: relative;
`

const DashboardHome = () => {
  const classes = useStyles()
  return (
    <DashboardBox>
      <ScrollToTopMount />
      {/* 一列 */}
      <GridContainer>
        {/* 2 */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color='warning' stats icon>
              <CardIcon color='warning'>
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>本月任务</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>个</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href='#pablo' onClick={e => e.preventDefault()}>
                  查看详情
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/* 2 */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
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
        {/* 3 */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>未达标人数</p>
              <h3 className={classes.cardTitle}>15</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                查看详情
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/* 4 */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>本月营收</p>
              <h3 className={classes.cardTitle}>￥34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                过去一个月
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <div className='list-content'>dasdasd</div>
      <h3 className='long-content'>dashboard</h3>
      <h3 className='long-content'>dashboard</h3>
      <h3 className='long-content'>dashboard</h3>
      <h3 className='long-content'>dashboard</h3>
      <h3 className='long-content'>dashboard</h3>
      <h3 className='long-content'>dashboard</h3>
    </DashboardBox>
  )
}

export default DashboardHome
