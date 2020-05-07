import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing } from './Landing';
import { Search } from './Search';

import '../public/style.css';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default hot(App);
