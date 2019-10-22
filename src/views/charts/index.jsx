import React from 'react'
import ScrollToTopMount from '../../components/ScrollToTopMount'
import styled from 'styled-components'
// global common style
import { ClearFix } from '../../components/common-style'

const ChartsBox = styled(ClearFix)`
    position:relative;
`;
class ChartsHome extends React.Component {
    render() {
        return (
            <ChartsBox>
                <ScrollToTopMount />
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