"use client";
import Select from "react-select";

const SelectDropdown = ({ setPropertyType }) => {
  const catOptions = [
    { label: "All", defaultChecked: true, value: "All" },
    { label: "Apartment", value: 1 },
    { label: "Villa", value: 2 },
    { label: "Townhouse", value: 3 },
    { label: "Office Space", value: 26 },
    { label: "Penthouse", value: 4 },
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
        onChange={(e) => {
          if (e.value == "All") {
            setPropertyType("All");
          } else {
            setPropertyType(e.value);
          }
        }}
      />
    </>
  );
};

export default SelectDropdown;
