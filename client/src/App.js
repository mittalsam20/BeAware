import { useState } from "react";
import "./App.css";
import NavComp from "./components/navcomp/navcomp";
function App() {
  const [category, setCategory] = useState("general");

  const news = async () => {
    try {
    } catch (err) {}
  };
  return (
    <div className="App">
      <NavComp setCategory={setCategory} />
    </div>
  );
}

export default App;
