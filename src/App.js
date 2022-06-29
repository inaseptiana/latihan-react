import { useState } from "react";
import CounterLatihan from "./latihan/CounterLatihan";
import LoginLatihan1 from "./latihan/LoginLatihan1";
import LoginLatihan2 from "./latihan/LoginLatihan2";
import TodoLatihan from "./latihan/TodoLatihan";
// import Counter from "./components/Counter";
// import CartItem from "./components/CartItem";
// import Login from "./components/Login";

// function App() {
//   // state
//   const [nama, setNama] = useState("ina");
//   const [products, setProducts] = useState(["apel", "mangga", "jeruk"]);
//   return (
//     <div>
//       <h1 onClick={() => setNama("Alpa")}>{nama}</h1>

//       <Login />

//       {products.map((item, index) => (
//         <CartItem key={index} product={item} />
//       ))}
//       <Counter />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <CounterLatihan />
      <LoginLatihan1 />
      <LoginLatihan2 />
      <TodoLatihan />
    </div>
  );
}

export default App;
