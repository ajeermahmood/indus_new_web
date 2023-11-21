"use client";

import { Skeleton, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle, loading }) => {
  const skeletonLoader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  return (
    <>
      {!loading && data.length == 0 ? (
        <div className="col w-100 mt60">
          <div className="row justify-content-center">
            <Image
              src="/images/svg/no-data.svg"
              width={200}
              height={200}
              className="mb3"
              alt="no-data"
            />
          </div>

          <p className="text-center mb60">
            <b>Sorry, No Listings Available!</b>
          </p>
        </div>
      ) : (
        <></>
      )}
      {loading
        ? skeletonLoader.map((sk) => (
            <div
              className={` ${
                colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4 col-xl-3"
              }  `}
              key={sk.id}
            >
              <div
                className={
                  colstyle
                    ? "listing-style1 listCustom listing-type"
                    : "listing-style1"
                }
              >
                <div className="list-thumb">
                  <Skeleton
                    // className="w-100 h-100"
                    variant="rectangular"
                    className="w-100 cover"
                    width={382}
                    height={185}
                  />
                </div>
                <div className="list-content">
                  <Skeleton variant="rectangular" width={200} height={20} />
                  <Skeleton
                    className="mt-2"
                    variant="rectangular"
                    width={180}
                    height={15}
                  />
                  <div className="list-meta mt-2 d-flex align-items-center">
                    <a href="#" className="mr10">
                      <Skeleton variant="rectangular" width={30} height={20} />
                    </a>
                    <a href="#" className="mr10">
                      <Skeleton variant="rectangular" width={30} height={20} />
                    </a>
                    <a href="#">
                      <Skeleton variant="rectangular" width={30} height={20} />
                    </a>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div className="list-meta2 d-flex justify-content-between align-items-center">
                    <Skeleton variant="rectangular" width={60} height={20} />
                    <div className="icons d-flex align-items-center">
                      <a href="#" className="mr10">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={30}
                        />
                      </a>
                      <a href="#" className="mr10">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : data.map((listing) => (
            <div
              className={` ${
                colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4 col-xl-3"
              }  `}
              key={listing.id}
            >
              <div
                className={
                  colstyle
                    ? "listing-style1 listCustom listing-type"
                    : "listing-style1"
                }
              >
                <div className="list-thumb">
                  <Image
                    width={382}
                    height={248}
                    style={{ height: "200px" }}
                    className="w-100 cover"
                    src={listing.dp_1}
                    alt="listings"
                  />
                  <div className="sale-sticker-wrap">
                    <div className="list-tag fz12">
                      {listing.property_category_id == "1" ? "RENT" : "SALE"}
                    </div>
                  </div>

                  <div className="list-price">
                    {currencyFormatter.format(listing.property_price)}{" "}
                    {listing.property_category_id == "1" ? (
                      <span>/ mo</span>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Tooltip title={listing.property_title}>
                      <Link
                        href={`/property/${listing.property_id}`}
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          display: "block",
                          maxWidth: "18rem",
                        }}
                      >
                        {listing.property_title}
                      </Link>
                    </Tooltip>
                  </h6>

                  <p
                    className="list-text"
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      display: "block",
                      maxWidth: "18rem",
                    }}
                  >
                    {listing.location_sub_name != ""
                      ? listing.location_sub_name + ", "
                      : ""}
                    {listing.location_name}
                  </p>
                  <div className="list-meta d-flex align-items-center">
                    <a href="#">
                      <span className="flaticon-bed" />{" "}
                      {listing.property_bedrooms != "-1"
                        ? listing.property_bedrooms
                        : "Studio"}
                    </a>
                    <a href="#">
                      <span className="flaticon-shower" />{" "}
                      {listing.property_bathrooms}
                    </a>
                    <a href="#">
                      <span className="flaticon-expand" />{" "}
                      {listing.property_size}
                    </a>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div className="list-meta2 d-flex justify-content-between align-items-center">
                    <span className="for-what">
                      {currencyFormatter.format(listing.property_price)}{" "}
                      {listing.property_category_id == "1" ? (
                        <span>/ mo</span>
                      ) : (
                        <></>
                      )}
                    </span>
                    <div className="icons d-flex align-items-center">
                      <a href="#">
                        <span className="flaticon-fullscreen" />
                      </a>
                      <a href="#">
                        <span className="flaticon-new-tab" />
                      </a>
                      {/* <a href="#">
                        <span className="flaticon-like" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default FeaturedListings;
