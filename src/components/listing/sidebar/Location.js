"use client";
import Locations from "@/data/locations";
import Select from "react-select";

const Location = ({ filterFunctions }) => {

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
    <Select
      defaultValue={[Locations[0]]}
      name="colors"
      styles={customStyles}
      options={Locations}
      value={{
        value: filterFunctions?.location,
        label: Locations.find((l) => l.value == filterFunctions.location).label,
      }}
      className="select-custom filterSelect"
      classNamePrefix="select"
      onChange={(e) => {
        filterFunctions?.setListings([]);
        filterFunctions?.handlelocation(e.value);
      }}
      required
    />
  );
};

export default Location;
