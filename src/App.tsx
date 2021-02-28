import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import Index from './pages/Dashboard';
// import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Index />
    {/* <BrowserRouter>
      <Routes />
    </BrowserRouter> */}

    <GlobalStyle />
  </>
);

export default App;
