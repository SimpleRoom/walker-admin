import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"
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
class CssBox extends React.Component {
    render() {
        return (
            <ContainerBox>
                <ScrollToTopMount />
                <p>Stephen-Curry-info</p>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
            </ContainerBox>
        )
    }
}

export default CssBox