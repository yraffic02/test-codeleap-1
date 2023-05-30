import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
  </StrictMode>
);
