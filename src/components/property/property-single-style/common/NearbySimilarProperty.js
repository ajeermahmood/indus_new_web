"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const NearbySimilarProperty = ({ props }) => {
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featured-next__active",
          prevEl: ".featured-prev__active",
        }}
        pagination={{
          el: ".featured-pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {props.map((listing) => (
          <SwiperSlide key={listing.id}>
            <div className="item">
              <div className="listing-style1">
                <div
                  className="list-thumb"
                  style={{
                    height: "15rem",
                  }}
                >
                  <Image
                    width={382}
                    height={248}
                    className="w-100 h-100 cover"
                    src={listing.dp_1}
                    alt="listings"
                  />

                  <div className="list-price">
                    {currencyFormatter.format(listing.property_price)}{" "}
                    {listing.property_category_id == "1" ? (
                      <span>/ yr</span>
                    ) : (
                      <></>
                    )}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NearbySimilarProperty;
