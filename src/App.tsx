import "./styles.css";
import { buildingAreasOptions } from "./components/MultipleCheckbox/data";
import MultipleCheckbox from "./components/MultipleCheckbox";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MultipleCheckbox options={buildingAreasOptions} values={[]} />
    </div>
  );
}
