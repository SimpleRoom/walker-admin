import React from 'react'
import styled from "styled-components"
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
            <div className="container vue-box">
                <p>Klay-Thompson</p>
                <TestButton >x</TestButton>
            </div>
        )
    }
}

export default VueBox