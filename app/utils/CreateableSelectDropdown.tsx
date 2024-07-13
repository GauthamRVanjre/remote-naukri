import React, { Dispatch, SetStateAction } from "react";
import CreatableSelect from "react-select/creatable";

export interface Option {
  label: string;
  value: string | boolean;
}

interface CreateableSelectDropdownProps {
  options: Option[];
  isLoading: boolean;
  value: Option | null | undefined;
  setValue: Dispatch<SetStateAction<Option | null | undefined>>;
  placeholder: string;
}

const CreateableSelectDropdown: React.FC<CreateableSelectDropdownProps> = ({
  options,
  isLoading,
  value,
  setValue,
  placeholder,
}) => {
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#fff",
      marginRight: "1rem",
    }),
    option: (
      styles: { [x: string]: any },
      { data, isDisabled, isFocused, isSelected }: any
    ) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#f1f1f1"
          : isFocused
          ? "#f7f7f7"
          : "#fff",
        color: isSelected ? "#000" : styles.color,
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
    singleValue: (styles: any) => ({
      ...styles,
      color: "#000", // Color of the selected option in the input field
    }),
    input: (styles: any) => ({ ...styles, color: "#ccc" }),
    placeholder: (styles: any) => ({ ...styles, color: "#ccc" }),
  };

  return (
    <CreatableSelect
      styles={colourStyles}
      isDisabled={isLoading}
      placeholder={placeholder}
      isClearable
      onChange={(newValue) => setValue(newValue)}
      value={value}
      options={options}
      required
    />
  );
};

export default CreateableSelectDropdown;
