'use strict'

import React from 'react'

class ControllerUnit extends React.Component {

  handleClick(e) {
    // 如果点击的是当前选中态的按钮，则反转图片，否则将图片居中

    if (this.props.arrange.isCenter) {
      this.props.inverse()
    } else {
      this.props.center()
    }

    e.preventDefault();
    e.stopPropagation();
  }

  render() {

    let controllerUnitClassName = 'controller-unit';
    
    if (this.props.arrange.isCenter) {
      controllerUnitClassName += ' is-center'
    }

    if (this.props.arrange.isInverse) {
      controllerUnitClassName += ' is-inverse'
    }

    return (
      <span className={controllerUnitClassName} onClick={this.handleClick.bind(this)}></span>
    )
  }
}

export default ControllerUnit;
