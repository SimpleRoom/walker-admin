import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"
import styled from "styled-components"
// global common style
import { ClearFix } from "@src/components/common-style"

const CurryBox = styled(ClearFix)`
    position:relative;
`;
class CssBox extends React.Component {
    render() {
        return (
            <CurryBox>
                <ScrollToTopMount />
                <p>Stephen-Curry-info</p>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
                <h3 className="long-content">Stephen-Curry</h3>
            </CurryBox>
        )
    }
}

export default CssBox