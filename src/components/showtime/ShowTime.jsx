import React, { useState } from 'react';
import classNames from 'classnames';
// import News from '../news/News';
// import Talks from './components/talks/Talks';
// import Active from '../active/Active';
// import FengCai from './components/fengcai/FengCai';
import './ShowTime.scss';

export default function ShowTime() {
  const showData = ['社团新闻', '社团公告', '社团活动', '社团风采'];
  const [current, setCurrent] = useState(0);

  const handleClick = (index) => {
    setCurrent(index);
  }

  return (
    <div className="showBox">
      <div className="container">
        <h1>校园动态</h1>
        <div className="main">
          <div className="show-left">
            {showData.map((item, index) => {
              return (<div className={
                  classNames({'leftText': true}, {'red': current == index})}
                  onClick={() => handleClick(index)} 
                  key={index}
                  >
                <span>{item}</span>
              </div>)
            })}
          </div>
          {/* <div className="show-right">
            {current == 0 && <News />}
            {current == 1 && <Talks />}
            {current == 2 && <Active />}
            {current == 3 && <FengCai />}
          </div> */}
        </div>
      </div>
    </div>
  )
}
