import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Products from '../pages/Products';
import Categories from '../pages/Categories';
import SubCategories from '../pages/SubCategories';
import Auth from '../pages/Authentication';
import addAndEditProduct from '../pages/addAndEditProduct';
import addAndEditCategory from '../pages/addAndEditCategory';
import addAndEditSubCategory from '../pages/addAndEditSubCategory';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/products" component={Products} isPrivate />
    <Route path="/products/create" component={addAndEditProduct} isPrivate />
    <Route path="/categories/create" component={addAndEditCategory} isPrivate />
    <Route
      path="/subcategories/create"
      component={addAndEditSubCategory}
      isPrivate
    />
    <Route exact path="/categories" component={Categories} isPrivate />
    <Route exact path="/subcategories" component={SubCategories} isPrivate />
  </Switch>
);

export default Routes;
