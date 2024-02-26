import { useState } from "react";
import { signupuUser } from "../../utils/fetch";

const SignUp = ({ setUser, setLog }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  //

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      return;
    } else if (!email) {
      return;
    } else if (!password) {
      return;
    }
    console.log("Handle submit");
    const data = await signupuUser(username, email, password);
    console.log(data);
    setUser(data.user);
    setLog(true);
  };

  //

  return (
    <div className="windowContainer">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="userNameInput"
          placeholder="user name"
          onChange={(e) => changeHandler(e, setUsername, username)}
        ></input>
        <input
          className="passwordInput"
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        ></input>
        <input
          className="passwordInput"
          placeholder="email"
          onChange={(e) => changeHandler(e, setEmail, email)}
        ></input>
        <button className="signUpButton" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
