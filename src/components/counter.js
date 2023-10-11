import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

const Counter = ({ counter, dec, inc, rnd }) => {

  return (
    <div className='class="container-fluid text-sm-center p-5 bg-light"'>
      <h2 id="counter">{counter}</h2>
      <button id="dec"
        onClick={dec}
        className="btn btn-primary btn-lg">DEC</button>
      <button id="inc"
        onClick={inc}
        className="btn btn-primary btn-lg">INC</button>
      <button id="rnd"
        onClick={rnd}
        className="btn btn-warning btn-lg">RND</button>
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  }
}

const mapDispatchToProps = (dispatch) => {

  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    rnd: () => {
      const randomValue = Math.floor(Math.random() * 10);
      rnd(randomValue);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);