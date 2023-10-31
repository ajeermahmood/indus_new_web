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
                  checked={filterFunctions?.categories.includes(amenity.value)}
                  onChange={() => {
                    filterFunctions?.setListings([]);
                    filterFunctions?.handlecategories(amenity.value);
                  }}
                  type="checkbox"
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
