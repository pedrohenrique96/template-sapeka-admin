import styled from 'styled-components';

export const Container = styled.span`
  font-size: 14px;
  color: #444444;
  text-align: left;
  font-weight: bold;

  margin-bottom: 10px;

  div + & {
    margin-top: 10px;
  }
`;
