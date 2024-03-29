
import React, {useState} from 'react';
import { Button, message } from 'antd';
import { applyList, result } from '../../../../data.js';

import './ShenPi.scss';

export default function ShenPi() {
  const [isaa, setAA] = useState(false);
  const arr = ['活动名称', '活动地点', '活动简介', '审核结果'];
  const handleApp = (i) => {
    result[i] = true;
    setAA(!isaa);
    message.info("已审批")
  };

  return (
    <div>
      <div>
        <div className="historyHeader">
          {arr.map((item, index) => {
            return <div key={index} className="historyBox">{item}</div>
          })}
        </div>
        <div className="historyMain">
          {applyList.map((item, i) => {
            return <div key={i} className="mainRow">
              <div>{item.activename}</div>
              <div>{item.activewhere}</div>
              <div>{item.activetalk}</div>
              <div>
                {result[i] ? (<Button type="primary" className="btn">已审批</Button>) : (<Button type="primary" onClick={()=>handleApp(i)}>待审批</Button>)}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

