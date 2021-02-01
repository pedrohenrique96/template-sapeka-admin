import React, { useCallback, useEffect, useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/auth';
import TopPageInfos from '../../components/TopPageInfos';
import BoxPage from '../../components/BoxPage';
import Navigation from '../../components/Navigation';
import { api } from '../../services/api';
import { useContextProduct } from '../../hooks/product';

import { Container, Table } from './styles';

interface SubCategories {
  name: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  imageName: string;
  price: number;
  subcategory: SubCategories;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { del } = useContextProduct();
  const { signOut } = useAuth();
  const getProduts = useCallback(async () => {
    try {
      const response = await api.get('products');
      setProducts(response.data);
    } catch (err) {
      if (err.response.status === 400) {
        toast.warn('Token inválido faça seu login novamente.');
        signOut();
      }
    }
  }, [signOut]);

  useEffect(() => {
    getProduts();
  }, [getProduts]);

  const handleEdit = useCallback(async (id: number) => {
    console.log('edit', id); // eslint-disable-next-line
  }, []);

  const handleDel = useCallback(
    async (id: number) => {
      del(id).then(() => getProduts());
    },
    [del, getProduts],
  );

  return (
    <Container>
      <Navigation />

      <TopPageInfos page="Produto" link="/products/create" />

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
                  <img
                    src={`http://localhost:3333/files/${product.imageName}`}
                    alt={product.name}
                  />
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
