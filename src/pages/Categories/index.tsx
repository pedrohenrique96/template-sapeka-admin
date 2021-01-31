import React, { useCallback, useEffect, useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import TopPageInfos from '../../components/TopPageInfos';
import BoxPage from '../../components/BoxPage';
import Navigation from '../../components/Navigation';
import { api } from '../../services/api';
import { useContextCategory } from '../../hooks/categories';

import { Container, Table } from './styles';

interface Category {
  id: number;
  name: string;
  kidsOrManOrWoman: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { del } = useContextCategory();

  const getCategories = useCallback(async () => {
    const response = await api.get('categories');

    setCategories(response.data);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleEdit = useCallback(async (id: number) => {
    console.log('edit', id); // eslint-disable-next-line
  }, []);

  const handleDel = useCallback(
    async (id: number) => {
      del(id)
        .then(() => {
          getCategories();
        })
        .catch(() => {
          console.log('Erro');
        });
    },
    [del, getCategories],
  );

  return (
    <Container>
      <Navigation />

      <TopPageInfos page="Categoria" link="/categories/create" />

      <BoxPage>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Masculino/Feminino/Kids</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>{category.kidsOrManOrWoman}</td>
                <td>
                  <MdEdit
                    size={20}
                    color="#4d85ee"
                    onClick={() => handleEdit(category.id)}
                  />
                  <MdDelete
                    size={20}
                    color="#de3b3b"
                    onClick={() => handleDel(category.id)}
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

export default Categories;
