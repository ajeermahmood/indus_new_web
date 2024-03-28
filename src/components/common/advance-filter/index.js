"use client";
import Select from "react-select";
import PriceRange from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import { useRouter } from "next/navigation";
import Locations from "../../../data/locations";
import { useState } from "react";

const AdvanceFilterModal = ({ listingStatus }) => {
  const router = useRouter();
  const catOptions = [
    { label: "All", defaultChecked: true, value: "All" },
    { label: "Apartment", value: 1 },
    { label: "Villa", value: 2 },
    { label: "Townhouse", value: 3 },
    { label: "Office Space", value: 26 },
    { label: "Penthouse", value: 4 },
  ];

  const [propertyType, setPropertyType] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 40000000]);
  const [bedrooms, setBedrooms] = useState(-1);
  const [bathrooms, setBathroms] = useState(0);
  const [location, setLocation] = useState("0");
  const [squirefeet, setSquirefeet] = useState([]);
  const [categories, setCategories] = useState([]);

  const handlecategories = (elm) => {
    if (elm == "All") {
      setCategories([]);
    } else {
      setCategories((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };

  const searchSubmit = () => {
    router.push(
      `/search-results?st=${listingStatus}&t=${propertyType}&pr=${priceRange}&bd=${bedrooms}&bth=${bathrooms}&lc=${location}&sq=${squirefeet}&ct=${categories}`
    );
  };

  const filterFunctions = {
    setPropertyType,
    setPriceRange,
    setBedrooms,
    setBathroms,
    setLocation,
    setSquirefeet,
    handlecategories,
    priceRange,
    bedrooms,
    bathrooms,
    categories,
  };

  const resetFilter = () => {
    setPropertyType("All");
    setPriceRange([0, 40000000]);
    setBedrooms(-1);
    setBathroms(0);
    setLocation("0");
    setSquirefeet([]);
    setCategories([]);
    document.querySelectorAll(".filterSelect").forEach(function (element) {
      element.value = "All Cities";
    });

    document.querySelectorAll(".filterInput").forEach(function (element) {
      element.value = null;
    });
  };

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
          <p className="modal-title" id="exampleModalLabel">
            More Filter
          </p>
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
                <p className="list-title mb20">Price Range</p>
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
                <p className="list-title">Type</p>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[catOptions[0]]}
                    onChange={(e) => {
                      if (e.value == "All") {
                        setPropertyType("All");
                      } else {
                        setPropertyType(e.value);
                      }
                    }}
                    name="colors"
                    options={catOptions}
                    styles={customStyles}
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
                <p className="list-title">Reference ID</p>
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
                <p className="list-title">Bedrooms</p>
                <div className="d-flex">
                  <Bedroom filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <p className="list-title">Bathrooms</p>
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
                <p className="list-title">Location</p>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[Locations[0]]}
                    name="colors"
                    styles={customStyles}
                    options={Locations}
                    className="select-custom"
                    classNamePrefix="select"
                    required
                    value={{
                      value: location,
                      label: Locations.find((l) => l.value == location).label,
                    }}
                    onChange={(e) => {
                      setLocation(e.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <p className="list-title">Square Feet</p>
                <div className="space-area">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-style1">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Min."
                        onChange={(e) =>
                          setSquirefeet([
                            e.target.value,
                            document.getElementById("maxFeet3").value / 1,
                          ])
                        }
                        id="minFeet3"
                      />
                    </div>
                    <span className="dark-color">-</span>
                    <div className="form-style1">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Max"
                        onChange={(e) =>
                          setSquirefeet([
                            document.getElementById("minFeet3").value / 1,
                            e.target.value,
                          ])
                        }
                        id="maxFeet3"
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
              <p className="list-title mb10">Amenities</p>
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
              resetFilter();
            }}
          >
            <span className="flaticon-turn-back" />
            <u>Reset all filters</u>
          </button>
          <div className="btn-area">
            <button
              data-bs-dismiss="modal"
              type="submit"
              className="ud-btn btn-thm"
              onClick={() => searchSubmit()}
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
