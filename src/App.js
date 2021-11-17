import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Context } from "./Context";
import { Card } from "./components/Card";
import { ClassCard } from "./components/ClassCard";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Context.Provider value={{ name: value, setName: setValue }}>
        <Card />
        <ClassCard />
      </Context.Provider>
    </div>
  );
}

export default App;
