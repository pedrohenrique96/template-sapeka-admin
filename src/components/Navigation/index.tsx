import React, { useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';

import {
  Container,
  NavigationHomeBar,
  NavigationHomeBarItem,
  ButtonSignOut,
} from './styles';

import { useAuth } from '../../hooks/auth';

const Navigation: React.FC = () => {
  const { signOut } = useAuth();
  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

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
      <ButtonSignOut type="button" onClick={() => handleSignOut()}>
        <FiLogOut color="#333" size={20} />
      </ButtonSignOut>
    </Container>
  );
};

export default Navigation;
