import React from 'react'
import ScrollToTopMount from "../../components/ScrollToTopMount"
// global common style
import { CommonWrap } from "../../components/common-style"

class EmployeeManagement extends React.Component {
  render() {
    return (
      <CommonWrap>
        <ScrollToTopMount />
        <h3 className="long-content">员工管理</h3>
      </CommonWrap>
    )
  }
}

export default EmployeeManagement
