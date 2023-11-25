"use client";

import { useEffect, useState } from "react";

import { getAllDevelopers } from "@/api/listings";
import TopFilter2 from "./TopFilter2";
import AllAgents from "./agency/AllAgency";
import { Pagination, Stack } from "@mui/material";

export default function FilteringAgency() {
  const [all_devs, setAllDevs] = useState([]);
  const [all_devs_count, setAllDevsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getAllDevelopers(15, currentPage, searchQuery)
      .then((res) => {
        setAllDevs(res.dev);
        setAllDevsCount(res.count);
        console.log(res);
      })
      .finally(() => setLoading(false));
  }, [currentPage, searchQuery]);

  const filterFunctions = {
    setSearchQuery,
    setAllDevs,
  };

  return (
    <section className="our-agents pt-0">
      <div className="container">
        <div className="row align-items-center mb20">
          <TopFilter2 filterFunctions={filterFunctions} />
        </div>
        {/* End .row */}

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <AllAgents data={all_devs} loading={loading} />
        </div>
        {/* End .row */}

        <div className="row justify-content-center mt20">
          <Stack alignItems="center">
            <Pagination
              count={Math.ceil(all_devs_count / 15)}
              variant="outlined"
              shape="rounded"
              onChange={(event, value) => {
                setAllDevs([]);
                setCurrentPage(value);
              }}
            />
            <span className="mt10">
              <b>{all_devs.length}</b> Developers from total -{" "}
              <b>{all_devs_count}</b> -
            </span>
          </Stack>
        </div>
      </div>
    </section>
  );
}
