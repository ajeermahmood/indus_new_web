"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

import { getFeaturedListings } from "@/app/api/listings";
import FeaturedListings from "./FeatuerdListings";

export default function PropertyListing() {
  const [pageData, setPageData] = useState([]);
  const [currentType, setCurrentType] = useState("sale");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getFeaturedListings(currentType == "rent" ? 1 : 2)
      .then((response) => {
        if (currentType == "rent") {
          const filtered = response.filter(
            (elm) => elm.property_category_id == "1"
          );
          setPageData(filtered);
        } else {
          const filtered = response.filter(
            (elm) => elm.property_category_id == "2"
          );
          setPageData(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [currentType]);

  return (
    
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="0">
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Discover Popular Properties</h2>
              <p className="paragraph">
                Take a deep dive and Browse All original property collection.
              </p>
            </div>
          </div>
          {/* End .col-lg-9 */}

          <div className="col-lg-3">
            <div className="dark-light-navtab style2 text-start text-lg-end mt-0 mt-lg-4 mb-4">
              <ul
                className="nav nav-pills justify-content-start justify-content-lg-end"
                id="pills-tab"
                role="tablist"
              >
                <li
                  className="nav-item"
                  role="presentation"
                  onClick={() => {
                    setCurrentType("sale");
                    setPageData([]);
                  }}
                >
                  <button
                    className={`nav-link  ${
                      currentType == "sale" ? "active" : ""
                    } `}
                    type="button"
                  >
                    For Sale
                  </button>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  onClick={() => {
                    setCurrentType("rent");
                    setPageData([]);
                  }}
                >
                  <button
                    className={`nav-link me-0 ${
                      currentType == "rent" ? "active" : ""
                    } `}
                    type="button"
                  >
                    For Rent
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* End .col-lg-3 */}
        </div>
        {/* End .row */}

        <div className="row" data-aos="fade-up" data-aos-delay="0">
          <FeaturedListings
            data={pageData}
            type={currentType}
            loading={loading}
          />
        </div>
        {/* End .row */}

        <div className="d-grid d-md-block text-center mt30 mt0-md">
          <Link href="/all-properties" className="ud-btn btn-dark bdrs0">
            View More<i className="fal fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    
  );
}
