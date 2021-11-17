import { Field } from "./components/Field";
import { ClassField } from "./components/ClassField";
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
      <ClassField
        id={"class-name"}
        label={"Class Name"}
        defaultValue={"Jose"}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default App;
