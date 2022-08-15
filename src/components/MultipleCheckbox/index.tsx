import {
  Checkbox,
  CheckboxContainer,
  CheckboxInput,
  CheckboxItem
} from "./styles";
import { IdValue } from "./data";

export interface MultipleSelectProps {
  options: IdValue[];
  values: IdValue[];
  handleChecked: (value: IdValue) => void
  handleInput: (value: IdValue) => void;
}

const MultipleCheckbox: React.FC<MultipleSelectProps> = ({
  options,
  values,
  handleChecked,
  handleInput,
}: MultipleSelectProps) => {

  function onChangeInput(
    item: IdValue,
    evt: React.ChangeEvent<HTMLInputElement>
  ) {
    item.input = evt.target.value;
    handleInput && handleInput(item);
  }

  function handleClick(item: any) {
    handleChecked && handleChecked(item);
  }

  function handleSelected(values: any, item: any) {
    const itemFindIt = values.filter((val: any) => val.id === item.id);
    return itemFindIt.length ? "selected" : "";
  }

  return (
    <CheckboxContainer direction="column">
      {options.map((option: IdValue, index) => (
          <CheckboxItem key={option.id} >
            <Checkbox
              key={option.value}
              className={handleSelected(values, option)}
              pointEvent={option.value === "Other"}
              onClick={() => handleClick(option)}
            >
              {option.value}
            </Checkbox>
          {option.hasOwnProperty("input") && (
            <CheckboxInput
              key={option.id}
              type="text"
              value={values[index]?.input}
              onInput={(evt: React.ChangeEvent<HTMLInputElement>) =>
                onChangeInput(option, evt)
              }
              placeholder={option.placeholder}
              disabled={option.disabled}
            />
          )}
        </CheckboxItem>
      ))}
    </CheckboxContainer>
  );
};

export default MultipleCheckbox;
