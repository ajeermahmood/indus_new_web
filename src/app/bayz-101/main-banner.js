"use client";
import Image from "next/image";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Autoplay]);

const MainBanner = () => {
  return (
    <>
      <div className="hero-large-home9">
        <Swiper
          direction="vertical" // Set the direction to vertical
          effect={"fade"}
          spaceBetween={0}
          slidesPerView={1}
          speed={2400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay, EffectFade]}
          style={{ height: "60vh" }}
        >
          {[
            "banner_w.webp",
            "danube-bayz-101-in-business-bay-dubai.jpg",
            // "13429.webp",
          ].map((item, index) => (
            <SwiperSlide key={index}>
              {/* <Image
                className="cover w-100 h-100"
                src={`/images/bayz-101/${item}`}
                width={4000}
                height={1000}
                alt="main-image"
              /> */}
              <div
                className="item"
                style={{
                  height: "100%",
                }}
              >
                <div
                  className="slider-slide-item no-overlay-2"
                  style={{
                    backgroundImage: `url(/images/bayz-101/${item})`,
                    height: "100%",
                  }}
                >
                  <div className="container maxw1600 position-relative">
                    <div className="row text-align-bayz w-100">
                      <div className="col-xl-12">
                        <h3 className="banner-title fz40">
                          Exclusive Invitation
                        </h3>
                        <span className="banner-title fz40 bg-red">
                          1% Payment Plan
                        </span>
                        <p className="text-light mt10">
                          Win a Gold Coin or Trip to Dubai!
                        </p>
                        {/* <a
                          target="_blank"
                          href={``}
                          className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs"
                        >
                          View Details <i className="fal fa-arrow-right-long" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MainBanner;
