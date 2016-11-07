import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './containers/Share/Layout';
import App from './containers/App';
import Board from './containers/Board';

export const urls = {
  index: '/',
};

export const routes = (
  <Route path={urls.index} component={Layout}>
    <IndexRoute component={Board} />
  </Route>
);
