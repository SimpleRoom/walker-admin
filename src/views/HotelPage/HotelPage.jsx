import React from 'react'
import styled from "styled-components"
import ScrollToTopMount from "../../components/ScrollToTopMount"
// global common style
import { ClearFix } from "../../components/common-style"

const ProfileBox = styled(ClearFix)`
    position:relative;
`;
class HotelPage extends React.Component {
    render() {
        return (
            <ProfileBox>
                <ScrollToTopMount />
                <h3 className="long-content">酒店预订</h3>
                <h3 className="long-content">酒店预订</h3>
                <h3 className="long-content">酒店预订</h3>
                <h3 className="long-content">酒店预订</h3>
                <h3 className="long-content">酒店预订</h3>
                <h3 className="long-content">酒店预订</h3>
                <h3 className="long-content">酒店预订</h3>
                <h3 className="long-content">酒店预订</h3>
            </ProfileBox>
        )
    }
}

export default HotelPage