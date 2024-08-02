import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Donate from "./components/donate/Donate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative">
      <Home />
    </main>
  );
}

export default App;
