
import React from 'react';
import { Divider } from 'antd';
import {userdata} from '../../../../data.js';
import './Talk.scss';

const Talk = () => {
  return (
    <div className="talkBox">
      <div className="talkTitle">
        欢迎同学: &nbsp;&nbsp;
        <span>
          小 &nbsp;
          {userdata[userdata.length-1].hasOwnProperty('rgtname') ? userdata[userdata.length-1].rgtname : userdata[userdata.length-1].username}
        </span>
      </div>
      <Divider orientation="left">公告</Divider>
      <div className="talkMain">
        <div className="mainTitle">
          发布时间：2021-5-2 11:34:27
        </div>
        <div className="mainContent">
          <h4>通知</h4>
          <div>明天下午</div>
        </div>
      </div>
    </div>
  )
}

export default Talk;
