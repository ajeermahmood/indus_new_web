"use client";

import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FeaturedListings = ({ data, colstyle, loading }) => {
  const router = useRouter();
  const skeletonLoader = [1, 2, 3, 4, 5, 6, 7, 8];
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
              src="https://indusspeciality.com/api/assets/images/svg/no-data.svg"
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
              className={` ${colstyle ? "col-sm-12" : "col-sm-6"}  `}
              key={sk}
            >
              <div
                className={
                  colstyle
                    ? "listing-style7 listCustom listing-type"
                    : "listing-style7"
                }
              >
                <div className="list-thumb">
                  <Skeleton
                    // className="w-100 h-100"
                    variant="rectangular"
                    style={{ height: "228px" }}
                    className="w-100  cover"
                    width={382}
                    height={248}
                  />

                  {/* <div className="sale-sticker-wrap">
                    <div className="list-tag2 rounded-0 fz12">FOR SALE</div>
                  </div> */}
                  <div className="list-meta">
                    <a href="#" className="mr5">
                      <span className="flaticon-fullscreen" />
                    </a>
                    <a href="#" className="mr5">
                      <span className="flaticon-new-tab" />
                    </a>
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Skeleton variant="rectangular" width={200} height={20} />
                  </h6>

                  <div className="d-flex justify-content-between align-items-center">
                    <Skeleton variant="rectangular" width={100} height={20} />
                    <div className="list-meta2 d-flex align-items-center">
                      <a href="#" className="mr10">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={20}
                        />
                      </a>
                      <a href="#" className="mr10">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={20}
                        />
                      </a>
                      <a href="#">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={20}
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
              className={` ${colstyle ? "col-sm-12" : "col-sm-6"}  `}
              key={listing.id}
            >
              <div
                className={
                  colstyle
                    ? "listing-style7 listCustom listing-type"
                    : "listing-style7"
                }
                onClick={() => router.push(`/property/${listing.property_id}`)}
              >
                <div className="list-thumb">
                  <Image
                    width={382}
                    height={248}
                    style={{ height: "228px" }}
                    className="w-100  cover"
                    src={listing.dp_1}
                    alt="listings"
                  />
                  <div className="sale-sticker-wrap">
                    <div className="list-tag2 rounded-0 fz12">
                      {listing.property_category_id == "1"
                        ? "FOR RENT"
                        : "FOR SALE"}
                    </div>
                  </div>
                  <div className="list-meta">
                    <a href="#" className="mr5">
                      <span className="flaticon-fullscreen" />
                    </a>
                    <a href="#" className="mr5">
                      <span className="flaticon-new-tab" />
                    </a>
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
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
                  </h6>
                  <p
                    className="list-text mb-2"
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

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="list-price">
                      {currencyFormatter.format(listing.property_price)}{" "}
                      {listing.property_category_id == "1" ? (
                        <span>/ mo</span>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="list-meta2 d-flex align-items-center">
                      <a href="#" className="mr10">
                        <span className="flaticon-bed mr5" />{" "}
                        {listing.property_bedrooms != "-1"
                          ? listing.property_bedrooms
                          : "Studio"}
                      </a>
                      <a href="#" className="mr10">
                        <span className="flaticon-shower mr5" />{" "}
                        {listing.property_bathrooms}
                      </a>
                      <a href="#">
                        <span className="flaticon-expand" />{" "}
                        {listing.property_size}
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

export default FeaturedListings;
