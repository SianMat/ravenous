import { useState } from "react";
import "./App.css";
import Business from "./components/Business";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBar />
      <BusinessList />
    </>
  );
}

export default App;
