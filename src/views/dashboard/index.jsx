import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"
import styled from "styled-components"
// global common style
import { ClearFix } from "@src/components/common-style"

const DashboardBox = styled(ClearFix)`
    position:relative;
`;
class DashboardHome extends React.Component {
    render() {
        return (
            <DashboardBox>
                <ScrollToTopMount />
                <h3 className="long-content">dashboard</h3>
                <h3 className="long-content">dashboard</h3>
                <h3 className="long-content">dashboard</h3>
                <h3 className="long-content">dashboard</h3>
                <h3 className="long-content">dashboard</h3>
                <h3 className="long-content">dashboard</h3>
            </DashboardBox>
        )
    }
}

export default DashboardHome