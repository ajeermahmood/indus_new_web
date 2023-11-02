"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const GalleryBox = ({ banners, loading }) => {
  const skeletonLoader = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".single-pro-slide-next__active",
          prevEl: ".single-pro-slide-prev__active",
        }}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        width={480}
      >
        {loading
          ? skeletonLoader.map((bnr, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <Skeleton
                    // className="w-100 h-100"
                    variant="rectangular"
                    className="bdrs12 w-100"
                    width={480}
                    height={342}
                  />
                </div>
              </SwiperSlide>
            ))
          : banners.map((bnr, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <p className="mb0 fz20 text-indus">{bnr.title}</p>
                  <p className="mb10">
                    <i>{bnr.subtitle}</i>
                  </p>
                  <Image
                    width={480}
                    height={342}
                    className="bdrs12 w-100"
                    src={bnr.image}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

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
