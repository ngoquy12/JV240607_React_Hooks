import React, { useReducer, useState } from "react";

const initilaValue = 10;

const INCREMENT = "increment";
const DECREMENT = "decrement";

export default function DemoUseReducer() {
  const reducer = (state, action) => {
    switch (action) {
      case INCREMENT:
        return state + 2;

      case DECREMENT:
        return state - 10;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initilaValue);

  const handleIncrement = () => {
    dispatch(INCREMENT);
  };

  const handleDecrement = () => {
    dispatch(DECREMENT);
  };

  return (
    <div>
      <h3>Value: {state}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
