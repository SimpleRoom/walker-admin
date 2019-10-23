import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
// core components
import ScrollToTopMount from '../../components/ScrollToTopMount'
import GridItem from '../../components/Grid/GridItem'
import GridContainer from '../../components/Grid/GridContainer'
import CustomInput from '../../components/CustomInput/CustomInput'
import Button from '../../components/CustomButtons/CustomButtons'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import CardFooter from '../../components/Card/CardFooter'
import CardAvatar from '../../components/Card/CardAvatar'

import avatar from '../../assets/img/faces/marc.jpg'
import styles from './UserProfile.module.scss'

import { fetchGitInfo } from '../../store/modules/common/action'
import { getGithubData } from '../../store/modules/common/selector'
// 
// import axios from 'axios'

const mapStateToProps = state => ({
  myGithubInfo: getGithubData(state),
})

const mapDispatchToProps = {
  fetchGitInfo,
}

const useStyles = makeStyles(styles)

const UserProfile = (props) => {
  const classes = useStyles()
  // const [info, setInfo] = useState({})
  const { myGithubInfo, fetchGitInfo } = props
  useEffect(() => {
    // 方法一、直接异步获取使用：useState设置
    // const getData = async () => {
    //   const res = await axios.get('https://api.github.com/users/wjf444128852')
    //   setInfo(res.data)
    // }
    // getData()

    // 方法二、使用redux,结合redux-saga获取：异步代码分离
    // 避免每次组件挂载都请求一次
    if (myGithubInfo && !Object.keys(myGithubInfo).length) {
      fetchGitInfo('wjf444128852')
    }
  }, [myGithubInfo, fetchGitInfo])
  return (
    <Fragment>
      <ScrollToTopMount />
      <GridContainer>
        {/*------编辑区域--------*/}
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose">
              <h4 className={classes.cardTitleWhite}>个人资料</h4>
              <p className={classes.cardCategoryWhite}>填写自己的详细信息</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="职位 (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="姓名"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="邮箱地址"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="身份证号码"
                    id="user-pid"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="手机号码"
                    id="phone-num"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="籍贯"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <CustomInput
                    labelText="暂住地址"
                    id="address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>其他信息</InputLabel>
                  <CustomInput
                    labelText="兴趣爱好或者其他自己擅长的技能..."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter className={styles.textRight}>
              <Button color="rose">提交</Button>
            </CardFooter>
          </Card>
        </GridItem>
        {/*------资料显示--------*/}
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a
                href={myGithubInfo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={myGithubInfo.avatar_url || avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{myGithubInfo.name || '九成'}</h6>
              <h4 className={classes.cardTitle}>{myGithubInfo.bio || '搬运工...'}</h4>
              <p className={classes.description}>Location：{myGithubInfo.location || 'China'}</p>
              <p className={classes.description}>Followers：{myGithubInfo.followers || 0}</p>
              <p className={classes.description}>Repositories：{myGithubInfo.public_repos || 0}</p>
              <p className={classes.description}>加入时间：{myGithubInfo.created_at || '00:00:00'}</p>
              <a
                href={myGithubInfo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color='rose' round>Follow</Button>
              </a>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </Fragment>
  )
}

// export default UserProfile
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
