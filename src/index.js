import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './router';
import { store } from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <Provider store={store}>
    <BrowserRouter>
        <MainRoutes />
    </BrowserRouter>
      </Provider>
  </StrictMode>
);
