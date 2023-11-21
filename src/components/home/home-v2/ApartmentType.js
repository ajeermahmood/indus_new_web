"use client";
import apartmentType from "@/data/apartmentType";
import Link from "next/link";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Autoplay]);

const ApartmentType = () => {
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
            <Link href={`/all-properties/?t=${type.id}`}>
              <div className="iconbox-style4 p20-mbl">
                <span className={`icon ${type.icon}`} />
                <div className="iconbox-content">
                  <h6 className="title">{type.title}</h6>
                  <p className="text text-light mb-0">{`${type.count} Properties`}</p>
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
