import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from './Context/GlobalContext';
import AppRouter from './Routes';

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
    </GlobalContext>

  );
}

export default App;
