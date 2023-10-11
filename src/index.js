import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux' //! Old
import { configureStore } from '@reduxjs/toolkit';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <h1>Start</h1>
// );

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return ++state;
    case 'DEC':
      return --state;
    case 'RND':
      return state + action.payload;
    default:
      return state;
  }
};

// const store = createStore(reducer); //! Old
const store = configureStore({ reducer });

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(() => {
  update();
})

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch({ type: 'INC' });
})

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({ type: 'DEC' });
})

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch({ type: 'RND', payload });
})
