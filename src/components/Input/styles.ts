import styled, { css } from 'styled-components';
import { darken } from 'polished';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  margin: 5px 0 10px 0;
  padding: 10px 15px;
  padding: 16px;
  width: 300px;
  border: 2px solid ${darken(0.05, '#ffd4d7')};
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #333;
      border-color: #ffd4d7;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #333;
    `}
    input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #333;
    &::placeholder {
      color: #666;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
