
import React, {useState} from 'react';
import { Button, Empty } from 'antd';
import { applyList, result } from '../../../../data.js';

import './AppHistory.scss';

export default function AppHistory() {
  const [isPop,setPop] = useState(false);
  const arr = ['活动名称', '活动地点', '活动简介', '审核结果'];
  const cancle = (i) => {
    applyList.splice(i,1);
    setPop(!isPop);
  }

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
              <div className="caozuo">
                {result[idx] ? (<Button type="primary" style={{backgroundColor: '#aaa'}}>申请通过</Button>) : (<Button type="primary">申请中</Button>)}
                <Button onClick={()=>cancle(idx)}>删除</Button>
              </div>
            </div>
          })}
        </div>
        {applyList.length == 0 && <Empty style={{marginTop: '20px'}} />}
      </div>
    </div>
  )
}
