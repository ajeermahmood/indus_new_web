"use client";
import { getAllVideos } from "@/api/listings";
import { Pagination, Skeleton, Stack } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlogSidebar from "@/components/blog/sidebar";

const Blog = () => {
  const skeletonLoader = [1, 2, 3, 4];
  const [videos, setVideos] = useState([]);
  const [videosCount, setVideosCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllVideos(4, currentPage, searchQuery, filter)
      .then((res) => {
        setVideos(res.video);
        setVideosCount(res.count);
        console.log(res);
      })
      .finally(() => setLoading(false));
  }, [currentPage, searchQuery, filter]);

  const filterFunctions = {
    setSearchQuery,
    setFilter,
    filter,
  };

  return (
    <>
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-8">
            {loading
              ? skeletonLoader.map((item, index) => (
                  <div className="blog-style1 large-size bgc-white" key={index}>
                    <div className="blog-img">
                      <Skeleton
                        variant="rectangular"
                        className="w-100"
                        width={796}
                        height={465}
                      />
                    </div>
                    <div className="blog-content pl30 pb20">
                      <h4 className="title mt-1 mb20">
                        <Skeleton
                          variant="rectangular"
                          width={350}
                          height={30}
                        />
                      </h4>
                    </div>
                  </div>
                ))
              : videos.map((item, index) => (
                  <div className="blog-style1 large-size bgc-white" key={index}>
                    <div className="blog-img">
                      <Image
                        width={796}
                        height={465}
                        priority
                        className="w-100 h-100 cover"
                        src={`https://www.indusre.com/images/videos/${item.video_image}`}
                        alt="blog"
                      />
                    </div>
                    <div className="blog-content pl30 pb20">
                      <h4 className="title mt-1 mb20">
                        <a target="_blank" href={item.video_link}>
                          {item.video_title}
                        </a>
                      </h4>
                    </div>
                  </div>
                ))}
            <div className="row justify-content-center mt60">
              <Stack alignItems="center">
                <Pagination
                  count={Math.ceil(videosCount / 4)}
                  variant="outlined"
                  shape="rounded"
                  onChange={(event, value) => {
                    setCurrentPage(value);
                  }}
                />
                <span className="mt10">
                  <b>{videos.length}</b> videos from total -{" "}
                  <b>{videosCount}</b> -
                </span>
              </Stack>
            </div>
          </div>
          {/* End .col-lg-8 */}

          <div className="col-lg-4">
            <BlogSidebar
              filterFunctions={filterFunctions}
              latestPosts={videos.slice(0, 3)}
            />
          </div>
          {/* End .col-lg-4 */}
        </div>
        {/* End .row */}
      </div>
    </>
  );
};

export default Blog;
