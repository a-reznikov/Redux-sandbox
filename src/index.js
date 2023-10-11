import React from 'react';
import ReactDOM from 'react-dom/client';


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

let state = reducer(undefined, {});

state = reducer(state, { type: 'INC' });
console.log(state);

state = reducer(state, { type: 'INC' });
console.log(state);

