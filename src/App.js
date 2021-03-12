import React from 'react';
import {HashRouter ,Route} from 'react-router-dom';
import routes from './route.js';
import Footer from '../src/components/footer/Footer';
import FooterCopy from '../src/components/footerCopy/FooterCopy';
import './App.scss';

const App = () => {
  return (
    <div className="app-wrap">
      <HashRouter>
        {routes.map((route)=><Route key={route.path} {...route}/>)}
      </HashRouter>
      <Footer/>
      <FooterCopy/>
    </div>
  );
}

export default App;
