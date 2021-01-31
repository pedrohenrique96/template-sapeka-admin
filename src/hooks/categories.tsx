import React, { createContext, useCallback, useContext } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { api } from '../services/api';

type kidsOrManOrWomanType = 'Masculino' | 'Kids' | 'Feminino';

interface Category {
  name: string;
  kidsOrManOrWoman: kidsOrManOrWomanType;
}

interface CategoryContextData {
  del(CategoryId: number): Promise<void>;
  add(category: Category): Promise<void>;
}

const CategoryContext = createContext<CategoryContextData>(
  {} as CategoryContextData,
);

const CategoryProvider: React.FC = ({ children }) => {
  const { push } = useHistory();
  const add = useCallback(
    async ({ kidsOrManOrWoman, name }: Category) => {
      await api.post('categories', {
        name,
        kidsOrManOrWoman,
      });
      push(`/categories`);
      toast.success('Categoria adicionada com sucesso!');
    },
    [push],
  );

  const del = useCallback(async CategoryId => {
    await api.delete(`categories/delete/${CategoryId}`);
    toast.warn('Categoria deletada com sucesso!');
  }, []);

  return (
    <CategoryContext.Provider value={{ del, add }}>
      {children}
    </CategoryContext.Provider>
  );
};

function useContextCategory(): CategoryContextData {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error(
      'useContextCategory must be used within an CategoryContext',
    );
  }

  return context;
}

export { useContextCategory, CategoryProvider };
