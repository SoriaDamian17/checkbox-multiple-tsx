import "./styles.css";
import { buildingAreasOptions, IdValue } from "./components/MultipleCheckbox/data";
import MultipleCheckbox from "./components/MultipleCheckbox";
import { useState } from "react";
import { isExist } from "./utils/validationHelper";

export default function App() {
  const [options, setOptions] = useState<IdValue[]>(buildingAreasOptions);
  const [values, setValues] = useState<IdValue[]>([]);

  function handleInput(item: IdValue) {
    const updateInput = values.map((option: IdValue) => {
      if (option.id === item.id) option.input = item.input;

      return option;
    });
    setValues(updateInput);
  }

  function handleChecked(item: IdValue) {
    const enableInput: IdValue[] = options.map((option: IdValue) => {
      if (option.id === item.id) {
        option.disabled = !option.disabled;
      }
      return option;
    });
    setOptions(enableInput);
    return setValues(isExist(values, item.id).length ? 
    values.filter((opt) => opt.id !== item.id) :
    [...values, item]);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MultipleCheckbox
        options={options}
        values={values}
        handleChecked={handleChecked}
        handleInput={handleInput}
        />
    </div>
  );
}
