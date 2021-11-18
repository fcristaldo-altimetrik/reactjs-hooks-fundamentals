import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card";
import { ClassCard } from "./components/ClassCard";

function App() {
  const [name, setName] = useState("Facundo");
  const [rerender, setRerender] = useState(true);
  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <Card user={{ name, email: "facundo@mail.com" }} />
      <ClassCard user={{ name, email: "classfacundo@mail.com" }} />
      <button onClick={() => setRerender(!rerender)}>Re-render</button>
    </div>
  );
}

export default App;
