import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux' //! Old
import { bindActionCreators } from 'redux';
import { configureStore, bind } from '@reduxjs/toolkit';
import reducer from './reducer';
import * as actions from './actions';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <h1>Start</h1>
// );

// const store = createStore(reducer); //! Old
const store = configureStore({ reducer });
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(() => {
  update();
})

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  rnd(payload);
})
