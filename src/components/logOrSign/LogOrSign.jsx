import React from "react";
import Login from "../login/Login";
import SignUp from "../SignUp/SignUp";

const LogOrSign = ({ setUser, setLog }) => {
  return (
    <div className="logOrSignContainer">
      <Login setUser={setUser} setLog={setLog} />
      <SignUp setUser={setUser} setLog={setLog} />
    </div>
  );
};

export default LogOrSign;
