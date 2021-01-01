import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
