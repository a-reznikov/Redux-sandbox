import React from 'react';
import ReactDOM from 'react-dom/client';


import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

import App from './components/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer });

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
