import React from 'react';
import { connect } from 'react-redux'
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

//? mapDispatchToProps same as actions
// const mapDispatchToProps = (dispatch) => {

//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps, actions)(Counter);