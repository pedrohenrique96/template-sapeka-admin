import React from 'react';

import { Container, NavigationHomeBar, NavigationHomeBarItem } from './styles';

const Navigation: React.FC = () => {
  return (
    <Container>
      <NavigationHomeBar>
        <NavigationHomeBarItem to="products">Produto</NavigationHomeBarItem>
        <NavigationHomeBarItem to="categories">
          Categorias
        </NavigationHomeBarItem>
        <NavigationHomeBarItem to="subcategories">
          SubCategorias
        </NavigationHomeBarItem>
      </NavigationHomeBar>
    </Container>
  );
};

export default Navigation;
