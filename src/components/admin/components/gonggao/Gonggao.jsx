import React, {useRef} from 'react';
import {Divider,  Button, message} from 'antd';
import moment from 'moment';
import {gonggao} from '../../../../data.js';
import './Gonggao.scss';

export default function Gonggao() {
  const gonggaoRef = useRef();
  const currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const handleFabu = () => {
    const value = gonggaoRef.current.value;
    if(value.trim() == ''){
      message.info("不能发布空白公告！！！！！")
    } else {
      gonggao.unshift({date: currentDate, content: value});
      message.info("已发布")
      gonggaoRef.current.value = ' ';
    }
  };

  return (
    <div>
      <div className="talkBox">
      <div className="talkTitle">
        发布新公告
      </div>
      <Divider orientation="left">公告</Divider>
      <div className="talkMain">
        <div className="mainTitle">
          发布时间：{currentDate}
        </div>
        <div className="mainContent">
          <h4>通知</h4>
          <textArea className="gonggaoArea" ref={gonggaoRef}/>
          <Button type="primary" className="fabuBtn" onClick={handleFabu}>发布</Button>
        </div>
      </div>
    </div>
    </div>
  )
}
