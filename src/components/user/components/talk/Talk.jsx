
import React from 'react';
import { Divider } from 'antd';
import { userdata, gonggao } from '../../../../data.js';
import './Talk.scss';

const Talk = () => {
  return (
    <div className="talkBox">
      <div className="talkTitle">
        欢迎同学: &nbsp;&nbsp;
        <span>
          小 &nbsp;
          {userdata[userdata.length - 1].hasOwnProperty('rgtname') ? userdata[userdata.length - 1].rgtname : userdata[userdata.length - 1].username}
        </span>
      </div>
      <Divider orientation="left">公告</Divider>
      <div className="talkMainBox">
        {gonggao.map((item,idx) => {
          return <div key={idx} className="tongzhiMargin">
            <div className="mainTitle1">
              发布时间：{item.date}
            </div>
            <div className="mainContent">
              <h4>通知</h4>
              <div>{item.content}</div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Talk;
