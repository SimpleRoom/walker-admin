
import React from 'react'
class ScrollToTopMount extends React.Component {
  constructor(props) {
    super(props)
    this.d = document.documentElement
    this.b = document.body
    this.timer = null
  }
  componentDidMount() {
    // transation to top
    this.timer = setInterval(() => {
      this.moveToTop()
    }, 10)
  }
  moveToTop() {
    this.d.scrollTop -= Math.ceil((this.d.scrollTop + this.b.scrollTop) * 0.1)
    this.b.scrollTop -= Math.ceil((this.d.scrollTop + this.b.scrollTop) * 0.1)
    if ((this.d.scrollTop + this.b.scrollTop) === 0) clearInterval(this.timer)
  }
  render() {
    return null
  }
}

export default ScrollToTopMount