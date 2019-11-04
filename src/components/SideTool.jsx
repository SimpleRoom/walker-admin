import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import actions
import { switchThemeColor, switchTool, switchSideBar } from '../store/modules/theme/action'
// import state
import { getBtnColor, getToolIsOpen, getSideBarStatus } from '../store/modules/theme/selector'
// global common style
import {
  levelOneZindex,
  ClearFix,
  borderRadius,
} from "./common-style"
// scoped style
const settingBg = "rgba(4,50,60,.3)"

const SetingBox = styled(ClearFix)`
    position:fixed;
    width:240px;
    height:100px;
    bottom:100px;
    right:${props => props.isHide ? "-246px" : "0"};
    z-index:${levelOneZindex};
    background:${settingBg};
    transition:right .4s;
    border-bottom-left-radius:${borderRadius}px;
`;

const SettingBtn = styled.button`
    position:absolute;
    top:0;
    width:65px;
    height:40px;
    text-align:right;
    padding:0 20px;
    vertical-align:middle;
    background:${settingBg};
    left:-65px;
    border-top-left-radius:${borderRadius}px;
    border-bottom-left-radius:${borderRadius}px;
    .icon{
        display:inline-block;
        width:25px;
        height:25px;
        background-size:cover;
        background-image:url("/images/icon-setting.svg");
    }
`;

const ColorBox = styled.div`
    text-align:center;
    padding:10px;
    h3{
        font-size:12px;
    }
`;
// common
const insetOnePxShadow = "0px 0px 1px 1px inset rgba(0,0,0,.3)";
const ToggleButton = styled.button`
    display:inline-block;
    width:${props => props.isActive ? "30px" : "22px"};
    height:15px;
    border-radius:${borderRadius - 1}px;
    vertical-align:middle;
    background:${props => props.bgColor};
    transition:all .3s;
    box-shadow:${props => props.isActive ? insetOnePxShadow : 0};
    &:hover{
        box-shadow:${insetOnePxShadow};
    }
    &+button{
        margin-left:10px;
    }
`;
// toggle btns
const ToggleThemeBtn = ({ isActive, item, onClick, indexId }) => (
  <ToggleButton
    isActive={isActive}
    onClick={onClick}
    data-id={indexId}
    data-color={item}
    bgColor={item}>
  </ToggleButton>
)

const circleWidth = 20;
const iconFontColor = "#d9d9d9";

const ToggleSideBarContent = styled.div`
    padding:0 60px;
    position:relative;
    span{
        display:inline-block;
        vertical-align:middle;
        font-size:12px;
    }
    .circle-icon{
        position:relative;
        width:${circleWidth}px;
        height:${circleWidth}px;
        background:rgba(0,0,0,.2);
        box-shadow:${insetOnePxShadow};
        border-radius:50%;
        cursor:pointer;
        margin-right:10px;
        &:before{
            display:table;
            width:100%;
            height:100%;
            position:absolute;
            left:50%;
            top:55%;
            transform:translate(-50%,-50%);
            transition:all .2s;

            content: '✔';
            line-height: 20px;
            font-size: 14px;
            text-align:center;
            color: ${props => props.isOpened ? iconFontColor : props.activeColor};
        }
    }
`;
class SideTool extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      themeList: [{
        id: 1,
        color: "#4caf50",
      }, {
        id: 2,
        color: "#00bcd4",
      }, {
        id: 3,
        color: "#ff9800",
      }, {
        id: 4,
        color: "#9c27b0",
      },],
    }
  }
  toggleSetting = () => {
    const { isHiding } = this.props
    /* 
     * use redux instead of setState to store the state with no reload 
     */
    this.props.switchTool(!isHiding)
  }
  toggleThemeColor = e => {
    let target = e.target
    let { themeList } = this.state
    let { activeIndex } = this.props.buttonColor
    let currentIndex = Number(target.getAttribute("data-id"))
    if (currentIndex !== activeIndex) {
      let currentColor = themeList.filter((item) => {
        return item.id === currentIndex
      })
      // update to redux
      this.props.switchThemeColor(currentColor[0])
    } else {
      console.log(`Nothing changes`)
    }
  }
  toogleSideBar = () => {
    const { isOpened } = this.props
    this.props.switchSideBar(!isOpened)
  }
  render() {
    let { themeList } = this.state
    let { isHiding, isOpened, buttonColor = {} } = this.props
    let { activeIndex, color } = buttonColor
    const filterActive = (item) => {
      if (item.id === activeIndex) return true
    }
    // console.log(this.props, 'tool')
    return (
      <SetingBox isHide={isHiding}>
        <SettingBtn onClick={this.toggleSetting}>
          <span className="icon" />
        </SettingBtn>
        {/* theme list */}
        <ColorBox>
          <h3>Theme color list</h3>
          {
            themeList.map((item, index) => (
              <ToggleThemeBtn
                isActive={filterActive(item)}
                indexId={item.id}
                item={item.color}
                key={index}
                onClick={this.toggleThemeColor} />
            ))
          }
        </ColorBox>
        {/* toggle sidebar */}
        <ToggleSideBarContent
          isOpened={isOpened}
          activeColor={color}>
          <span className="circle-icon" onClick={this.toogleSideBar} />
          <span>Hide side bar</span>
        </ToggleSideBarContent>
      </SetingBox>
    )
  }
}

const mapStateToProps = state => ({
  buttonColor: getBtnColor(state),
  isOpened: getSideBarStatus(state),
  isHiding: getToolIsOpen(state),
})

const mapDispatchToProps = {
  switchThemeColor,
  switchTool,
  switchSideBar,
}

export default connect(mapStateToProps, mapDispatchToProps)(SideTool)