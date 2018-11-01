import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"
import styled from "styled-components"
// global common style
import { ClearFix } from "@src/components/common-style"

const NoticeBox = styled(ClearFix)`
    position:relative;
`;
class NoticeHome extends React.Component {
    render() {
        return (
            <NoticeBox>
                <ScrollToTopMount />
                <h3 className="long-content">notifications</h3>
                <h3 className="long-content">notifications</h3>
                <h3 className="long-content">notifications</h3>
                <h3 className="long-content">notifications</h3>
                <h3 className="long-content">notifications</h3>
                <h3 className="long-content">notifications</h3>
                <h3 className="long-content">notifications</h3>
            </NoticeBox>
        )
    }
}

export default NoticeHome