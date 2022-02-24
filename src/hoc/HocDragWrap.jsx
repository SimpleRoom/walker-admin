import React, { Component } from 'react'
/**
 * 高阶组件用于元素拖拽
 * 
 * 
 */

export default DragedComponent => {
    return class HocDragWrap extends Component {
        render() {
            return (
                <DragedComponent {...this.props} />
            )
        }
    }
}