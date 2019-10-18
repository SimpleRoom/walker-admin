import React from 'react'
import ScrollToTopMount from '../../components/ScrollToTopMount'
import styled from 'styled-components'
// global common style
import { ClearFix } from '../../components/common-style'
import Gauge from '../../components/Gauge'
import Radar from '../../components/Echarts/Radar'

const ChartsBox = styled(ClearFix)`
    position:relative;
`;
class ChartsHome extends React.Component {
    render() {
        return (
            <ChartsBox>
                <ScrollToTopMount />
                <Radar />
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