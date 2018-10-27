import React from 'react'
import styled from "styled-components"
// global common style
import {
    levelOneZindex,
    ClearFix,
    headerHeight,
    sideBarWidth,
} from "@src/components/common-style"

const ContainerBox = styled(ClearFix)`
    position:relative;
    z-index:${levelOneZindex - 1};
    /* will reset padding with props */
    padding-left:${props => props.sideBarIsHide ? '20px' : sideBarWidth + 20 + 'px'};
    padding-top:${props => props.headerIsHide ? '20px' : headerHeight + 20 + 'px'};
    padding-right:20px;
    padding-bottom:20px;
`;
const TestButton = styled.button`
    width:30px;
    height:30px;
    line-height:30px;
    background-color:purple;
    border-radius:50%;
    color:#fff;
    position:relative;
`;
class VueBox extends React.Component {
    testClick = e => {
    }
    render() {
        return (
            <ContainerBox>
                <p>Klay-Thompson</p>
                <TestButton >x</TestButton>
            </ContainerBox>
        )
    }
}

export default VueBox