import logo from "./logo.svg";
import "./App.css";
//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
//Components
import { Counter } from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import { Buttons } from "./components/Buttons";
import ClassButtons from "./components/ClassButtons";

const store = createStore(reducers, {});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <ClassCounter />
        <Buttons />
        <ClassButtons />
      </div>
    </Provider>
  );
}

export default App;
