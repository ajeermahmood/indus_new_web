"use client";
import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "@/components/home/home-v2/hero";
import "swiper/swiper-bundle.css";
SwiperCore.use([Autoplay]);

const MainImageSlider = () => {
  const imgs = ["/images/locations/vacation.jpg"];
  return (
    <>
      <div className="home2-hero-banner">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          // speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="bdrs10"
          // style={{ height: "90vh" }}
        >
          {imgs.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="item main-img-slider-overlay"
                style={{
                  height: "100%",
                }}
              >
                <Image
                  className="cover w-100 h-100"
                  src={item}
                  height={600}
                  width={1600}
                  alt="img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="row m-0">
        <div className="col-xl-10 mx-auto">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default MainImageSlider;
