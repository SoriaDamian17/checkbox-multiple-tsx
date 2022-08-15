import "./styles.css";
import { buildingAreasOptions, IdValue } from "./components/MultipleCheckbox/data";
import MultipleCheckbox from "./components/MultipleCheckbox";
import { useState } from "react";

export default function App() {
  const [options, setOptions] = useState<IdValue[]>([]);

  function handleChecked(item: any) {
    console.log(item);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MultipleCheckbox
        options={buildingAreasOptions}
        values={options}
        handleChecked={handleChecked}
        />
    </div>
  );
}
