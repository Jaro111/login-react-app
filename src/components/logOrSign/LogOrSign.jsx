import React from "react";
import Login from "../login/Login";
import SignUp from "../SignUp/SignUp";

const LogOrSign = ({ setUser }) => {
  return (
    <div className="logOrSignContainer">
      <Login setUser={setUser} />
      <SignUp setUser={setUser} />
    </div>
  );
};

export default LogOrSign;
