import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

import { Container, PageActive } from './styles';

interface InputProps {
  page: string;
  link: string;
}

const TopPageInfos: React.FC<InputProps> = ({ page, link }) => {
  return (
    <Container>
      <PageActive>{page}</PageActive>
      <Link to={link}>
        <Button type="button">Adicione um {page}</Button>
      </Link>
    </Container>
  );
};

export default TopPageInfos;
