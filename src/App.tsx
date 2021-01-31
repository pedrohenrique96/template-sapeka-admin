import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyles />
        <ToastContainer />
      </AppProvider>
    </Router>
  );
};

export default App;
