import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
