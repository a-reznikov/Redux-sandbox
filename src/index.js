import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux' //! Old
import { bindActionCreators } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const store = createStore(reducer); //! Old
const store = configureStore({ reducer });
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  root.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />
  );

}

update();

store.subscribe(update);
