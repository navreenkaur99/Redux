import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

const App = ({ count, increment, decrement }) => {
  console.log('Rendering App with count:', count); // Log the count prop

  return (
    <div>
         <div className='card'>
                <div className="cardbody">
         
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
    </div>
    </div>

  );
};

const mapStateToProps = (state) => {
  console.log('Redux State:', state); // Log the entire Redux state
  console.log('Counter Slice:', state.counter); // Log the counter slice of the state

  return {
    count: state.counter ? state.counter.count : 0 // Access count from state.counter
  };
};

export default connect(mapStateToProps, { increment, decrement })(App);

