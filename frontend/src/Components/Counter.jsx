import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
} from '../Context/Reducers/counterReducer.jsx';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};
export default Counter;
