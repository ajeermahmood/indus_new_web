import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListingItems = ({ data, loading }) => {
  const skeletonLoader = [1, 2, 3, 4];
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
            <div className="col-md-6" key={sk}>
              <div className="listing-style1">
                <div className="list-thumb">
                  <Skeleton
                    // className="w-100 h-100"
                    variant="rectangular"
                    className="w-100 cover"
                    width={382}
                    height={248}
                  />
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Skeleton variant="rectangular" width={200} height={20} />
                  </h6>
                  <p className="list-text mt-2">
                    <Skeleton variant="rectangular" width={200} height={20} />
                  </p>
                  <div className="list-meta d-flex align-items-center">
                    <a href="#">
                      <Skeleton variant="rectangular" width={30} height={20} />
                    </a>
                    <a href="#">
                      <Skeleton variant="rectangular" width={30} height={20} />
                    </a>
                    <a href="#">
                      <Skeleton variant="rectangular" width={30} height={20} />
                    </a>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div className="list-meta2 d-flex justify-content-between align-items-center">
                    <span className="for-what">
                      <Skeleton variant="rectangular" width={80} height={20} />
                    </span>
                    <div className="icons d-flex align-items-center">
                      <a href="#">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={25}
                        />
                      </a>
                      <a href="#">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={25}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : data?.map((listing) => (
            <div className="col-md-6" key={listing.id}>
              <div className="listing-style1">
                <div className="list-thumb">
                  <Image
                    width={382}
                    height={248}
                    className="w-100 cover"
                    src={listing.dp_1}
                    alt="listings"
                  />

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
                    <Link
                      href={`/property-details/?id=${listing.property_id}`}
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
                      {listing.property_bedrooms}
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
                      {listing.property_category_id == "1"
                        ? "For Rent"
                        : "For Sale"}
                    </span>
                    <div className="icons d-flex align-items-center">
                      <a href="#">
                        <span className="flaticon-fullscreen" />
                      </a>
                      <a href="#">
                        <span className="flaticon-new-tab" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default ListingItems;
