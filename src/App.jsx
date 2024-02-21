import { useState } from "react";
import "./App.css";
import LogOrSign from "./components/logOrSign/LogOrSign";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bydyApp">
      <LogOrSign />
    </div>
  );
}

export default App;
