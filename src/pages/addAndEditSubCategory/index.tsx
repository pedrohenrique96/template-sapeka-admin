import React, { useCallback, useRef, useState, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Box from '../../components/BoxPage';
import Input from '../../components/Input';
import Label from '../../components/Label';
import InputSelect from '../../components/InputSelect';
import ButtonToBack from '../../components/ButtonToBack';
import Button from '../../components/Button';
import { api } from '../../services/api';

import { useContextCategory } from '../../hooks/subCategories';

import { Container, FormSubmit } from './styles';

interface Category {
  id: number;
  name: string;
  kidsOrManOrWoman: string;
}

interface InputType {
  name: string;
}

const AddAndEditCategory: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const { add } = useContextCategory();

  const getSelectedCategories = useCallback(data => {
    setSelectedCategory(data);
  }, []);

  const getCategories = useCallback(async () => {
    const response = await api.get('categories');

    if (!response.data.length) {
      toast.warn('Para cadastrar uma subcategoria tem que haver uma categoria');
      return;
    }

    setCategories(response.data);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleSubmit = useCallback(
    async (data: InputType) => {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      add({
        name: data.name,
        category_id: selectedCategory?.id as number,
      });
    },
    [add, selectedCategory],
  );

  return (
    <Container>
      <Box>
        <ButtonToBack link="subcategories" />

        <FormSubmit onSubmit={handleSubmit}>
          <Label>Nome da Categoria</Label>
          <Input name="name" placeholder="Coloque um nome" type="text" />
          <Label>Categoria</Label>
          <InputSelect
            name="category_id"
            placeholder="Buscar category"
            options={categories}
            getOptionLabel={item => item.name}
            classNamePrefix="react-select"
            onChange={value => getSelectedCategories(value)}
            value={selectedCategory}
          />
          <br />
          <Button type="submit">Salvar</Button>
        </FormSubmit>
      </Box>
    </Container>
  );
};

export default AddAndEditCategory;
