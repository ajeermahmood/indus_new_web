"use client";

import { getAllLaunches } from "@/api/listings";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import LaunchesFilter from "./launchesFilter";

export default function LaunchesFilterContainer() {
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [launches, setLaunches] = useState([]);
  const [launchesCount, setLaunchesCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setLoading(true);
    getAllLaunches(9, pageNumber, activeCategory)
      .then((res) => {
        setLaunches(res.launches);
        setLaunchesCount(res.count);
      })
      .finally(() => setLoading(false));
  }, [pageNumber, activeCategory]);
  return (
    <section className="our-blog pt-0">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-12 navpill-style1">
            <LaunchesFilter
              launches={launches}
              loading={loading}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
        </div>
        {/* End .row */}

        <div className="row mt50">
          <Stack alignItems="center">
            <Pagination
              count={Math.ceil(launchesCount / 9)}
              variant="outlined"
              shape="rounded"
              onChange={(event, value) => {
                setPageNumber(value);
              }}
            />
            <span className="mt10">
              <b>{launches.length}</b> Launches from total -{" "}
              <b>{launchesCount}</b> -
            </span>
          </Stack>
        </div>
      </div>
    </section>
  );
}
