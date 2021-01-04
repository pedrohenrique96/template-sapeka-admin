import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Products from '../pages/Products';
import Categories from '../pages/Categories';
import SubCategories from '../pages/SubCategories';
import Auth from '../pages/Authentication';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/products" component={Products} isPrivate />
    <Route path="/categories" component={Categories} isPrivate />
    <Route path="/subcategories" component={SubCategories} isPrivate />
  </Switch>
);

export default Routes;
