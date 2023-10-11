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
    default:
      return state;
  }
};

// const store = createStore(reducer); //! Old
const store2 = configureStore({ reducer });

store2.subscribe(() => {
  console.log(store2.getState());
})

store2.dispatch({ type: 'INC' });
store2.dispatch({ type: 'INC' });
console.log(store2.getState());
