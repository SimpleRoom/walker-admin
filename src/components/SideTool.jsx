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
const ToggleSideBarBox = styled.div`
    text-align:center;
`;
const ToggleSideBarBtn = styled.button`
    width:100px;
    height:30px;
    background:${themeRgbaColor};
    color:#fff;
`;
class SideTool extends PureComponent {
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
        let { isHiding } = this.props.sideTool
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
        let { isOpened } = this.props.sideBar
        this.props.togleOpenSideBar(!isOpened)
    }
    render() {
        let { themeList } = this.state
        let { isHiding } = this.props.sideTool
        let { activeIndex } = this.props.buttonColor
        let { isOpened } = this.props.sideBar
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
                <ToggleSideBarBox>
                    <ToggleSideBarBtn onClick={this.toogleSideBar}>{isOpened ? 'hide side bar' : 'show side bar'}</ToggleSideBarBtn>
                </ToggleSideBarBox>
            </SetingBox>
        )
    }
}

// export default SideTool
// connect's parameter
const mapStateToProps = state => {
    console.log(state, `SideTool state update`)
    return { ...state }
}
/*
 * connect's parameter
 *   
 */
const mapDispatchToProps = dispatch => ({
    updateTheme: (obj) => dispatch(fetchNewTheme(obj)),
    toggleSetting: (isHiding) => dispatch(fetchSettingStatus(isHiding)),
    togleOpenSideBar: (isOpening) => dispatch(fetchBarIsOpened(isOpening)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideTool)