import React from 'react';
import {HashRouter ,Route, Switch} from 'react-router-dom';
import routes from './route.js';
import './App.scss';

const App = () => {
  return (
    <div className="app-wrap">
      <HashRouter>
        <Switch>
          {routes.map((route)=><Route key={route.path} {...route}/>)}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
