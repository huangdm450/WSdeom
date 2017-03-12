require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import AddToDo from '../containers/AddTodo';
import VisibleToDoList from '../containers/VisibleToDoList';
import Footer from './Footer';

// let yeomanImage = require('../images/yeoman.png');
//获取图片相关的数据

/*var imageDatas = require('json!../data/imageDatas.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++) {
    var singleImageData = imageDatasArr[i]
    //console.info(singleImageData);
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);


var ImgFiure = React.createClass(
  {
    render: function () {
      return (
        <figure className="img-figure">
          <img src={this.props.data.imageURL}
               alt={this.props.data.title}/>
          <figcaption>
            <h2 className="img-title">{this.props.data.title}</h2>
          </figcaption>
        </figure>
      );
    }
  }
);


var AppComponent = React.createClass({

  Constant: {
    centerPos: {
      left: 0,
      right: 0
    },
    hPosRange: {   //水平方向的取值范围
      leftSecx: [0, 0],
      rightSecX: [0, 0],
      y: [0, 0]
    },
    vPosRange: {  //垂直方向的取值范围
      x: [0, 0],
      topY: [0, 0]
    }
  },
  /!**
   * 重新布局所有图片
   * centerIndex 制定居中哪个图片排布
   *!/

  rearrange: function (centerIndex) {

  },

  getInitialState: function () {
    return {
      imgsArrangeArr: [
        /!*{
         pos:{
         left:'0',
         top:'0'
         }
         }*!/
      ]
    }
  },

//组件加载后，为每张图片计算其位置的范围
  componentDidMount: function () {
    var stageDOM = React.findDOMNode(this.refs.stage),
      stageW = stageDOM.scrollWidth,
      stageH = stageDOM.scrollHeight,
      halfStageW = Math.ceil(stageW / 2),
      halfStageH = Math.ceil(stageH / 2);
    //拿到一个imageFiguer的大小
    var imgFigureDow = React.findDOMNode(this.refs.imgFigure0),
      imgW = imgFigureDow.scrollWidth,
      imgH = imgFigureDow.scrollHeight,
      halfImgW = Math.ceil(imgW / 2),
      halfImgH = Math.ceil(imgH / 2);

    //计算中心图片的位置点
    this.Constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    }

    //计算左右侧区域图片排布位置的取值范围
    this.Constant.hPosRange.leftSecx[0] - halfImgW;
    this.Constant.hPosRange.leftSecx[1] - halfStageW - halfImgW * 3;
    this.Constant.rightSecX.rightSecX[0] - halfStageW - halfImgW;
    this.Constant.hPosRange.rightSecX[1] - stageW - halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;

    //计算上册局域图片排布位置的取值范围
    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.Constant.vPosRange.x[0] = halfImgW - imgW;
    this.Constant.vPosRange.x[1] = halfImgW;

    this.rearrange(0);
  },
  render: function () {

    var controllerUnits = [],
      imgFigures = [];

    imageDatas.forEach(function (value, index) {

      if (!this.state.imgsArrangeArr[index]) {
        this.state.imgsArrangeArr[index] = {
          pos: {
            left: 0,
            top: 0
          }
        }
      }

      imgFigures.push(<ImgFiure data={value} ref={'imgFigure' + index}/>);
    }.bind(this));

    return (
      <section className='stage' ref="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
});

AppComponent.defaultProps = {};

export default AppComponent;*/

const AppComponent = ()=>(
  <div>
    <AddToDo />
    <VisibleToDoList />
    <Footer />
  </div>
)

export default AppComponent;
