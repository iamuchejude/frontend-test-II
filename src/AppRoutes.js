import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './containers/Home';
import Spotify from './containers/Spotify';
import Giphy from './containers/Giphy';

import SpotifyCallback from './components/SpotifyCallback';

const AppRoutes = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={ Home } />
      <Route exact path="/spotify" component={ Spotify } />
      <Route exact path="/giphy" component={ Giphy } />
      <Route exact path="/callback" component={ SpotifyCallback } />
    </Fragment>
  </BrowserRouter>
);

export default AppRoutes;
