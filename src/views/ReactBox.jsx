import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"
import styled from "styled-components"
// global common style
import { ClearFix } from "@src/components/common-style"

const DurantBox = styled(ClearFix)`
    position:relative;
`;
class ReactBox extends React.Component {
    render() {
        return (
            <DurantBox>
                <ScrollToTopMount />
                <p>Kevin-Durant</p>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
            </DurantBox>
        )
    }
}

export default ReactBox