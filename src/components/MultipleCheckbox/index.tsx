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
  // onChange?: (value: IdValue, type: string) => void
  // onChangeOther?: (value: string) => void
  // direction?: 'row' | 'column'
  // other?: string,
  // placeholder?:string
  // isCeiling?: boolean
  // disabled?: boolean
  // setDisabled?:(value:boolean) => void
}

const MultipleCheckbox: React.FC<MultipleSelectProps> = ({
  options,
  values
}: MultipleSelectProps) => {
  function handleClick(item: any) {
    onChange && onChange(item, "item");
    if (item.value === "Other") {
      setDisabled(!disabled);
      if (!disabled) {
        setValue("");
        onChangeOther && onChangeOther("");
      }
    }
  }

  function handleSelected(values: any, item: any) {
    const itemFindIt = values.filter((val: any) => val.id === item.id);
    return itemFindIt.length ? "selected" : "";
  }

  return (
    <CheckboxContainer direction="column">
      {options.map((option: IdValue) => (
        <>
          <CheckboxItem key={option.id}>
            <Checkbox
              key={option.value}
              className={handleSelected(values, option)}
              pointEvent={option.value === "Other"}
            >
              {option.value}
            </Checkbox>
          </CheckboxItem>
          {option.hasOwnProperty("input") && (
            <CheckboxInput
              key={option.id}
              type="text"
              value={option.input}
              placeholder={option.placeholder}
              disabled={option.disabled}
            />
          )}
        </>
      ))}
    </CheckboxContainer>
  );
};

export default MultipleCheckbox;
