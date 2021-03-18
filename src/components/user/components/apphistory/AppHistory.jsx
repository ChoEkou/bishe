
import React from 'react';
import { Button } from 'antd';
import { applyList, result } from '../../../../data.js';

import './AppHistory.scss';

export default function AppHistory() {
  const arr = ['活动名称', '活动地点', '活动简介', '审核结果'];

  return (
    <div>
      <div>
        <div className="historyHeader">
          {arr.map((item, index) => {
            return <div key={index} className="historyBox">{item}</div>
          })}
        </div>
        <div className="historyMain">
          {applyList.map((item, idx) => {
            return <div key={idx} className="mainRow">
              <div>{item.activename}</div>
              <div>{item.activewhere}</div>
              <div>{item.activetalk}</div>
              <div>
                {result[idx] ? (<Button type="primary">申请通过</Button>) : (<Button type="primary">申请中</Button>)}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
