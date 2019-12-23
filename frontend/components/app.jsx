import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Photos from './photos';
import LoginRouter from './login/login_router';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginRouter} />
      <Route path="/" component={Photos} />
    </Switch>
  </div>
);

export default App;