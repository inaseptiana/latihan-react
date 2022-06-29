import { useState } from "react";

const LoginLatihan2 = () => {
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (Event) => {
    console.log(Event.target.name, Event.target.value);
    setDataUser({
      ...dataUser,
      [Event.target.name]: Event.target.value,
    });
  };
  return (
    <div>
      <h1>LoginLatihan2</h1>
      <input type="text" placeholder="username" value={dataUser.username} onChange={handleChange} name="username" />
      <input type="password" placeholder="password" value={dataUser.password} onChange={handleChange} name="password" />
      <button onClick={() => console.log(dataUser.username, dataUser.password)}>login</button>

      <h1>{dataUser.username}</h1>
      <h1>{dataUser.password}</h1>
    </div>
  );
};

export default LoginLatihan2;
