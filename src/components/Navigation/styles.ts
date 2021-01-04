import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #ffd4d7;
`;
export const NavigationHomeBar = styled.div`
  margin: 0 auto;
`;

export const NavigationHomeBarItem = styled(NavLink).attrs({
  activeStyle: {
    fontWeight: 'bold',
    color: '#333',
  },
})`
  padding: 0 10px;
  color: #666;
  font-size: 18px;
  text-decoration: none;
`;

export const ButtonSignOut = styled.button`
  padding: 15px 15px;
  background: #ffd4d7;
  border: 0;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background: ${darken(0.03, '#ffd4d7')};
  }
`;
