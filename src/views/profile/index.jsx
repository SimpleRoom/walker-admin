import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"
import styled from "styled-components"
// global common style
import { ClearFix } from "@src/components/common-style"

const ProfileBox = styled(ClearFix)`
    position:relative;
`;
class ProfileHome extends React.Component {
    render() {
        return (
            <ProfileBox>
                <ScrollToTopMount />
                <h3 className="long-content">profile</h3>
                <h3 className="long-content">profile</h3>
                <h3 className="long-content">profile</h3>
                <h3 className="long-content">profile</h3>
                <h3 className="long-content">profile</h3>
                <h3 className="long-content">profile</h3>
            </ProfileBox>
        )
    }
}

export default ProfileHome