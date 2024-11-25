import React, { useContext } from "react";
import { GlobalContext } from "../providers/GlobalState";

export default function GrandChildren() {
  const { userName, count, handleIncrement } = useContext(GlobalContext);

  return (
    <>
      <h3>GrandChildren</h3>
      <h3>UserName: {userName}</h3>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

// Optional chain (?.)
