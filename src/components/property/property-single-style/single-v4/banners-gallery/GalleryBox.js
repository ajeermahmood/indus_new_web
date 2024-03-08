"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const GalleryBox = ({ banners, loading, size, openCommonDialog }) => {
  const skeletonLoader = size.width < 500 ? [1] : [1, 2, 3];

  const [imagesLoaded, setImagesLoaded] = useState([]);

  return (
    <>
      {loading ? (
        <div className="row m0 justify-content-center">
          {skeletonLoader.map((bnr, index) => (
            <div className="item maxw30rem" key={index}>
              <Skeleton
                variant="rectangular"
                className="bdrs12 w-100"
                height={
                  size.width != undefined ? (size.width > 500 ? 342 : 256) : 342
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          className="overflow-visible"
          spaceBetween={size.width > 500 ? 30 : 10}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".single-pro-slide-next__active",
            prevEl: ".single-pro-slide-prev__active",
          }}
          slidesPerView={1}
          initialSlide={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          width={size.width > 500 ? 480 : 360}
        >
          {banners.map((bnr, index) => (
            <SwiperSlide key={index}>
              <div className="item cusror-pointer" onClick={openCommonDialog}>
                <p className="mb0 fz20 text-indus">{bnr.title}</p>

                <p className="mb10">
                  <i>{bnr.subtitle}</i>
                </p>

                {/* <a href={bnr.link} target="_blank"> */}
                {!imagesLoaded.includes(index) ? (
                  <Skeleton
                    // className="w-100 h-100"
                    variant="rectangular"
                    className="bdrs12 w-100"
                    width={size.width > 500 ? 480 : 360}
                    height={size.width > 500 ? 342 : 256}
                  />
                ) : (
                  <></>
                )}
                <Image
                  width={size.width > 500 ? 480 : 360}
                  height={size.width > 500 ? 342 : 256}
                  className={`${
                    !imagesLoaded.includes(index)
                      ? "opacity-0 position-absolute bdrs12 w-100"
                      : "opacity-100 bdrs12 w-100 position-relative"
                  }}`}
                  src={bnr.image}
                  alt={`Image ${index + 1}`}
                  onLoadingComplete={() => {
                    setImagesLoaded((prev) => [...prev, index]);
                  }}
                />
                {/* </a> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="rounded-arrow arrowY-center-position">
        <button className="single-pro-slide-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="single-pro-slide-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation  */}
    </>
  );
};

export default GalleryBox;
