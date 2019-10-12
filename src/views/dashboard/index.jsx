import React from 'react'
import ScrollToTopMount from '@src/components/ScrollToTopMount'
import styled from 'styled-components'
// global common style
import { ClearFix } from '@src/components/common-style'
import { RankList } from '@src/static/Data'
// import { CalcArea } from '../../static/Util'
import { Shape, Shape3D } from '../../static/Shape'

const DashboardBox = styled(ClearFix)`
  position: relative;
`
class DashboardHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teamList: RankList
    }
    this.Shape = null
    this.Shape3D = null
  }

  componentDidMount() {
    const list = [...RankList]
    // for (let i = 0; i < list.length; i++) {
    //   console.log(CalcArea(list[i]))
    // }
    // class shape
    this.Shape = new Shape(list[0])
    // console.log('-------this.shape---start--------------')
    // console.log(this.Shape)
    // console.log(this.Shape.speakOut())
    // console.log('-------this.shape---end--------------')
    // extends shape
    this.Shape3D = new Shape3D(list[1])
    // console.log('-------------------this.Shape3D--start-------------------')
    // console.log(this.Shape3D)
    // console.log(this.Shape3D.speakOut())
    // console.log(this.Shape3D.superSpeakOut())
    // console.log('-------------------this.Shape3D--end-------------------')
  }

  render() {
    const { teamList } = this.state
    return (
      <DashboardBox>
        <ScrollToTopMount />
        <div className="list-content">
          {teamList.map(item => (
            <div className="list-item" key={item.id}>
              <p className="nickname">{item.name}</p>
              <p className="user-score">得分：{item.score}</p>
            </div>
          ))}
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
