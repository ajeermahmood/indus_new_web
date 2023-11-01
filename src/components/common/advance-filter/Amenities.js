"use client"
import AmentiesData from "../../../data/amenties";
const Amenities = ({ filterFunctions }) => {
  return (
    <>
      {AmentiesData.map((amenity, columnIndex) => (
        <div className="col-sm-4" key={columnIndex}>
          <div className="widget-wrapper mb20">
            <div className="checkbox-style1">
              <label className="custom_checkbox">
                {amenity.label}
                <input
                  type="checkbox"
                  checked={filterFunctions?.categories.includes(amenity.value)}
                  onChange={() => {
                    filterFunctions?.handlecategories(amenity.value);
                  }}
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
