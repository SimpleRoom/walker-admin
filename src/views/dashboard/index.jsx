import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"
import styled from "styled-components"
// global common style
import { ClearFix } from "@src/components/common-style"

import { RankList } from "@src/static/Data"
console.log(RankList)

const DashboardBox = styled(ClearFix)`
    position:relative;
`;
class DashboardHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teamList: RankList
        }
    }
    render() {
        let { teamList } = this.state
        return (
            <DashboardBox>
                <ScrollToTopMount />
                <div className="list-content">
                    {
                        teamList.map(item => (
                            <div className="list-item" key={item.id}>
                                <p className="nickname">{item.name}</p>
                                <p className="user-score">得分：{item.score}</p>
                            </div>
                        ))
                    }
                </div>
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