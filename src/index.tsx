import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from 'Providers';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import { compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <AppRoutes />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
