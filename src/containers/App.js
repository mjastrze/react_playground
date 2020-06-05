import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing } from './Landing';
import { Search } from './Search';
import { Details } from './Details';

import data from '../data.json';

import '../public/style.css';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={(props) => <Search shows={data.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          component={(props) => (
            <Details
              show={data.shows.find(
                (show) => props.match.params.id === show.imdbID,
              )}
              {...props}
            />
          )}
        />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default hot(App);
