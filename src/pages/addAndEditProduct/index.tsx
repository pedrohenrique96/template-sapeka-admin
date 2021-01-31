import React, { useCallback, useRef, useState, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import Box from '../../components/BoxPage';
import Input from '../../components/Input';
import Label from '../../components/Label';
import InputSelect from '../../components/InputSelect';
import ButtonToBack from '../../components/ButtonToBack';
import InputImage from './InputImage';
import Button from '../../components/Button';

import { useContextProduct } from '../../hooks/product';

import { api } from '../../services/api';

import { Container, FormSubmit } from './styles';

interface InputType {
  name: string;
  price: number;
  description: string;
  file: File;
}

interface SubCategory {
  id: number;
  name: string;
}

const AddAndEditProduct: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>();
  const { addProduct } = useContextProduct();

  const getSelectedSubCategories = useCallback(data => {
    setSelectedSubCategory(data);
  }, []);

  const getCategories = useCallback(async () => {
    const response = await api.get('subcategories');

    setSubCategories(response.data);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleSubmit = useCallback(
    async (data: InputType) => {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        description: yup.string().required('Descrição obrigatório'),
        price: yup.number().required('Preço obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      addProduct({
        name: data.name,
        file: data.file,
        price: data.price,
        description: data.description,
        subcategory_id: selectedSubCategory?.id as number,
      });
    },
    [selectedSubCategory, addProduct],
  );

  return (
    <Container>
      <Box>
        <ButtonToBack link="products" />

        <FormSubmit onSubmit={handleSubmit}>
          <Label>Nome do Produto</Label>
          <Input name="name" placeholder="Coloque um nome" type="text" />
          <Label>Preço</Label>
          <Input name="price" placeholder="Coloque um preço" type="text" />
          <Label>Descrição</Label>
          <Input
            name="description"
            placeholder="Coloque uma descrição"
            type="text"
          />
          <Label>Categoria</Label>
          <InputSelect
            name="subcategory_id"
            placeholder="Buscar category"
            options={subCategories}
            getOptionLabel={item => item.name}
            classNamePrefix="react-select"
            onChange={value => getSelectedSubCategories(value)}
            value={selectedSubCategory}
          />

          <Label>Selecione uma imagem</Label>
          <InputImage name="file" accept="image/*" />

          <Button type="submit">Salvar</Button>
        </FormSubmit>
      </Box>
    </Container>
  );
};

export default AddAndEditProduct;
