import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { CanvasBg } from '../../canvas'
// 自定义的组件
import NoticeMessage from '../Notifications/NoticeMessage'
// global common style
import {
  levelOneZindex,
  ClearFix,
  themeRgbaColor,
} from '../common-style'
import { sessionStore, getBrowserInfo } from '../../utils'
// material-button
import Button from '../CustomButtons/CustomButtons'

// react-actions
import {
  fetchPermissionRoute,
} from '../../store/modules/common/action'
// reselect
// import { getTempData } from '../../store/modules/common/selector'

const loginBtnBg = "#00acc1"
// login box
const LoginBgBox = styled(ClearFix)`
    position:fixed;
    width:100%;
    height:100%;
    z-index:${levelOneZindex};
    background-image: radial-gradient(ellipse farthest-corner at center top, ${themeRgbaColor} 0%, #000105 100%);
    cursor: move;
`
// login form
const FormBox = styled.div`
    width:260px;
    height:200px;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom: 0;
    margin:auto;
    cursor:pointer;
`
const FormList = styled.div`
    position:relative;
    margin-bottom:12px;
    padding:6px 0;
    background:#fff;
    input{
        padding:6px 15px;
        font-size:14px;
        color:#aaa;
        width:100%;
        cursor:pointer;
        background:#fff;

        &:focus+.line{
            transform:scaleX(1);
        }
    }
    .line{
        position:absolute;
        width:100%;
        height:4px;
        background:${loginBtnBg};
        left:0;
        top:0;
        transform:scaleX(0);
        transition:transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    }
`

class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      type: "text",
      userName: "",
      userPwd: "",
      // default state value
      message: null,
      messageType: null,
      animationName: null,
    }
    this.messageInfo = {
      success: {
        message: "登录成功",
        animationName: null
      },
      warning: {
        message: "用户名不能为空！",
        animationName: "slideInLeft"
      },
      error: {
        message: "密码不能为空！",
        animationName: "shake",
      },
    }
  }

  componentDidMount() {
    // create canvas background with canvas id
    new CanvasBg("canvasMoveBg")
    // console.log(this.props, 'header-didMount')
  }

  updateUserName = e => {
    const userName = e.target.value
    this.setState({ userName })
  }

  updateUserPwd = e => {
    const userPwd = e.target.value
    this.setState({ userPwd })
  }

  // reset input type while on focusing to prevent browser remember password
  resetInputType = () => {
    const { type } = this.state
    const newType = type === "text" ? "password" : type
    this.setState({
      type: newType
    })
  }

  keyUpEnter = (e) => {
    const { keyCode } = e
    if (keyCode && keyCode === 13) {
      this.login(e)
    }
  }

  login = (e) => {
    const { userName, userPwd } = this.state
    const zhReg = new RegExp("[\\u4E00-\\u9FFF]+", "g")
    if (!userName) {
      return this.showMessage("warning")
    }
    if (userName && zhReg.test(userName)) {
      return this.setState({
        messageType: "error",
        message: "Username cannot contain Chinese !",
        animationName: "bounce",
      })
    }
    if (!userPwd) {
      return this.showMessage("error")
    }
    if (userName && userPwd) {
      const { history } = this.props
      //mock permission id：对应routes/routelist[i].permission(控制用户登录权限1-5)
      const permissionId = 6
      const info = { userName, userPwd, permissionId }
      // save to sessionStorage
      sessionStore.save(info)
      // back default type
      this.resetInputType()
      // fetch routelist
      this.props.fetchPermissionRoute(permissionId)
      // back to home
      history.push("/")
      const browserInfo = getBrowserInfo()
      console.log(`浏览器信息是：${browserInfo}`)
      // console.log('IP信息是：', returnCitySN)
    }
  }

  showMessage(messageType) {
    const { message, animationName } = this.messageInfo[messageType]
    this.setState({ messageType, message, animationName })
  }

  // remove notifications callback
  removeNotification = () => {
    this.setState({ message: null, type: null })
  }

  render() {
    const { type, userName, userPwd, message, messageType, animationName } = this.state
    return (
      <LoginBgBox>
        {
          message ?
            <NoticeMessage message={message}
              type={messageType}
              animation={animationName}
              removeAlert={this.removeNotification} /> : null
        }
        <canvas id="canvasMoveBg" />
        <FormBox>
          <FormList>
            <input className="user-name"
              autoComplete="off"
              type="text"
              value={userName}
              placeholder="账号"
              maxLength="10"
              onChange={this.updateUserName} />
            <div className="line" />
          </FormList>
          <FormList>
            <input className="user-pwd"
              autoComplete="off"
              type={type}
              value={userPwd}
              placeholder="密码"
              maxLength="10"
              onFocus={this.resetInputType}
              onChange={this.updateUserPwd}
              onKeyUp={this.keyUpEnter} />
            <div className="line" />
          </FormList>
          <Button style={{ width: "100%", fontSize: "14px" }} color="info" onClick={this.login}>登录</Button>
        </FormBox>
      </LoginBgBox>
    )
  }
}

// export default withRouter(Login)
// const mapStateToProps = state => ({
//   tempData: getTempData(state)
// })

const mapDispatchToProps = {
  fetchPermissionRoute,
}

export default withRouter(connect(null, mapDispatchToProps)(Login))
