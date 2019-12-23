import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Photos from './photos';
import Login from './login';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Photos} />
    </Switch>
  </div>
);

export default App;