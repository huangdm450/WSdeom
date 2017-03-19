/**
 * Created by Administrator on 2017/3/17.
 */
import React from 'react';
var mapDatas = require('json!../../data/mapDatas.json');

mapDatas=( function getMapDataURL(mapDataArr) {
  for(var i=0;i<mapDataArr.length;i++){
    var singleMapData= mapDataArr[i];
    singleMapData.mapURL=require('../../images/mapImages/' + singleMapData.mapName);

    mapDataArr[i]=singleMapData;
  }
  return mapDataArr;
})(mapDatas)

//图片展示
var MapFigure=React.createClass({
  render:function () {
    var mapURL=this.props.mapSrc;
    return <div className="pub_img">
      <image src={mapURL}></image>
    </div>
  }
});

//列表中单个组件
var SingleMap=React.createClass({
  render:function () {
    return <div className="pub_show">
      <div className="pub_tit">
        <div className="pub_titleft">{this.props.data.title}</div>
        <div className="pub_tilrt">
          <a >详细信息&gt;&gt;</a>
        </div>
      </div>
      <div className="pub_con">
        <MapFigure mapSrc={this.props.data.mapURL}/>
        <div className="pub_pro">
          <div className="pub_dw">
            <strong>提供单位：</strong>
            <span>{this.props.data.provideUnit}</span>
          </div>
          <div className="pub_dw">
            <strong>发布时间：</strong>
            <span>{this.props.data.releaseTime}</span>
          </div>
          <div className="pub_dw">
            <strong>摘要信息：</strong>
            <span>{this.props.data.digest}</span>
          </div>
        </div>
        <div className="browseDiv"><span className="br_span">{0}人浏览</span></div>
      </div>
    </div>
  }
})


var MapList=React.createClass({

  render :function () {
    var mapList=[];

    mapDatas.forEach(function (value) {
      mapList.push(<SingleMap data={value} key={value.id} />)
    }.bind(this));

    return <div>{mapList}</div>
  }
})

export default MapList
