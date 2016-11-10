// React
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="work" component={Work} />
    </Route>
  </Router>
);

export default routes;
