import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './utils/Context'; 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </StrictMode>
  </BrowserRouter>
);

