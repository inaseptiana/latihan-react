import { useState } from "react";

const Login = () => {
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const handleInput = (Event) => {
    setInputLogin({
      ...inputLogin,
      [Event.target.name]: Event.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(inputLogin);
  };
  return (
    <div>
      <form>
        <input type="email" placeholder="email" name="email" value={inputLogin.email} onChange={handleInput} />
        <input type="password" placeholder="password" name="password" value={inputLogin.password} onChange={handleInput} />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
