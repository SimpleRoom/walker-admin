import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"
import styled from "styled-components"
// global common style
import { ClearFix } from "@src/components/common-style"

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