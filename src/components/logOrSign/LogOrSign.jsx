import React from "react";
import Login from "../login/Login";
import SignUp from "../SignUp/SignUp";

const LogOrSign = () => {
  return (
    <div className="logOrSignContainer">
      <Login />
      <SignUp />
    </div>
  );
};

export default LogOrSign;
