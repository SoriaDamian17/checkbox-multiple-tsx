import "./styles.css";
import { buildingAreasOptions, IdValue } from "./components/MultipleCheckbox/data";
import MultipleCheckbox from "./components/MultipleCheckbox";
import { useState } from "react";
import { isExist } from "./utils/validationHelper";

export default function App() {
  const [options, setOptions] = useState<IdValue[]>([]);

  function handleChecked(item: any) {
    console.log(item);
    if (isExist(options, item.id).length) {
      const removeOption = options.filter((opt) => opt.id !== item.id)
      setOptions(removeOption)
      return;
    }
    return setOptions([...options, item])
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
