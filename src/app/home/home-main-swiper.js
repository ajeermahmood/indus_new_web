"use client";
import Image from "next/image";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "@/components/home/home-v2/hero";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
SwiperCore.use([Autoplay]);

const MainImageSlider = ({ data }) => {

  const [realIndex, setIndex] = useState(0);

  const [imagesLoaded, setImagesLoaded] = useState([]);

  return (
    <>
      <div className="home2-hero-banner">
        <div
          className={
            imagesLoaded.length === data.length
              ? "opacity-1 position-relative"
              : "opacity-0 position-absolute"
          }
        >
          <Swiper
            onSlideChange={(e) => setIndex(e.realIndex)}
            effect={"fade"} // Set the direction to vertical
            spaceBetween={0}
            slidesPerView={1}
            speed={2400} // Set the slide transition speed in milliseconds
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            className="bdrs10"
            style={{
              height: "90vh",
            }}
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
                      filter: "brightness(0.6)",
                      height: "55vh",
                    }}
                    className="cover w-100 bdrs10"
                    src={`https://www.indusre.com/main_slider/${item.img}`}
                    // priority={realIndex == 0 ? true : false}
                    loading={"lazy"}
                    height={405}
                    width={1080}
                    alt="img"
                    blurDataURL="URL"
                    placeholder="blur"
                    onLoadingComplete={() => {
                      setImagesLoaded((prev) => [...prev, index]);
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {imagesLoaded.length === data.length ? (
          <></>
        ) : (
          <Image
            style={{
              filter: "blur(1px) brightness(0.6)",
              height: "55vh",
            }}
            className="cover w-100 bdrs10"
            src={`https://www.indusre.com/main_slider/al_habtoor_tower.webp`}
            priority={true}
            loading="eager"
            height={144}
            width={384}
            alt="img"
          />
        )}
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
