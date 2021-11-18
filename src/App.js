import logo from "./logo.svg";
import "./App.css";
import { MemoParagraph } from "./components/MemoParagraph";
import { ClassMemoParagraph } from "./components/ClassMemoParagraph";

function App() {
  return (
    <div className="App">
      <MemoParagraph />
      {/* <ClassMemoParagraph /> */}
    </div>
  );
}

export default App;
