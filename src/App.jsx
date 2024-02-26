import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import LogOrSign from "./components/logOrSign/LogOrSign";
import AllUsers from "./components/allUsersCard/AllUsers";

function App() {
  const [user, setUser] = useState({});
  const [log, setLog] = useState(false);

  const logOut = () => {
    setLog(false);
    console.log(log);
  };
  return (
    <div className="bodyApp">
      {!user.username || !log ? (
        <LogOrSign setUser={setUser} setLog={setLog} />
      ) : (
        <div>
          <h1>
            Hello {user.username}
            <br></br>Your Email: {user.email}
          </h1>
          <AllUsers />
          <button onClick={() => logOut()}>LOG OUT</button>
        </div>
      )}
    </div>
  );
}

export default App;
