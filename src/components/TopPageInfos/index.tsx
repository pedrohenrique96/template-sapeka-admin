import React from 'react';
import Button from '../Button';

import { Container, PageActive } from './styles';

interface InputProps {
  page: string;
}

const TopPageInfos: React.FC<InputProps> = ({ page }) => {
  return (
    <Container>
      <PageActive>{page}</PageActive>
      <Button>Adicione um {page}</Button>
    </Container>
  );
};

export default TopPageInfos;
