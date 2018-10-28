import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
// import actions
import { fetchNewTheme } from "../redux/actionCreators"
// global common style
import {
    levelOneZindex,
    ClearFix,
} from "./common-style"
// scoped style
const settingBg = "rgba(4,50,60,.3)"

const SetingBox = styled(ClearFix)`
    position:fixed;
    width:240px;
    height:100px;
    bottom:60px;
    right:${props => props.isHide ? "-248px" : "-6px"};
    /* right: 0; */
    z-index:${levelOneZindex};
    background:${settingBg};
    transition:right .4s;
    border-bottom-left-radius:6px;
`;

const SettingBtn = styled.button`
    position:absolute;
    top:0;
    width:55px;
    height:40px;
    text-align:right;
    padding:0 10px;
    vertical-align:middle;
    background:${settingBg};
    left:-55px;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    .icon{
        display:inline-block;
        width:25px;
        height:25px;
        background-size:cover;
        background-image:url("/images/icon-tool.svg");
    }
`;

const ColorBox = styled.div`
    text-align:center;
    padding:10px;
    h3{
        font-size:14px;
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
class Setting extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isHiding: true,
            acttiveIndex: 0,
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
        this.setState({ isHiding: !this.state.isHiding })
    }
    toggleThemeColor = e => {
        let target = e.target
        let color = target.getAttribute("data-color")
        let acttiveIndex = Number(target.getAttribute("data-id"))
        this.setState({ acttiveIndex })
        this.props.updateTheme(color)
        console.log(color)
    }
    render() {
        let { isHiding, acttiveIndex, themeList } = this.state
        const filterActive = (item) => {
            if (item.id === acttiveIndex) return true
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
    updateTheme: (rgba) => dispatch(fetchNewTheme(rgba)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Setting)