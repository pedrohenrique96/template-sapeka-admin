import React from 'react';

import { Container } from './styles';

const BoxPage: React.FC = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

export default BoxPage;
