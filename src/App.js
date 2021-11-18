import logo from "./logo.svg";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { ClassSearchBar } from "./components/ClassSearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ClassSearchBar />
    </div>
  );
}

export default App;
