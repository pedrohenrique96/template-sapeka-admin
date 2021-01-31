import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const FormSubmit = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  div.react-select__control {
    border: 2px solid #ffd4d7;
  }
`;
