import { useState } from "react";

const CounterLatihan = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>latihan</h1>
      <button onClick={decrement}>-</button>
      <span> {counter} </span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default CounterLatihan;
