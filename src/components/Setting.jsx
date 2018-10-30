import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
// import actions
import { fetchNewTheme, fetchSettingStatus, fetchBarIsOpened } from "../redux/actionCreators"
// global common style
import {
    levelOneZindex,
    ClearFix,
    themeRgbaColor,
} from "./common-style"
// scoped style
const settingBg = "rgba(4,50,60,.3)"

const SetingBox = styled(ClearFix)`
    position:fixed;
    width:240px;
    height:100px;
    bottom:100px;
    right:${props => props.isHide ? "-246px" : "0"};
    /* right: 0; */
    z-index:${levelOneZindex};
    background:${settingBg};
    transition:right .4s;
    border-bottom-left-radius:6px;
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
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
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
const ToggleButton = styled.button`
    display:inline-block;
    width:${props => props.isActive ? "30px" : "22px"};
    height:15px;
    border-radius:4px;
    vertical-align:middle;
    background:${props => props.bgColor};
    transition:width .4s;

    &+button{
        margin-left:10px;
    }
`;
// toggle btns
const ToggleThemeBtn = ({ isActive, item, onClick, indexId }) => (
    <ToggleButton isActive={isActive} onClick={onClick} data-id={indexId} data-color={item} bgColor={item}></ToggleButton>
)
// 
const ToggleSideBarBox = styled.div`
    text-align:center;
`;
const ToggleSideBarBtn = styled.button`
    width:100px;
    height:30px;
    background:${themeRgbaColor};
    color:#fff;
`;
class Setting extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            themeList: [{
                id: 1,
                color: "#9c27b0",
            }, {
                id: 2,
                color: "#4caf50",
            }, {
                id: 3,
                color: "#00bcd4",
            }, {
                id: 4,
                color: "#ff9800",
            }],
        }
    }
    toggleSetting = e => {
        let { isHiding } = this.props.settingBox
        /* 
         * use redux instead of setState to store the state with no reload 
         */
        this.props.toggleSetting(!isHiding)
        // this.setState({ isHiding: !this.state.isHiding })
    }
    toggleThemeColor = e => {
        let target = e.target
        let { themeList } = this.state
        let activeIndex = Number(target.getAttribute("data-id"))
        let currentColor = themeList.filter((item) => {
            return item.id === activeIndex
        })
        // update to redux
        this.props.updateTheme(currentColor[0])
    }
    toogleSideBar = () => {
        let { isOpened } = this.props.sideBarStatus
        this.props.togleOpenSideBar(!isOpened)
    }
    render() {
        let { themeList } = this.state
        let { isHiding } = this.props.settingBox
        let { activeIndex } = this.props.currentTheme
        let { isOpened } = this.props.sideBarStatus
        const filterActive = (item) => {
            if (item.id === activeIndex) return true
        }
        return (
            <SetingBox isHide={isHiding}>
                <SettingBtn onClick={this.toggleSetting}>
                    <span className="icon"></span>
                </SettingBtn>
                {/* theme list */}
                <ColorBox>
                    <h3>Theme list</h3>
                    {
                        themeList.map((item, index) => (
                            <ToggleThemeBtn isActive={filterActive(item)} indexId={item.id} item={item.color} key={index} onClick={this.toggleThemeColor} />
                        ))
                    }
                </ColorBox>
                {/* toggle sidebar */}
                <ToggleSideBarBox>
                    <ToggleSideBarBtn onClick={this.toogleSideBar}>{isOpened ? 'hide side bar' : 'show side bar'}</ToggleSideBarBtn>
                </ToggleSideBarBox>
            </SetingBox>
        )
    }
}

// export default Setting
// 1、connect 參數1映射屬性到組件
const mapStateToProps = state => {
    console.log(state, `Setting state update`)
    return { ...state }
}
/*
 * 2 connect 參數2 函數，更新主题
 *   updateTheme 函數作為屬性传递 
 */
const mapDispatchToProps = dispatch => ({
    updateTheme: (obj) => dispatch(fetchNewTheme(obj)),
    // 暂存是否要显示工具栏： isHiding boolean
    toggleSetting: (isHiding) => dispatch(fetchSettingStatus(isHiding)),
    togleOpenSideBar: (isOpening) => dispatch(fetchBarIsOpened(isOpening)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Setting)