import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyles />
    </Router>
  );
};

export default App;
