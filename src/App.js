import React from 'react';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import FooterCopy from '../src/components/footerCopy/FooterCopy';
import './App.scss';

const App = () => {
  return (
    <div className="app-wrap">
      <Header/>
      <Footer/>
      <FooterCopy/>
    </div>
  );
}

export default App;
