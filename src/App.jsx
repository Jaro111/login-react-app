import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import LogOrSign from "./components/logOrSign/LogOrSign";
import AllUsers from "./components/allUsersCard/AllUsers";
import { getTokenFromCookie } from "./common";
import { authCheck } from "./utils/fetch";

function App() {
  //
  const [user, setUser] = useState({});
  const [log, setLog] = useState(false);

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");
      if (token === false) {
        setUser({});
      } else {
        loginWithToken(token, setUser);
      }
      console.log("User: ", user);
    }
  }, []);

  const loginWithToken = async (token, setUser) => {
    const persistantUser = await authCheck(token);
    await setUser(persistantUser.user);
  };

  const logOut = (e) => {
    e.preventDefault();
    setUser({});
    document.cookie =
      "jwt_token=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  return (
    <div className="bodyApp">
      {!user.username ? (
        <LogOrSign setUser={setUser} />
      ) : (
        <div>
          <h1>
            Hello {user.username}
            <br></br>Your Email: {user.email}
          </h1>
          <AllUsers />
          <button onClick={logOut}>LOG OUT</button>
        </div>
      )}
    </div>
  );
}

export default App;
