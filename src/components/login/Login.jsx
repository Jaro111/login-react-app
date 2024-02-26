import { useState } from "react";
import { login } from "../../utils/fetch";

//
//
const Login = ({ setUser, setLog }) => {
  //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //
  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      return;
    } else if (!password) {
      return;
    }
    console.log("Handle submit");
    const data = await login(username, password);
    setUser(data.user);
    setLog(true);
  };

  return (
    <div className="windowContainer">
      <h3>Log in</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="userNameInput"
          placeholder="user name"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          className="passwordInput"
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
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
