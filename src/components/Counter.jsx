import { useState } from "react";

import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <span> {count} </span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default Counter;
