import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux' //! Old
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { inc, dec, rnd } from './actions';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <h1>Start</h1>
// );

// const store = createStore(reducer); //! Old
const store = configureStore({ reducer });

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(() => {
  update();
})

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
})

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
})

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch(rnd(payload));
})
