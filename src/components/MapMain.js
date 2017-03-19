/**
 * Created by Administrator on 2017/3/16.
 */
require('normalize.css/normalize.css');
require('styles/Map.css');

import React from 'react'
import MapList from './maps/MapList'

const MapTitle = () => {
  return <div className="mapTitle">
    <ol>
      <li><a href="../index.html">首页</a></li>
      <li><a href="javascript:void(0);">资源服务</a></li>
    </ol>
  </div>
}

const Map = () => {
  return <div>
    <MapTitle />,
    <MapList />
  </div>
}

export default Map
