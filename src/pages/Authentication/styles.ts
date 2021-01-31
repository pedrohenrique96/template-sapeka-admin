import styled from 'styled-components';
import { Form } from '@unform/web';
import logo from '../../assets/logo.svg';

export const Container = styled.div`
  height: 100vh;
  background: #ffd4d7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 360px;
  height: 500px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  form {
  }
`;

export const FormSubmit = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  max-height: 160px;
  margin: 30px auto;
`;
