import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Products from '../pages/Products';
import Categories from '../pages/Categories';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Products} />
      <Route exact path="/categories" component={Categories} />
    </Switch>
  </Router>
);

export default Routes;
