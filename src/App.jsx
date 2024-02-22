import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import LogOrSign from "./components/logOrSign/LogOrSign";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="bodyApp">
      {!user.username ? (
        <LogOrSign setUser={setUser} />
      ) : (
        <h1>
          Hello {user.username}
          <br></br>Your Email: {user.email}
        </h1>
      )}
    </div>
  );
}

export default App;
