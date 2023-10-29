"use client";

import React from "react";

const PropertyType = ({ filterFunctions }) => {
  const options = [
    { label: "Apartment", defaultChecked: true, value: 1 },
    { label: "Villa", value: 2 },
    { label: "Townhouse", value: 3 },
    { label: "Office Space", value: 26 },
    { label: "Penthouse", value: 4 },
  ];

  return (
    <>
      <label className="custom_checkbox">
        All
        <input
          type="checkbox"
          checked={!filterFunctions?.propertyTypes.length}
          onChange={(e) => {
            filterFunctions?.setPropertyTypes([]);
            filterFunctions.setListings([]);
          }}
        />
        <span className="checkmark" />
      </label>
      {options.map((option, index) => (
        <label className="custom_checkbox" key={index}>
          {option.label}
          <input
            type="checkbox"
            checked={filterFunctions?.propertyTypes.includes(option.value)}
            onChange={(e) => {
              filterFunctions.handlepropertyTypes(option.value);
              filterFunctions.setListings([]);
            }}
          />
          <span className="checkmark" />
        </label>
      ))}
    </>
  );
};

export default PropertyType;
