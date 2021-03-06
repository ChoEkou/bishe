import React from 'react';
import { Carousel } from 'antd';
import aa from '../../assets/lunbo/1.jpg';
import bb from '../../assets/lunbo/11.jpg';
import cc from '../../assets/lunbo/22.jpg';
import dd from '../../assets/lunbo/33.jpg';
import './Lunbo.scss';

export default function Lunbo() {
  return (
    <div>
      <Carousel autoplay className="lunboBox">
        <div>
          <img src={aa} alt="a"/>
        </div>
        <div>
          <img src={bb} alt="a"/>
        </div>
        <div>
          <img src={cc} alt="a"/>
        </div>
        <div>
          <img src={dd} alt="a"/>
        </div>
      </Carousel>
    </div>
  )
}
