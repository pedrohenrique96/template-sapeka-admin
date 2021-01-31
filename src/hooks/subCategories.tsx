import React, { createContext, useCallback, useContext } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { api } from '../services/api';

interface SubCategory {
  name: string;
  category_id: number;
}

interface SubCategoryContextData {
  del(subCategoryId: number): Promise<void>;
  add(subcategory: SubCategory): Promise<void>;
}

const SubCategoryContext = createContext<SubCategoryContextData>(
  {} as SubCategoryContextData,
);

const SubCategoryProvider: React.FC = ({ children }) => {
  const { push } = useHistory();
  const add = useCallback(
    async ({ category_id, name }: SubCategory) => {
      await api.post('subcategories', {
        category_id,
        name,
      });
      push(`/subcategories`);

      toast.success('SubCategoria adicionada com sucesso!');
    },
    [push],
  );

  const del = useCallback(async subCategoryId => {
    await api.delete(`subCategories/delete/${subCategoryId}`);
    toast.warn('SubCategoria deletada com sucesso!');
  }, []);

  return (
    <SubCategoryContext.Provider value={{ del, add }}>
      {children}
    </SubCategoryContext.Provider>
  );
};

function useContextCategory(): SubCategoryContextData {
  const context = useContext(SubCategoryContext);

  if (!context) {
    throw new Error(
      'useContextCategory must be used within an SubCategoryContext',
    );
  }

  return context;
}

export { useContextCategory, SubCategoryProvider };
