import React from 'react'
import ChartistGraph from 'react-chartist'
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Icon from '@material-ui/core/Icon'
import Store from '@material-ui/icons/Store'
import Warning from '@material-ui/icons/Warning'
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import AccessTime from '@material-ui/icons/AccessTime'
import Accessibility from '@material-ui/icons/Accessibility'
// import BugReport from '@material-ui/icons/BugReport'
// import Code from '@material-ui/icons/Code'
// import Cloud from '@material-ui/icons/Cloud'
import MuiDatepicker from '../../components/MuiDatepicker/MuiDatepicker'
import MuiTimepicker from '../../components/MuiTimepicker/MuiTimepicker'
// global common style
import { CommonWrap } from '../../components/common-style'
import ScrollToTopMount from '../../components/ScrollToTopMount'

// material ui component
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import CardFooter from '../../components/Card/CardFooter'
import CardIcon from '../../components/Card/CardIcon'
import Danger from '../../components/Typography/Danger'
import Table from '../../components/Table/Table'

import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle'

import {
  weeklyViews,
  yearIncome,
  dailyViews,
  weeklyIncome,
} from '../../dbdata/charts'

const useStyles = makeStyles(styles)

const ChartPage = () => {
  const classes = useStyles()
  return (
    <CommonWrap>
      <ScrollToTopMount />
      <MuiTimepicker />
      {/* ----图表----- */}
      <GridContainer>
        {/* 图表---1 */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={weeklyViews.data}
                type="Line"
                options={weeklyViews.options}
                listener={weeklyViews.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>本周访问量</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                本周访问量
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 4分钟以前
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/* 图表----2 */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={yearIncome.data}
                type="Bar"
                options={yearIncome.options}
                responsiveOptions={yearIncome.responsiveOptions}
                listener={yearIncome.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>年度营收</h4>
              <p className={classes.cardCategory}>上次广告投入</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 5天之前
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* ------------------ */}
      <GridContainer>
        {/* 图表--3 */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="rose">
              <ChartistGraph
                className="ct-chart"
                data={dailyViews.data}
                type="Line"
                options={dailyViews.options}
                listener={dailyViews.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>本日访问量</h4>
              <p className={classes.cardCategory}>每2小时更新</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 刚刚
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/* 图表4 */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={weeklyIncome.data}
                type="Bar"
                options={weeklyIncome.options}
                responsiveOptions={weeklyIncome.responsiveOptions}
                listener={weeklyIncome.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>本周营收</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowDownward className={classes.upArrowCardCategory} /> 23%
                </span>{" "}
                本周营收额
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 1天之前
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* -------热门地区--Table-------------- */}
      <GridContainer>
        {/* 地区统计*/}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <h4 className={classes.cardTitleWhite}>热门景点排名</h4>
                  <p className={classes.cardCategoryWhite}>
                    每月最后一周更新
                  </p>
                </GridItem>
                <MuiDatepicker />
              </GridContainer>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="success"
                tableHead={["名次", "城市", "景点", "组团总次数", "总参与人数", "单次价格/人"]}
                tableData={[
                  ["1", "杭州", "杭州西湖", "89", "98000", "￥168"],
                  ["2", "黄山", "黄山风景区", "68", "79060", "￥368"],
                  ["3", "绍兴", "安山古道", "67", "68040", "￥139"],
                  ["4", "杭州", "杭州湘湖", "59", "56800", "￥139"],
                  ["5", "宁波", "宁波卖柴古道", "49", "48500", "￥168"],
                  ["6", "黄山", "云端村落木梨硔", "38", "36800", "￥268"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {/* ----任务卡片----- */}
      <GridContainer>
        {/* 1 */}
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
    </CommonWrap>
  )
}

export default ChartPage
