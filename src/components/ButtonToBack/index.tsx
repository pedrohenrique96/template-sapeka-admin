import React, { ButtonHTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';

import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  link: string;
}

const ButtonToBack: React.FC<ButtonType> = ({ link }) => {
  const { push } = useHistory();

  return (
    <Container onClick={() => push(`/${link}`)}>
      <MdChevronLeft size={20} color="#333" />
      Back
    </Container>
  );
};

export default ButtonToBack;
