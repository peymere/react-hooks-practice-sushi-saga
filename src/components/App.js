import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [budget, setBudget] = useState(50)

  return (
    <div className="app">
      <SushiContainer API={API} setBudget={setBudget} budget={budget} />
      <Table setBudget={setBudget} budget={budget} />
    </div>
  );
}

export default App;
