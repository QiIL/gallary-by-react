'use strict'

import React from 'react'

class ImgFigure extends React.Component {

  /**
   * 组点点击处理函数
   */
  handleClick(e) {
    if (this.props.arrange.isCenter) {
      this.props.inverse()
    } else {
      this.props.center()
    }
    e.stopPropagation();
    e.preventDefault();
  }

  render() {

    let styleObj = {};

    // 如果props属性中指定了这张图片的位置，则使用
    if (this.props.arrange.pos) {
      styleObj = this.props.arrange.pos
    }

    if (this.props.arrange.isCenter) {
      styleObj.zIndex = 11;
    }

    // 如果图片的角度有值且不为0
    if (this.props.arrange.rotate) {
      (['MozTransform', 'msTransform', 'WebkitTransform', 'transform']).forEach(function(value) {
        styleObj[value] = 'rotate(' + this.props.arrange.rotate + 'deg)'
      }.bind(this))
    }

    let imgFigureClassName = 'img-figure'
    imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : ''

    return (
      <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick.bind(this)}>
          <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
          <div className="img-back" onClick={this.handleClick.bind(this)}>
            <p>
              {this.props.data.description}
            </p>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default ImgFigure
