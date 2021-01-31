import React, { useCallback, useEffect, useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import TopPageInfos from '../../components/TopPageInfos';
import BoxPage from '../../components/BoxPage';
import Navigation from '../../components/Navigation';
import { api } from '../../services/api';

import { Container, Table } from './styles';

import { useContextCategory } from '../../hooks/subCategories';

interface Category {
  name: string;
}

interface SubCategory {
  id: number;
  name: string;
  category: Category;
}

const SubCategories: React.FC = () => {
  const [subcategories, setSubCategories] = useState<SubCategory[]>([]);

  const { del } = useContextCategory();

  const getSubCategories = useCallback(async () => {
    const response = await api.get('subcategories');

    setSubCategories(response.data);
  }, []);

  useEffect(() => {
    getSubCategories();
  }, [getSubCategories]);

  const handleEdit = useCallback(async (id: number) => {
    console.log('edit', id); // eslint-disable-next-line
  }, []);

  const handleDel = useCallback(
    async (id: number) => {
      del(id)
        .then(() => {
          getSubCategories();
        })
        .catch(() => {
          console.log('Erro');
        });
    },
    [del, getSubCategories],
  );

  return (
    <Container>
      <Navigation />

      <TopPageInfos page="SubCategoria" link="/subcategories/create" />

      <BoxPage>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {subcategories.map(subcategory => (
              <tr key={subcategory.id}>
                <td>{subcategory.name}</td>
                <td>{subcategory.category.name}</td>
                <td>
                  <MdEdit
                    size={20}
                    color="#4d85ee"
                    onClick={() => handleEdit(subcategory.id)}
                  />
                  <MdDelete
                    size={20}
                    color="#de3b3b"
                    onClick={() => handleDel(subcategory.id)}
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

export default SubCategories;
