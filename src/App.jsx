import { useState } from "react";
import "./App.css";
import Business from "./components/Business";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Business />
    </>
  );
}

export default App;
