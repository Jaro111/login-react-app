import React from "react";
import { useState } from "react";
import getUser from "../../utils/fetch";
//
//

//

const Login = () => {
  //
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  //
  const changeHandler = (e, setter) => {
    console.log(user);
    console.log(password);
    setter(e.target.value);
  };

  const handleSubmit = (user, password) => {
    getUser(user, password);
  };

  return (
    <div className="windowContainer">
      <form onSubmit={() => handleSubmit(user, password)}>
        <input
          className="userNameInput"
          placeholder="user name"
          onChange={(e) => changeHandler(e, setUser)}
        />
        <input
          className="passwordInput"
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword)}
        />
        <button type="submit" className="loginButton">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;

// 1. Handle username and password from input
