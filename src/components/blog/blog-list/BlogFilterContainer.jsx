"use client";

import { getAllBlogs } from "@/api/listings";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import BlogFilter2 from "./BlogFilter";

export default function BlogFilters() {
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [blogsCount, setBlogsCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setLoading(true);
    getAllBlogs(9, pageNumber, activeCategory)
      .then((res) => {
        setBlogs(res.blogs);
        setBlogsCount(res.count);
      })
      .finally(() => setLoading(false));
  }, [pageNumber, activeCategory]);
  return (
    <section className="our-blog pt-0">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-12 navpill-style1">
            <BlogFilter2
              blogs={blogs}
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
              count={Math.ceil(blogsCount / 9)}
              variant="outlined"
              shape="rounded"
              onChange={(event, value) => {
                setPageNumber(value);
              }}
            />
            <span className="mt10">
              <b>{blogs.length}</b> Blogs from total - <b>{blogsCount}</b> -
            </span>
          </Stack>
        </div>
      </div>
    </section>
  );
}
