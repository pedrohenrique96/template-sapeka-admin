import styled from 'styled-components';
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
  height: 448px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  max-height: 160px;
  margin: 30px auto;
`;
