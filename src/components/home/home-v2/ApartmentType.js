"use client";
import apartmentType from "@/data/apartmentType";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import Link from "next/link";
import { getAllPropTypesCount } from "@/api/listings";
SwiperCore.use([Autoplay]);

const ApartmentType = () => {
  const [propTypesCount, setPropTypesCount] = useState([]);
  useEffect(() => {
    getAllPropTypesCount().then((res) => {
      setPropTypesCount(res);
      console.log(res);
    });
  }, []);
  return (
    <Swiper
      spaceBetween={30}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
      autoplay={{ delay: 3000 }} // Set the desired delay for autoplay
    >
      {apartmentType.map((type) => (
        <SwiperSlide key={type.id}>
          <div className="item">
            <Link href={`/all-properties/?type=${type.title}`}>
              <div className="iconbox-style4">
                <span className={`icon ${type.icon}`} />
                <div className="iconbox-content">
                  <h6 className="title">{type.title}</h6>
                  <p className="text text-light mb-0">{`${
                    propTypesCount.length != 0 &&
                    propTypesCount.filter((p) => p.id == type.id).length != 0
                      ? propTypesCount.find((p) => p.id == type.id).count
                      : 0
                  } Properties`}</p>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ApartmentType;
