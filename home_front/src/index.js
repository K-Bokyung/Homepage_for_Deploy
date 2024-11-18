import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './assets/css/styles.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='Homepage_for_Deploy'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
