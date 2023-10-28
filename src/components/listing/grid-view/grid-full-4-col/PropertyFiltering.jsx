"use client";

// import listings from "@/data/listings";
import React, { useState, useEffect } from "react";
import ListingSidebar from "../../sidebar";
import AdvanceFilterModal from "@/components/common/advance-filter-two";
import TopFilterBar from "./TopFilterBar";
import FeaturedListings from "./FeatuerdListings";
import { getAllListingsPagination } from "@/api/listings";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

export default function PropertyFiltering() {
  const [listings, setListings] = useState([]);
  const [listingsCount, setListingsCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingStatus, setListingStatus] = useState("All");
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 40000000]);
  const [priceRangeSetted, setPriceRangeSetted] = useState(1);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathroms, setBathroms] = useState(0);
  useEffect(() => {
    getAllListingsPagination(12, currentPage, {
      status: listingStatus,
      prop_types: propertyTypes,
      price_range: priceRange,
      beds: bedrooms,
      baths: bathroms,
      location: location,
      sqft_range: squirefeet,
      features: categories,
    }).then((res) => {
      setListings(res.listings);
      setListingsCount(res.count);

      console.log(res);
    });
  }, [
    currentPage,
    listingStatus,
    propertyTypes,
    priceRangeSetted,
    bedrooms,
    bathroms,
  ]);

  const [filteredData, setFilteredData] = useState([]);

  const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

  const [sortedFilteredData, setSortedFilteredData] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [colstyle, setColstyle] = useState(false);
  const [pageItems, setPageItems] = useState([]);
  const [pageContentTrac, setPageContentTrac] = useState([]);

  useEffect(() => {
    setPageItems(sortedFilteredData);
    setPageContentTrac([
      (pageNumber - 1) * 12 + 1,
      pageNumber * 12,
      sortedFilteredData.length,
    ]);
  }, [pageNumber, sortedFilteredData]);

  const [location, setLocation] = useState("All Cities");
  const [squirefeet, setSquirefeet] = useState([]);
  const [yearBuild, setyearBuild] = useState([]);
  const [categories, setCategories] = useState([]);

  const resetFilter = () => {
    setListingStatus("All");
    setPropertyTypes([]);
    setPriceRange([0, 40000000]);
    setBedrooms(0);
    setBathroms(0);
    setLocation("All Cities");
    setSquirefeet([]);
    setyearBuild([0, 2050]);
    setCategories([]);
    setCurrentSortingOption("Newest");
    document.querySelectorAll(".filterInput").forEach(function (element) {
      element.value = null;
    });

    document.querySelectorAll(".filterSelect").forEach(function (element) {
      element.value = "All Cities";
    });
  };

  const handlelistingStatus = (elm) => {
    setListingStatus((pre) => (pre == elm ? "All" : elm));
  };

  const handlepropertyTypes = (elm) => {
    if (elm == "All") {
      setPropertyTypes([]);
    } else {
      setPropertyTypes((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };
  const handlepriceRange = (elm) => {
    setPriceRange(elm);
  };
  const handlebedrooms = (elm) => {
    setBedrooms(elm);
  };
  const handlebathroms = (elm) => {
    setBathroms(elm);
  };
  const handlelocation = (elm) => {
    console.log(elm);
    setLocation(elm);
  };
  const handlesquirefeet = (elm) => {
    setSquirefeet(elm);
  };
  const handleyearBuild = (elm) => {
    setyearBuild(elm);
  };
  const handlecategories = (elm) => {
    if (elm == "All") {
      setCategories([]);
    } else {
      setCategories((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };
  const filterFunctions = {
    handlelistingStatus,
    handlepropertyTypes,
    handlepriceRange,
    handlebedrooms,
    handlebathroms,
    handlelocation,
    handlesquirefeet,
    handleyearBuild,
    handlecategories,
    priceRange,
    listingStatus,
    propertyTypes,
    resetFilter,

    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    setPropertyTypes,
    setListings,
    setPriceRangeSetted,
    priceRangeSetted,
  };

  useEffect(() => {
    // const refItems = listings.filter((elm) => {
    //   if (listingStatus == "All") {
    //     return true;
    //   } else if (listingStatus == "Buy") {
    //     return elm.property_category_id == "2";
    //   } else if (listingStatus == "Rent") {
    //     return elm.property_category_id == "1";
    //   }
    // });
    // let filteredArrays = [];
    // // if (propertyTypes.length > 0) {
    // //   const filtered = refItems.filter((elm) =>
    // //     propertyTypes.includes(elm.property_type_name)
    // //   );
    // //   filteredArrays = [...filteredArrays, filtered];
    // // }
    // filteredArrays = [
    //   ...filteredArrays,
    //   refItems.filter((el) => Number(el.property_bedrooms) >= bedrooms),
    // ];
    // filteredArrays = [
    //   ...filteredArrays,
    //   refItems.filter((el) => Number(el.property_bathrooms) >= bathroms),
    // ];
    // // filteredArrays = [
    // //   ...filteredArrays,
    // //   !categories.length
    // //     ? [...refItems]
    // //     : refItems.filter((elm) =>
    // //         categories.every((elem) => elm.features.includes(elem))
    // //       ),
    // // ];
    // // if (location != "All Cities") {
    // //   filteredArrays = [
    // //     ...filteredArrays,
    // //     refItems.filter((el) => el.city == location),
    // //   ];
    // // }
    // if (priceRange.length > 0) {
    //   const filtered = refItems.filter(
    //     (elm) =>
    //       Number(elm.property_price) >= priceRange[0] &&
    //       Number(elm.property_price) <= priceRange[1]
    //   );
    //   filteredArrays = [...filteredArrays, filtered];
    // }
    // if (squirefeet.length > 0 && squirefeet[1]) {
    //   const filtered = refItems.filter(
    //     (elm) =>
    //       Number(elm.property_size) >= squirefeet[0] &&
    //       Number(elm.property_size) <= squirefeet[1]
    //   );
    //   filteredArrays = [...filteredArrays, filtered];
    // }
    // if (yearBuild.length > 0) {
    //   const filtered = refItems.filter(
    //     (elm) =>
    //       elm.yearBuilding >= yearBuild[0] && elm.yearBuilding <= yearBuild[1]
    //   );
    //   filteredArrays = [...filteredArrays, filtered];
    // }
    // const commonItems = refItems.filter((item) =>
    //   filteredArrays.every((array) => array.includes(item))
    // );
    // setFilteredData(commonItems);
  }, [
    listingStatus,
    propertyTypes,
    priceRange,
    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    listings,
  ]);

  useEffect(() => {
    setPageNumber(1);
    // if (currentSortingOption == "Newest") {
    //   const sorted = [...filteredData].sort(
    //     (a, b) =>
    //       new Date(a.property_last_updated).getTime() -
    //       Date(b.property_last_updated).getTime()
    //   );
    //   setSortedFilteredData(sorted);
    // } else if (currentSortingOption.trim() == "Price Low") {
    //   const sorted = [...filteredData].sort(
    //     (a, b) => Number(a.property_price) - Number(b.property_price)
    //   );
    //   setSortedFilteredData(sorted);
    // } else if (currentSortingOption.trim() == "Price High") {
    //   const sorted = [...filteredData].sort(
    //     (a, b) => Number(b.property_price) - Number(a.property_price)
    //   );
    //   setSortedFilteredData(sorted);
    // } else {
    //   setSortedFilteredData(filteredData);
    // }
  }, [filteredData, currentSortingOption]);
  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="container">
        {/* start mobile filter sidebar */}
        <div
          className="offcanvas offcanvas-start p-0"
          tabIndex="-1"
          id="listingSidebarFilter"
          aria-labelledby="listingSidebarFilterLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="listingSidebarFilterLabel">
              Listing Filter
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-0">
            <ListingSidebar filterFunctions={filterFunctions} />
          </div>
        </div>
        {/* End mobile filter sidebar */}

        {/* <!-- Advance Feature Modal Start --> */}
        <div className="advance-feature-modal">
          <div
            className="modal fade"
            id="advanceSeachModal"
            tabIndex={-1}
            aria-labelledby="advanceSeachModalLabel"
            aria-hidden="true"
          >
            <AdvanceFilterModal filterFunctions={filterFunctions} />
          </div>
        </div>
        {/* <!-- Advance Feature Modal End --> */}

        <div className="row">
          <TopFilterBar
            pageContentTrac={pageContentTrac}
            colstyle={colstyle}
            setColstyle={setColstyle}
            filterFunctions={filterFunctions}
            setCurrentSortingOption={setCurrentSortingOption}
          />
        </div>
        {/* End TopFilterBar */}

        <div className="row">
          <FeaturedListings colstyle={colstyle} data={listings} />
        </div>
        {/* End .row */}

        <div className="row mt50 justify-content-center">
          <Stack alignItems="center">
            <Pagination
              count={Math.ceil(listingsCount / 12)}
              variant="outlined"
              shape="rounded"
              onChange={(event, value) => {
                setListings([]);
                setCurrentPage(value);
              }}
            />
            <span className="mt10">
              <b>{listings.length}</b> Listings from - <b>{listingsCount}</b> -
              Total Listings
            </span>
          </Stack>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
}
