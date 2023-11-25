"use client";

import { useEffect, useState } from "react";
import TopFilter from "./TopFilter";

import { getAllAgents } from "@/api/listings";
import { Pagination, Stack } from "@mui/material";
import AllAgents from "./agents/AllAgents";
export default function FilteringAgent() {
  const [all_agents, setAllagents] = useState([]);
  const [all_agents_count, setAllagentsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllAgents(16, currentPage, searchQuery)
      .then((res) => {
        setAllagents(res.team);
        setAllagentsCount(res.count);
        // console.log(res);
      })
      .finally(() => setLoading(false));
  }, [currentPage, searchQuery]);

  const filterFunctions = {
    setSearchQuery,
    setAllagents,
  };

  return (
    <section className="our-agents pt-0">
      <div className="container">
        <div className="row align-items-center mb20">
          <TopFilter filterFunctions={filterFunctions} />
        </div>
        {/* End .row */}

        <div
          className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <AllAgents data={all_agents} loading={loading} />
        </div>
        {/* End .row */}

        <div className="row justify-content-center mt20">
          <Stack alignItems="center">
            <Pagination
              count={Math.ceil(all_agents_count / 16)}
              variant="outlined"
              shape="rounded"
              onChange={(event, value) => {
                setAllagents([]);
                setCurrentPage(value);
              }}
            />
            <span className="mt10">
              <b>{all_agents.length}</b> People from total -{" "}
              <b>{all_agents_count}</b> -
            </span>
          </Stack>
        </div>
      </div>
    </section>
  );
}
