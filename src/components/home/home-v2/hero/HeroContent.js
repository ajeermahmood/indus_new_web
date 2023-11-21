"use client";
import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { useRouter } from "next/navigation";

const HeroContent = ({ activeTab, setActiveTab }) => {
  const router = useRouter();
  const [propertyType, setPropertyType] = useState("All");
  const [search, setSearch] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: "all", label: "All" },
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
  ];

  return (
    <div className="advance-style2 mt80 mt0-md mb60 mx-auto">
      <ul className="nav nav-tabs p-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link text-dark ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style2">
              <div className="row align-items-center justify-content-start justify-content-md-center">
                <div className="col-md-5 col-lg-6">
                  <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm bb1-sm">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon flaticon-home-1" />
                        <input
                          className="form-control "
                          type="text"
                          name="search"
                          placeholder={`Search Properties for ${tab.label}`}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-md-6 */}

                <div className="col-md-3 col-lg-3 ps-md-0">
                  <div className="bdrr1 bdrrn-sm pe-0 pe-lg-3 bb1-sm">
                    <div className="bootselect-multiselect">
                      <SelectDropdown setPropertyType={setPropertyType} />
                    </div>
                  </div>
                </div>
                {/* End .col-md-3 */}

                <div className="col-md-4 col-lg-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" /> Advanced
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      type="button"
                      onClick={() =>
                        router.push(
                          `/search-results?se=${search}&st=${activeTab}&t=${propertyType}`
                        )
                      }
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
                {/* End .col-md-64 */}
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      {/* End tab-content */}
    </div>
  );
};

export default HeroContent;
