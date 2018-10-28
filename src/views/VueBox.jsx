import React from 'react'
import styled from "styled-components"
// global common style
import { ClearFix } from "@src/components/common-style"

const ThompsonBox = styled(ClearFix)`
    position:relative;
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
            <ThompsonBox>
                <p>Klay-Thompson</p>
                <TestButton >x</TestButton>
            </ThompsonBox>
        )
    }
}

export default VueBox