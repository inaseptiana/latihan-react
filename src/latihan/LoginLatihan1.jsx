import { useState } from "react";

import React from "react";

const LoginLatihan1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (Event) => {
    setUsername(Event.target.value);
  };

  const handlePassword = (Event) => {
    setPassword(Event.target.value);
  };

  return (
    <div>
      <h1>LoginLatihan1</h1>
      <input type="text" placeholder="username" value={username} onChange={handleUsername} />
      <input type="password" placeholder="password" value={password} onChange={handlePassword} />
      <button onClick={() => console.log(username, password)}> Login </button>

      <h1>{username}</h1>
    </div>
  );
};

export default LoginLatihan1;
