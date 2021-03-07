import React from 'react';
import { Carousel } from 'antd';
import aa from '../../assets/fenlei/1.jpg';
import bb from '../../assets/fenlei/2.jpg';
import './FenLei.scss';

export default function FenLei() {
  return (
    <div className="fenleiBox">
      <div className="container">
        <h1>社团活动墙</h1>
        <Carousel className="carBox" autoplaySpeed={5000} speed={2000} autoplay slidesToShow={4} slidesToScroll={4} dots={false}>
          <div>
            <img src={aa} alt="a"/>
          </div>
          <div>
            <img src={bb} alt="b"/>
          </div>
          <div>
            <img src={aa} alt="a"/>
          </div>
          <div>
            <img src={bb} alt="b"/>
          </div>
          <div>
            <img src={aa} alt="a"/>
          </div>
          <div>
            <img src={bb} alt="b"/>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
