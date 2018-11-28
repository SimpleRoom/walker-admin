import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"
import styled from "styled-components"
// global common style
import { ClearFix } from "@src/components/common-style"
import Gauge from "../../components/Gauge"

const ChartsBox = styled(ClearFix)`
    position:relative;
`;
class ChartsHome extends React.Component {
    render() {
        return (
            <ChartsBox>
                <ScrollToTopMount />
                <Gauge />
                <h3 className="long-content">charts list</h3>
                <h3 className="long-content">charts list</h3>
                <h3 className="long-content">charts list</h3>
                <h3 className="long-content">charts list</h3>
                <h3 className="long-content">charts list</h3>
                <h3 className="long-content">charts list</h3>
            </ChartsBox>
        )
    }
}

export default ChartsHome