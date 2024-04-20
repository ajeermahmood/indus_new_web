"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FeaturedListings = ({ data, type, loading }) => {
  const skeletonLoader = [1, 2, 3, 4, 5, 6];
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });

  const router = useRouter();

  const [imageLoaded, setImageLoaded] = useState([]);

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
        ? skeletonLoader.map((sk, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="listing-style8">
                <div className="list-thumb">
                  <Skeleton
                    // className="w-100 h-100"
                    variant="rectangular"
                    width={382}
                    height={248}
                  />

                  <div className="sale-sticker-wrap">
                    {/* <div className="list-tag2 rounded-0 fz12">FOR SALE</div> */}
                  </div>
                  <div className="list-meta">
                    <a className="rounded-0 mr5" href="#">
                      <span className="flaticon-like"></span>
                    </a>
                    <a className="rounded-0 mr5" href="#">
                      <span className="flaticon-new-tab"></span>
                    </a>
                    <a className="rounded-0" href="#">
                      <span className="flaticon-fullscreen"></span>
                    </a>
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Skeleton variant="rectangular" width={300} height={30} />
                  </h6>
                  {/* <p className="list-text">{listing.location_name}</p> */}
                  <Skeleton
                    className="mt-2"
                    variant="rectangular"
                    width={300}
                    height={15}
                  />

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="list-meta2 d-flex align-items-center">
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
                      <a href="#">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                    {/* <div className="list-price"> */}
                    <Skeleton variant="rectangular" width={100} height={30} />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))
        : data.map((listing, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div
                className="listing-style8"
                onClick={() => router.push(`/property/${listing.property_id}`)}
              >
                <div
                  className="list-thumb w-100 m0"
                  // style={{
                  //   height: "15rem !Important",
                  // }}
                >
                  {imageLoaded.includes(index) ? (
                    <></>
                  ) : (
                    <Skeleton
                      // className="w-100 h-100"
                      variant="rectangular"
                      width={384}
                      height={250}
                    />
                  )}
                  <Image
                    width={384}
                    height={288}
                    className="mbl-w-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      opacity: imageLoaded.includes(index) ? 1 : 0,
                      position: imageLoaded.includes(index)
                        ? "relative"
                        : "absolute",
                    }}
                    priority={false}
                    loading="lazy"
                    src={listing.dp_1}
                    alt="listings"
                    onLoadingComplete={() => {
                      setImageLoaded((prev) => [...prev, index]);
                    }}
                  />
                  <div className="sale-sticker-wrap">
                    <div className="list-tag2 rounded-0 fz12">
                      {type == "rent" ? "FOR RENT" : "FOR SALE"}
                    </div>
                  </div>
                  <div
                    className="list-meta"
                    style={{
                      height: "11rem !Important",
                    }}
                  >
                    {/* <a className="rounded-0 mr5" href="#">
                      <span className="flaticon-like"></span>
                    </a> */}
                    <a
                      className="rounded-0 mr5"
                      target="_blank"
                      href={`/property/${listing.property_id}`}
                    >
                      <span className="flaticon-new-tab"></span>
                    </a>
                    <a
                      className="rounded-0"
                      href="#"
                      onClick={() =>
                        window.open(
                          `/property/${listing.property_id}`,
                          "_blank",
                          "location=yes,height=900,width=1440,scrollbars=yes,status=yes"
                        )
                      }
                    >
                      <span className="flaticon-fullscreen"></span>
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
                    }}
                  >
                    {listing.location_sub_name != ""
                      ? listing.location_sub_name + ", "
                      : ""}
                    {listing.location_name}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="list-meta2 d-flex align-items-center">
                      <a href="#" className="mr10">
                        <span className="flaticon-bed" />{" "}
                        {listing.property_bedrooms != "-1"
                          ? listing.property_bedrooms
                          : "Studio"}
                      </a>
                      <a href="#" className="mr10">
                        <span className="flaticon-shower" />{" "}
                        {listing.property_bathrooms}
                      </a>
                      <a href="#">
                        <span className="flaticon-expand" />{" "}
                        {listing.property_size}
                      </a>
                    </div>
                    <div className="list-price">
                      {currencyFormatter.format(listing.property_price)}{" "}
                      {type == "rent" ? <span>/ yr</span> : <></>}
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
