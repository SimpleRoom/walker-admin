import React, { PureComponent } from 'react'
import styled from "styled-components"

// global common style
import {
    levelOneZindex,
    ClearFix,
    themeRgbaColor,
} from "./common-style"

const SetingBox = styled(ClearFix)`
    position:fixed;
    width:240px;
    height:100px;
    bottom:60px;
    right:${props => props.isHide ? "-248px" : "-6px"};
    /* right: 0; */
    z-index:${levelOneZindex};
    background:${themeRgbaColor};
    transition:right .4s;
`;

const SettingBtn = styled.button`
    position:absolute;
    top:0;
    width:55px;
    height:40px;
    text-align:right;
    padding:0 10px;
    vertical-align:middle;
    background:${themeRgbaColor};
    left:-55px;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    .icon{
        display:inline-block;
        width:25px;
        height:25px;
        background-size:cover;
        background-image:url("/images/icon-tool.svg");
    }
`;
class Setting extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isHiding: true
        }
    }
    toggleSetting = e => {
        let { isHiding } = this.state
        this.setState({ isHiding: !this.state.isHiding })
    }
    render() {
        let { isHiding } = this.state
        return (
            <SetingBox isHide={isHiding}>
                <SettingBtn onClick={this.toggleSetting}>
                    <span className="icon"></span>
                </SettingBtn>
            </SetingBox>
        )
    }
}

export default Setting