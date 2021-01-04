import React, { useCallback, useEffect, useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import TopPageInfos from '../../components/TopPageInfos';
import BoxPage from '../../components/BoxPage';
import Navigation from '../../components/Navigation';
import { api } from '../../services/api';

import { Container, Table } from './styles';

interface SubCategories {
  name: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  pathImage: string;
  price: number;
  subcategory: SubCategories;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleEdit = useCallback(async (id: number) => {
    console.log('edit', id); // eslint-disable-next-line
  }, []);

  const handleDel = useCallback(async (id: number) => {
    console.log('Del', id); // eslint-disable-next-line
  }, []);

  const getProduts = useCallback(async () => {
    const response = await api.get('products');

    setProducts(response.data);
  }, []);

  useEffect(() => {
    getProduts();
  }, [getProduts]);

  return (
    <Container>
      <Navigation />

      <TopPageInfos page="Produto" />

      <BoxPage>
        <Table>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>SubCategoria</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.pathImage} alt="" srcSet="" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.subcategory.name}</td>
                <td>
                  <MdEdit
                    size={20}
                    color="#4d85ee"
                    onClick={() => handleEdit(product.id)}
                  />
                  <MdDelete
                    size={20}
                    color="#de3b3b"
                    onClick={() => handleDel(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </BoxPage>
    </Container>
  );
};

export default Products;
