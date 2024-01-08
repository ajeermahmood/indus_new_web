"use client";

import { useEffect, useState } from "react";

import { getAllAchievements } from "@/api/listings";
import { Pagination, Stack } from "@mui/material";
import AllAchievements from "./AllAchievements";
import TopFilter from "./TopFilter";

export default function FilteringAchievements() {
  const [all_ach, setAllAchs] = useState([]);
  const [all_ach_count, setAllAchsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllAchievements(12, currentPage, searchQuery)
      .then((res) => {
        setAllAchs(res.dev);
        setAllAchsCount(res.count);
        console.log(res);
      })
      .finally(() => setLoading(false));
  }, [currentPage, searchQuery]);

  const filterFunctions = {
    setSearchQuery,
    setAllAchs,
  };

  return (
    <section className="our-agents pt-0">
      <div className="container">
        <div className="row align-items-center mb20">
          <TopFilter filterFunctions={filterFunctions} />
        </div>
        {/* End .row */}

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <AllAchievements data={all_ach} loading={loading} />
        </div>
        {/* End .row */}

        <div className="row justify-content-center mt20">
          <Stack alignItems="center">
            <Pagination
              count={Math.ceil(all_ach_count / 12)}
              variant="outlined"
              shape="rounded"
              onChange={(event, value) => {
                setAllAchs([]);
                setCurrentPage(value);
              }}
            />
            <span className="mt10">
              <b>{all_ach.length}</b> Achievements from total -{" "}
              <b>{all_ach_count}</b> -
            </span>
          </Stack>
        </div>
      </div>
    </section>
  );
}
