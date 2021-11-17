import { Field } from "./components/Field";
import "./App.css";

function App() {
  const handleBlur = (event) => {
    console.log("handleBlur value", event.currentTarget.value);
  };
  return (
    <div className={"container"}>
      <Field
        id={"name"}
        label={"Name"}
        defaultValue={"Facundo"}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default App;
