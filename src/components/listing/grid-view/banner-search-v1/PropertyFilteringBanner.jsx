"use client";

import { getAllPropertiesSearch } from "@/api/listings";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import FeaturedListings from "./FeatuerdListings";
import MortgageCalculator from "./MortgageCalculator";
import TopFilterBar from "./TopFilterBar";
import Hero from "./hero";
import { useSearchParams } from "next/navigation";

export default function PropertyFilteringBanner() {
  // params
  const searchParams = useSearchParams();
  const search_query_param = searchParams.get("se");
  const property_status_param = searchParams.get("st");
  const property_type_param = searchParams.get("t");
  const price_range_param = searchParams.get("pr");
  const bedrooms_param = searchParams.get("bd");
  const bathrooms_param = searchParams.get("bth");
  const location_param = searchParams.get("lc");
  const square_feet_param = searchParams.get("sq");
  const amenties_param = searchParams.get("ct");

  const getPropStatus = (id) => {
    switch (id) {
      case "all":
        return "All";
      case "buy":
        return "Sale";
      case "buy":
        return "Rent";
      default:
        break;
    }
  };
  // params end
  const [listings, setListings] = useState([]);
  const [listingsCount, setListingsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingStatus, setListingStatus] = useState(
    property_status_param != "" && property_status_param != null
      ? getPropStatus(property_status_param)
      : "All"
  );
  const [propertyTypes, setPropertyTypes] = useState(
    property_type_param != "" &&
      property_type_param != "All" &&
      property_type_param != null
      ? [property_type_param]
      : []
  );
  const [priceRange, setPriceRange] = useState(
    price_range_param != "" && price_range_param != null
      ? [
          Number(price_range_param.split(",")[0]),
          Number(price_range_param.split(",")[1]),
        ]
      : [0, 40000000]
  );
  const [priceRangeSetted, setPriceRangeSetted] = useState(1);
  const [bedrooms, setBedrooms] = useState(
    bedrooms_param != "" && bedrooms_param != null ? Number(bedrooms_param) : -1
  );
  const [bathroms, setBathroms] = useState(
    bathrooms_param != "" && bathrooms_param != null
      ? Number(bathrooms_param)
      : 0
  );

  const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

  const [colstyle, setColstyle] = useState(false);

  const [location, setLocation] = useState(
    location_param != "" && location_param != null ? location_param : "0"
  );
  const [squirefeet, setSquirefeet] = useState(
    square_feet_param != "" && price_range_param != null
      ? [
          Number(square_feet_param.split(",")[0]),
          Number(square_feet_param.split(",")[1]),
        ]
      : []
  );
  const [yearBuild, setyearBuild] = useState([]);
  const [categories, setCategories] = useState(
    amenties_param != "" && amenties_param != null
      ? amenties_param.split(",")
      : []
  );

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(
    search_query_param != "" && search_query_param != null
      ? search_query_param
      : ""
  );
  useEffect(() => {
    setLoading(true);
    getAllPropertiesSearch(
      8,
      currentPage,
      {
        status: listingStatus,
        prop_types: propertyTypes,
        price_range: priceRange,
        beds: bedrooms,
        baths: bathroms,
        location: location,
        sqft_range: squirefeet,
        features: categories,
        sort: currentSortingOption,
      },
      searchQuery
    )
      .then((res) => {
        setListings(res.listings);
        setListingsCount(res.count);
        console.log(res);
      })
      .finally(() => setLoading(false));
  }, [
    currentPage,
    listingStatus,
    propertyTypes,
    priceRangeSetted,
    bedrooms,
    bathroms,
    location,
    squirefeet,
    categories,
    currentSortingOption,
    searchQuery,
  ]);

  const resetFilter = () => {
    setListingStatus("All");
    setPropertyTypes([]);
    setPriceRange([0, 40000000]);
    setBedrooms(0);
    setBathroms(0);
    setLocation("0");
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
  const handleTabClick = (elm) => {
    setListingStatus(elm);
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
    setCurrentSortingOption,
    priceRangeSetted,
    setSearchQuery,
    handleTabClick,
    listingStatus,
    listingsCount,
    searchQuery,
  };

  return (
    <>
      {/* Home Banner Style V1 */}
      <section className="property-banner-style1 p-0">
        <div className="inner-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <Hero filterFunctions={filterFunctions} />
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V1 */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Search Results</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Search</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <section className="pt0 pb90 bgc-f7">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-4">
              <div className="list-sidebar-style1">
                <div className="widget-wrapper">
                  <h6 className="list-title">Mortgage Calculator</h6>
                  <MortgageCalculator />
                </div>
                {/* End widget-wrapper */}
              </div>
              {/* End .list-sidebar-style1 */}

              {/* <div className="list-sidebar-style1">
                <div className="widget-wrapper">
                  <h6 className="list-title">Recently Viewed</h6>
                  <RecentProperty />
                </div>
              </div> */}
              {/* End .list-sidebar-style1 */}
            </div>
            {/* End col-4 */}

            <div className="col-lg-8">
              <div className="row align-items-center mb20">
                <TopFilterBar
                  colstyle={colstyle}
                  setColstyle={setColstyle}
                  setCurrentSortingOption={setCurrentSortingOption}
                  itemsCount={listingsCount}
                  currentItemsCount={listings.length}
                />
              </div>
              <div className="row mt15">
                <FeaturedListings
                  colstyle={colstyle}
                  data={listings}
                  loading={loading}
                />
              </div>
              {/* End .row */}

              <div className="row text-center">
                <Stack alignItems="center">
                  <Pagination
                    count={Math.ceil(listingsCount / 8)}
                    variant="outlined"
                    shape="rounded"
                    onChange={(event, value) => {
                      setListings([]);
                      setCurrentPage(value);
                    }}
                  />
                  <span className="mt10">
                    <b>{listings.length}</b> Listings from total -{" "}
                    <b>{listingsCount}</b> -
                  </span>
                </Stack>
              </div>
              {/* End .row */}
            </div>
            {/* End col-8 */}
          </div>
          {/* End TopFilterBar */}
        </div>
        {/* End .container */}
      </section>
      {/* Property Filtering */}
    </>
  );
}
