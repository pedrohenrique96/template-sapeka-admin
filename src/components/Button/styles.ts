import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  padding: 15px 0;
  background: #ffd4d7;
  border: 0;
  border-radius: 4px;
  color: #666;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background: ${darken(0.03, '#ffd4d7')};
  }
`;
