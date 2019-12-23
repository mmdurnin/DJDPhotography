import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Photos from './photos';
import LoginRouter from './login/login_router';
import AdminOptions from './admin_options';

const App = () => (
  <div>
    <AdminOptions />
    <Switch>
      <Route exact path="/login" component={LoginRouter} />
      <Route path="/" component={Photos} />
    </Switch>
  </div>
);

export default App;