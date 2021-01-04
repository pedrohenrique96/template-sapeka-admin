import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
