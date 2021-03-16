
import React from 'react';
import {applyList} from '../../../../data.js';

import './AppHistory.scss';

export default function AppHistory() {
  const arr = ['活动名称', '活动地点', '活动简介'];
  console.log(applyList);

  return (
    <div>
      <div className="historyHeader">
        {arr.map((item, index) => {
          return <div key={index} className="historyBox">{item}</div>
        })}
      </div>
      <div className="historyMain">
        {applyList.map((item, idx) => {
          return <div key={idx}>{item}</div>
        })}
      </div>
    </div>
  )
}
