import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
// ICON
import Favorite from '@material-ui/icons/Favorite'
import Phone from '@material-ui/icons/Phone'
import InputAdornment from '@material-ui/core/InputAdornment'
import AddAlert from '@material-ui/icons/AddAlert'
// core components
import { CommonWrap } from '../../components/common-style'
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
import Snackbar from '../../components/Snackbar/Snackbar'

import avatar from '../../assets/img/defaultAvatar.png'
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
  // 提示消息
  let timerId = null
  const [open, setOpen] = React.useState(false)
  const [place, setPlace] = React.useState("tl")
  const [color, setColor] = React.useState("info")
  const showNotification = () => {
    if (open === false) {
      var rand = Math.floor(Math.random() * 5 + 1)
      var newColor
      switch (rand) {
        case 1:
          newColor = "info"
          break
        case 2:
          newColor = "success"
          break
        case 3:
          newColor = "warning"
          break
        case 4:
          newColor = "danger"
          break
        case 5:
          newColor = "primary"
          break
        default:
          break
      }
      rand = Math.floor(Math.random() * 6 + 1)
      var newPlace
      switch (rand) {
        case 1:
          newPlace = "tl"
          break
        case 2:
          newPlace = "tc"
          break
        case 3:
          newPlace = "tr"
          break
        case 4:
          newPlace = "bl"
          break
        case 5:
          newPlace = "bc"
          break
        case 6:
          newPlace = "br"
          break
        default:
          break
      }
      setPlace(newPlace)
      setColor(newColor)
      setOpen(true)
      timerId = setTimeout(function () {
        setOpen(false)
      }, 5000)
    }
  }
  // -----------------接口请求--------------------------
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
    // 组件销毁时的操作：willUnmounted
    return () => {
      clearTimeout(timerId)
    }
  }, [myGithubInfo, fetchGitInfo, timerId])

  // 添加如果img加载错误就使用默认的头像，避免图片显示错误
  const [imgError, setImgError] = React.useState(false)
  const imgUrlLoadError = () => {
    setImgError(true)
  }

  return (
    <CommonWrap>
      <ScrollToTopMount />
      <GridContainer>
        {/*------编辑区域--------*/}
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="success">
              <h4 className={styles.cardTitleWhite}>个人资料</h4>
              <p className={styles.cardCategoryWhite}>填写自己的详细信息</p>
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
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Phone />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="籍贯"
                    id="city"
                    success
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <CustomInput
                    labelText="暂住地址"
                    id="address"
                    error
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
            <CardFooter>
              <Button color="success" onClick={() => showNotification()}>提交</Button>
              <Button color="rose">重置</Button>
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
                className={styles.avatarLink}
              >
                <img
                  onError={() => imgUrlLoadError()}
                  src={imgError ? avatar : (myGithubInfo.avatar_url ? myGithubInfo.avatar_url : avatar) } alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{myGithubInfo.name || '九成'}</h6>
              <h4 className={classes.cardTitle}>{myGithubInfo.bio || '搬运工...'}</h4>
              <p className={classes.description}>Followers：{myGithubInfo.followers || 0}</p>
              <p className={classes.description}>Repositories：{myGithubInfo.public_repos || 0}</p>
              <p className={classes.description}>Location：{myGithubInfo.location || 'China'}</p>
              <p className={classes.description}>加入时间：{myGithubInfo.created_at || '00:00:00'}</p>
              <a
                href={myGithubInfo.html_url || 'https://github.com/wjf444128852'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color='rose' round><Favorite />Follow</Button>
              </a>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {/* 提示消息 */}
      <Snackbar
        tempPlace={place}
        tempColor={color}
        place={'br'}
        color={'danger'}
        icon={AddAlert}
        message='提交失败，信息填写错误或者服务器无法提交，稍后再试...'
        open={open}
        closeNotification={() => setOpen(false)}
        close
      />
    </CommonWrap>
  )
}

// export default UserProfile
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
