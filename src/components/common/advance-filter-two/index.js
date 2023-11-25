"use client";
import Select from "react-select";
import PriceRange from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import Locations from "@/data/locations";

const AdvanceFilterModal = ({ filterFunctions }) => {
  const catOptions = [
    { label: "All", defaultChecked: true, value: "All" },
    { label: "Apartment", value: 1 },
    { label: "Townhouse", value: 3 },
    { label: "Office Space", value: 26 },
    { label: "Villa", value: 2 },
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
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header pl30 pr30">
          <h5 className="modal-title" id="exampleModalLabel">
            More Filter
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* End modal-header */}

        <div className="modal-body pb-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="widget-wrapper">
                <h6 className="list-title mb20">Price Range</h6>
                <div className="range-slider-style modal-version">
                  <PriceRange filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Type</h6>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={
                      filterFunctions.propertyTypes.length == 0
                        ? [catOptions[0]]
                        : [
                            catOptions.find(
                              (c) => c.value == filterFunctions.propertyTypes
                            ),
                          ]
                    }
                    name="colors"
                    options={catOptions}
                    styles={customStyles}
                    onChange={(e) => {
                      filterFunctions.setListings([]);
                      if (e.value == "All") {
                        filterFunctions?.setPropertyTypes([]);
                      } else {
                        filterFunctions?.setPropertyTypes([e.value]);
                      }
                    }}
                    className="select-custom"
                    classNamePrefix="select"
                    required
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Reference ID</h6>
                <div className="form-style2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RT04949213"
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Bedrooms</h6>
                <div className="d-flex">
                  <Bedroom filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Bathrooms</h6>
                <div className="d-flex">
                  <Bathroom filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Location</h6>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[Locations[0]]}
                    name="colors"
                    styles={customStyles}
                    options={Locations}
                    className="select-custom filterSelect"
                    value={{
                      value: filterFunctions?.location,
                      label: Locations.find(
                        (l) => l.value == filterFunctions.location
                      ).label,
                    }}
                    classNamePrefix="select"
                    onChange={(e) => {
                      filterFunctions?.setListings([]);
                      filterFunctions?.handlelocation(e.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Square Feet</h6>
                <div className="space-area">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-style1">
                      <input
                        type="number"
                        className="form-control filterInput"
                        onChange={(e) =>
                          filterFunctions?.handlesquirefeet([
                            e.target.value,
                            document.getElementById("maxFeet3").value / 1,
                          ])
                        }
                        value={filterFunctions.squirefeet[0]}
                        placeholder="Min."
                        id="minFeet3"
                      />
                    </div>
                    <span className="dark-color">-</span>
                    <div className="form-style1">
                      <input
                        type="number"
                        className="form-control filterInput"
                        placeholder="Max"
                        id="maxFeet3"
                        value={filterFunctions.squirefeet[1]}
                        onChange={(e) =>
                          filterFunctions?.handlesquirefeet([
                            document.getElementById("minFeet3").value / 1,
                            e.target.value,
                          ])
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div className="widget-wrapper mb0">
              <h6 className="list-title mb10">Amenities</h6>
            </div>
          </div>
          <div
            className="row"
            style={{
              maxHeight: "15rem",
              overflow: "auto",
            }}
          >
            <Amenities filterFunctions={filterFunctions} />
          </div>
        </div>
        {/* End modal body */}

        <div className="modal-footer justify-content-between">
          <button
            className="reset-button"
            onClick={() => {
              filterFunctions.setListings([]);
              filterFunctions?.resetFilter();
            }}
          >
            <span className="flaticon-turn-back" />
            <u>Reset all filters</u>
          </button>
          <div className="btn-area">
            <button
              type="submit"
              className="ud-btn btn-thm"
              data-bs-dismiss="modal"
              aria-label="Search"
              onClick={() => {
                filterFunctions.setListings([]);
                filterFunctions.setPriceRangeSetted(
                  filterFunctions.priceRangeSetted + 1
                );
              }}
            >
              <span className="flaticon-search align-text-top pr10" />
              Search
            </button>
          </div>
        </div>
        {/* End modal-footer */}
      </div>
    </div>
  );
};

export default AdvanceFilterModal;
