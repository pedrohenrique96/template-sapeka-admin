import React, { createContext, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../services/api';

interface Product {
  name: string;
  price: number;
  description: string;
  subcategory_id: number;
  file: File;
}

interface ProductContextData {
  del(productId: number): Promise<void>;
  edit(productId: number): Promise<void>;
  addProduct(data: Product): Promise<void>;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

const ProductProvider: React.FC = ({ children }) => {
  const { push } = useHistory();
  const addProduct = useCallback(
    async ({ file, name, price, subcategory_id }: Product) => {
      await api.post('products', {
        name,
        price,
        subcategory_id,
        file,
      });
      push(`/products`);
      toast.success('Produto adicionada com sucesso!');
    },
    [push],
  );

  const edit = useCallback(async () => {
    push(``);
  }, [push]);

  const del = useCallback(async productId => {
    await api.delete(`products/delete/${productId}`);
    toast.warn('Produto deletado com sucesso!');
  }, []);

  return (
    <ProductContext.Provider value={{ del, edit, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

function useContextProduct(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      'useContextCategory must be used within an SubCategoryContext',
    );
  }

  return context;
}

export { useContextProduct, ProductProvider };
