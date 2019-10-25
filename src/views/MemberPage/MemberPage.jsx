import React from 'react'
import ScrollToTopMount from "../../components/ScrollToTopMount"
// global common style
import { CommonWrap } from "../../components/common-style"

class MemberPage extends React.Component {
  render() {
    return (
      <CommonWrap>
        <ScrollToTopMount />
        <h3 className="long-content">会员管理</h3>
      </CommonWrap>
    )
  }
}

export default MemberPage