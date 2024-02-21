import { useState } from "react";
//
//

//

const Login = () => {
  //
  const [user, SetUser] = useState("");
  const [password, SetPassword] = useState("");

  //
  const changeHandler = () => {};

  const handleSubmit = () => {};

  return (
    <div className="windowContainer">
      <input className="userNameInput" placeholder="user name" />
      <input className="passwordInput" placeholder="password" />
      <button className="loginButton" onClick>
        Log In
      </button>
    </div>
  );
};

export default Login;

// 1. Handle username and password from input
