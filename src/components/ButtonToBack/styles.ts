import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  background: #ffd4d7;
  height: 100%;
  color: #333;
  border: 0;
  border-radius: 4px;
  padding: 2px 20px;
  font-weight: bold;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  max-width: 100px;

  &:hover {
    background: ${darken(0.03, '#ffd4d7')};
    color: #666;
    svg {
      color: #666;
    }
  }
  svg {
    margin-right: 5px;
  }
`;
