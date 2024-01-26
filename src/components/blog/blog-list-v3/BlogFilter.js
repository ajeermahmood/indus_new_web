"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BlogFilter = ({ blogs, loading, setActiveCategory, activeCategory }) => {
  const skeletonLoader = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const categories = [
    { label: "All", value: "All" },
    { label: "Dubai Real Estate Market", value: "real estate" },
    { label: "Life & Style", value: "life" },
    { label: "Investments", value: "investments" },
    { label: "Selling a Home", value: "sell" },
    { label: "Renting a Home", value: "rent" },
    { label: "Buying a Home", value: "buy" },
  ];
  return (
    <>
      <ul className="nav nav-pills mb20">
        {categories.map((category, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <button
              className={`nav-link mb-2 mb-lg-0 fw500 dark-color ${
                category.value === activeCategory ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
      {/* End nav */}

      {!loading && blogs.length == 0 ? (
        <div className="col w-100 mt60">
          <div className="row justify-content-center">
            <Image
              src="https://indusspeciality.com/api/assets/images/svg/no-data.svg"
              width={200}
              height={200}
              className="mb3"
              alt="no-data"
            />
          </div>

          <p className="text-center mb60">
            <b>Sorry, No Related News Available!</b>
          </p>
        </div>
      ) : (
        <></>
      )}

      <div className="row mt50">
        {loading
          ? skeletonLoader.map((sk) => (
              <div className="col-sm-6 col-lg-4" key={sk}>
                <div className="blog-style1">
                  <div className="blog-img">
                    <Skeleton
                      // className="w-100 h-100"
                      variant="rectangular"
                      width={386}
                      height={250}
                    />
                  </div>
                  <div className="blog-content">
                    <div className="date"></div>
                    <a className="tag" href="#">
                      <Skeleton variant="rectangular" width={200} height={17} />
                    </a>
                    <h6 className="title mt-2">
                      <Skeleton variant="rectangular" width={300} height={25} />
                    </h6>
                  </div>
                </div>
              </div>
            ))
          : blogs.map((blog) => (
              <div className="col-sm-6 col-lg-4" key={blog.news_id}>
                <div className="blog-style1">
                  <div
                    className="blog-img"
                    style={{
                      height: "14rem",
                    }}
                  >
                    <Image
                      width={386}
                      height={271}
                      className="w-100 h-100 cover"
                      src={`https://www.indusre.com/newsimg/${blog.news_thumbnail}`}
                      alt="blog"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="date">
                      <span className="month">
                        {new Date(blog.news_date).toDateString().split(" ")[1]}
                      </span>
                      <span className="day">
                        {new Date(blog.news_date).toDateString().split(" ")[2]}
                      </span>
                    </div>
                    <a className="tag" href="#">
                      Indus Real Estate LLC
                    </a>
                    <h6 className="title mt-1">
                      <Link href={`/news/${blog.news_id}`}>
                        {blog.news_title}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default BlogFilter;
