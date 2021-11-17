import logo from "./logo.svg";
import "./App.css";
import { UserCard } from "./components/UserCard";
import { ClassUserCard } from "./components/ClassUserCard";

function App() {
  return (
    <div className="App">
      <UserCard userId={"1"} />
      <ClassUserCard userId={"2"} />
    </div>
  );
}

export default App;
