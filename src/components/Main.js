require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// 获取图片相关数据
// const imageData = require('../data/imageData.json')

// // 利用自执行函数，将图片信息转成图片URL路径信息
// const imageDatas = (function genImageUrl(imageDataArr) {
//   for (let i = 0; i < imageDataArr.length; i++) {
//     const singleImageData = imageDataArr[i]
//     singleImageData.imageUrl = require('../images/' + singleImageData.fileName)
//     imageDataArr[i] = singleImageData
//   }

//   return imageDataArr
// })(imageData)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
