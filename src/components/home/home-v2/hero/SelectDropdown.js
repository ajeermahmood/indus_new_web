"use client";
import Select from "react-select";

const SelectDropdown = () => {
  const catOptions = [
    { value: "Apartments", label: "Apartments" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Houses", label: "Houses" },
    { value: "Loft", label: "Loft" },
    { value: "Office", label: "Office" },
    { value: "Townhome", label: "Townhome" },
    { value: "Villa", label: "Villa" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#2B4257"
          : isHovered
          ? "#88a9c33b"
          : isFocused
          ? "#88a9c33b"
          : undefined,
      };
    },
  };

  return (
    <>
      <Select
        defaultValue={[catOptions[0]]}
        name="colors"
        options={catOptions}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isSearchable={false}
      />
    </>
  );
};

export default SelectDropdown;
