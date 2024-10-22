import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import "./style.css";
import Card from "./components/api-data/Card";
const App = () => {
  const [state, setState] = useState(true);
  return (
    <div>
      <Card></Card>
    </div>
  );
};
export default App;
