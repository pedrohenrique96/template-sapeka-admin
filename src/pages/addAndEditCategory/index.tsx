import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import Box from '../../components/BoxPage';
import Input from '../../components/Input';
import Label from '../../components/Label';
import InputSelect from '../../components/InputSelect';
import ButtonToBack from '../../components/ButtonToBack';
import Button from '../../components/Button';

import { useContextCategory } from '../../hooks/categories';

import { Container, FormSubmit } from './styles';

type kidsOrManOrWomanType = 'Masculino' | 'Kids' | 'Feminino';

interface InputType {
  name: string;
  kidsOrManOrWoman: kidsOrManOrWomanType;
}

const options = [
  { value: 'Masculino', label: 'Masculino' },
  { value: 'Kids', label: 'Kids' },
  { value: 'Feminino', label: 'Feminino' },
];

const AddAndEditCategory: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { add } = useContextCategory();

  const handleSubmit = useCallback(
    async (data: InputType) => {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        kidsOrManOrWoman: yup.string().required('Sexo obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      add({
        name: data.name,
        kidsOrManOrWoman: data.kidsOrManOrWoman,
      });
    },
    [add],
  );

  return (
    <Container>
      <Box>
        <ButtonToBack link="categories" />

        <FormSubmit onSubmit={handleSubmit}>
          <Label>Nome da Categoria</Label>
          <Input name="name" placeholder="Coloque um nome" type="text" />
          <Label>Sexo</Label>
          <InputSelect
            name="kidsOrManOrWoman"
            placeholder="Buscar"
            options={options}
            getOptionLabel={item => item.label}
            classNamePrefix="react-select"
          />
          <br />
          <Button type="submit">Salvar</Button>
        </FormSubmit>
      </Box>
    </Container>
  );
};

export default AddAndEditCategory;
