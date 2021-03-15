import React from 'react';
import {HashRouter ,Route, Switch} from 'react-router-dom';
import routes from './route.js';
import './App.scss';

const App = () => {
  return (
    <div className="app-wrap">
      <HashRouter>
        <Switch>
          {routes.map((route)=><Route key={route.path} exact={route.exact} path={route.path} render={(props)=>{
            return <route.component {...props} routes={route.routes}/>
          }}></Route>)}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
