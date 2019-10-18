import React from 'react'
import styled from "styled-components"
import ScrollToTopMount from "../../components/ScrollToTopMount"
// global common style
import { ClearFix } from "../../components/common-style"

const TableBox = styled(ClearFix)`
    position:relative;
`;
class TableHome extends React.Component {
    render() {
        return (
            <TableBox>
                <ScrollToTopMount />
                <h3 className="long-content">table</h3>
                <h3 className="long-content">table</h3>
                <h3 className="long-content">table</h3>
                <h3 className="long-content">table</h3>
                <h3 className="long-content">table</h3>
                <h3 className="long-content">table</h3>
            </TableBox>
        )
    }
}

export default TableHome