import React from 'react';
import Header from '../src/components/header/Header';
import Banner from '../src/components/bannerLun/Banner';
import FenLei from '../src/components/fenlei/FenLei';
import ShowTime from '../src/components/showtime/ShowTime';
import Footer from '../src/components/footer/Footer';
import FooterCopy from '../src/components/footerCopy/FooterCopy';
import './App.scss';

const App = () => {
  return (
    <div className="app-wrap">
      <Header/>
      <Banner/>
      <FenLei/>
      <ShowTime/>
      <Footer/>
      <FooterCopy/>
    </div>
  );
}

export default App;
