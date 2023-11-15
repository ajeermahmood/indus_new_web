"use client";

import { getAgentPropertiesLimit4 } from "@/api/listings";
import Link from "next/link";
import { useEffect, useState } from "react";
import ListingItems from "../ListingItems";
export default function ListingItemsContainer({ agentId, name }) {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [pageData, setPageData] = useState([]);
  const [allPropsCount, setAllPropsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAgentPropertiesLimit4(agentId, currentCategory)
      .then((res) => {
        setPageData(res.props);
        setAllPropsCount(res.count);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    switch (currentCategory) {
      case "All":
        setLoading(true);
        getAgentPropertiesLimit4(agentId, currentCategory)
          .then((res) => {
            setPageData(res.props);
            setAllPropsCount(res.count);
          })
          .finally(() => setLoading(false));

        break;
      case "rent":
        setLoading(true);
        getAgentPropertiesLimit4(agentId, 1)
          .then((res) => {
            setPageData(res.props);
            setAllPropsCount(res.count);
          })
          .finally(() => setLoading(false));

        break;
      case "sale":
        setLoading(true);
        getAgentPropertiesLimit4(agentId, 2)
          .then((res) => {
            setPageData(res.props);
            setAllPropsCount(res.count);
          })
          .finally(() => setLoading(false));

        break;

      default:
        break;
    }
  }, [currentCategory]);

  return (
    <div className="row align-items-center mt20">
      <div className="col-sm-4">
        {/* <h6 className="fz17">Listing 27</h6> */}
      </div>
      {/* End .col-4 */}

      <div className="col-sm-8">
        <div className="dark-light-navtab style4 mt-0 mt-lg-4 mb30">
          <ul
            className="nav nav-pills justify-content-start justify-content-sm-end"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={
                  currentCategory == "All" ? "nav-link active" : "nav-link"
                }
                onClick={() => setCurrentCategory("All")}
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={
                  currentCategory == "rent" ? "nav-link active" : "nav-link"
                }
                onClick={() => setCurrentCategory("rent")}
              >
                For Rent
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={
                  currentCategory == "sale"
                    ? "nav-link me-0 active"
                    : "nav-link me-0"
                }
                onClick={() => setCurrentCategory("sale")}
              >
                For Sale
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col-8 */}

      <div className="col-lg-12">
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row">
              <ListingItems data={pageData} loading={loading} />
            </div>
          </div>
          {/* End tab-pane */}

          {/* End tab-pane */}
        </div>
        {/* End tab-content */}

        {allPropsCount != 0 ? (
          <div className="d-grid pb30 bdrb1">
            <Link
              href={`/agents-properties?id=${agentId}&name=${name}`}
              className="ud-btn btn-white2"
            >
              Show all {allPropsCount} property
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
