"use client";
import Image from "next/image";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "@/components/home/home-v2/hero";
import "swiper/swiper-bundle.css";
import { useState } from "react";
SwiperCore.use([Autoplay]);

const MainImageSlider = ({ data }) => {
  // console.log(data);

  const [realIndex, setIndex] = useState(0);
  return (
    <>
      <div className="home2-hero-banner">
        <Swiper
          onSlideChange={(e) => setIndex(e.realIndex)}
          effect={"fade"} // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={2400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 15000, disableOnInteraction: false }}
          className="bdrs10"
          style={{ height: "90vh" }}
          modules={[Autoplay, EffectFade]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`item main-img-slider-overlay fade ${
                  realIndex === index ? "show active" : ""
                }`}
              >
                <Image
                  style={{
                    filter: "blur(3px) brightness(0.7)",
                    height: "55vh",
                  }}
                  className="cover w-100 bdrs10"
                  src={`https://www.indusre.com/main_slider/${item.img}`}
                  // priority={true}
                  height={240}
                  width={640}
                  alt="img"
                  blurDataURL="URL"
                  placeholder="blur"
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
