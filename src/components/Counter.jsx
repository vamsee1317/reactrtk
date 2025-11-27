import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice';

export default function Counter() {

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>

      <button onClick={()=> dispatch(decrement())}> - </button>

      <h1>Counter : {count}</h1>

      <button onClick={()=> dispatch(increment())}> + </button>
      
    </div>
  )
}
