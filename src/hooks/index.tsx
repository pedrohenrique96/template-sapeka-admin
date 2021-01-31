import React from 'react';

import { AuthProvider } from './auth';
import { SubCategoryProvider } from './subCategories';
import { ProductProvider } from './product';
import { CategoryProvider } from './categories';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <SubCategoryProvider>
      <ProductProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </ProductProvider>
    </SubCategoryProvider>
  </AuthProvider>
);

export default AppProvider;
