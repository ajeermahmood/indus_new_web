"use client";
import Select from "react-select";
import Locations from "@/data/locations";

const Location = ({ filterFunctions }) => {
  const locationOptions = [
    { value: "All Cities", label: "All Cities" },
    { value: "California", label: "California" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "New Jersey", label: "New Jersey" },
    { value: "New York", label: "New York" },
    { value: "San Diego", label: "San Diego" },
    { value: "San Francisco", label: "San Francisco" },
    { value: "Texas", label: "Texas" },
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
