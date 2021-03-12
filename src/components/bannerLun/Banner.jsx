import React from 'react';
import Header from '../header/Header';
import Lunbo from '../lunbo/Lunbo';
import FenLei from '../fenlei/FenLei';
import ShowTime from '../showtime/ShowTime';
import './Banner.scss';

export default function Banner() {
  return (
    <div className="banner">
      <Header/>
      <div className="container">
        <Lunbo />
      </div>
      <ShowTime/>
      <FenLei/>
    </div>
  )
}
