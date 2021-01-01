import React, { FunctionComponent } from 'react';

import { Container } from './styles';

type buttonType = {
  children: string;
};

const Button: FunctionComponent<buttonType> = ({ children }) => {
  return <Container type="submit">{children}</Container>;
};

export default Button;
