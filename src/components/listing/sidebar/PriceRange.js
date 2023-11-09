"use client";
import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = ({ filterFunctions }) => {
  const [price, setPrice] = useState({ value: { min: 2000, max: 40000000 } });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });

    filterFunctions?.handlepriceRange([value.min || 0, value.max]);
  };

  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <div className="range-wrapper">
        <div className="w95">
          <InputRange
            formatLabel={() => ``}
            maxValue={40000000}
            minValue={2000}
            value={{
              min: filterFunctions?.priceRange[0],
              max: filterFunctions?.priceRange[1],
            }}
            onChange={(value) => handleOnChange(value)}
            id="slider"
          />
        </div>
        <div className="d-flex align-items-center">
          <span id="slider-range-value1">
            {currencyFormatter.format(price.value.min)}
          </span>
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
          <span id="slider-range-value2">
            {currencyFormatter.format(price.value.max)}
          </span>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
