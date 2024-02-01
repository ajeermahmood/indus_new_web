"use client";
import Image from "next/image";
import { useEffect } from "react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Autoplay]);

import $ from "jquery";

const MainBanner = () => {
  useEffect(() => {
    $(".Banner2").delay(0).fadeIn(500);
    $(".BannerHolderEx2").delay(10).fadeIn(500);
    $(".BannerBorderEx2,.BannerBorderLineEx2").delay(500).fadeIn(500);
    $(".SalesEx2").delay(1000).fadeIn(500);
    $(".Mega").delay(1600).fadeIn(500);
    $(".ShopNowEx2").delay(2000).fadeIn(500);
  });
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
            "banner_w_2.webp",
            "danube-bayz-101-in-business-bay-dubai.jpg",
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
                        <span className="banner-title fz40 bg-red fw600">
                          1% Payment Plan
                        </span>
                        <p className="text-light mt50"></p>
                        {/* ---------------------------------------external svg css---------------------------------- */}
                        {/* ---------------------------------------external svg css---------------------------------- */}
                        {/* ---------------------------------------external svg css---------------------------------- */}
                        <svg className="Banner2 margin-lft-minus-25-mbl" height="220" width="450">
                          <polygon
                            className="BorderAnimationEx2 BannerBorderEx2"
                            stroke-miterlimit="10"
                            points="30 5, 20 200, 440 170, 440 55"
                            style={{
                              fill: "none",
                              stroke: "white",
                              strokeWidth: 5,
                            }}
                          />
                          <polygon
                            className="BannerHolderEx2"
                            points="5 31, 5 185, 410 205, 430 10"
                            style={{
                              fill: "#000",
                              opacity: "0.2",
                            }}
                          />
                          <polygon
                            className="BannerHolderEx2"
                            points="5 31, 5 180, 410 200, 430 10"
                            style={{
                              fill: "#d4aa4b",
                              opacity: "1",
                            }}
                          />
                          <text
                            className="SalesEx2"
                            font-family="Viga"
                            font-size="65"
                          >
                            <tspan
                              fill="#000"
                              opacity="0.8"
                              x="43"
                              y="80"
                              font-family="Viga"
                              font-size="40"
                            >
                              WIN A GOLD COIN
                            </tspan>
                            <tspan
                              x="43"
                              y="77"
                              font-family="Viga"
                              font-size="40"
                              opacity="1"
                              fill="#fff"
                            >
                              WIN A GOLD COIN
                            </tspan>
                          </text>
                          <text
                            className="ShopNowEx2"
                            font-family="Josefin Sans"
                            font-weight="700"
                            font-size="20"
                            fill="#fff"
                          >
                            <tspan fill="#000" x="165" y="107">
                              OR
                            </tspan>
                            <tspan x="165" y="105">
                              OR
                            </tspan>
                          </text>
                          <text
                            className="SalesEx2"
                            font-family="Viga"
                            font-size="65"
                          >
                            <tspan
                              fill="#000"
                              opacity="0.8"
                              x="50"
                              y="150"
                              font-family="Viga"
                              font-size="40"
                            >
                              TRIP TO DUBAI
                            </tspan>
                            <tspan
                              x="50"
                              y="147"
                              font-family="Viga"
                              font-size="40"
                              opacity="1"
                              fill="#fff"
                            >
                              TRIP TO DUBAI
                            </tspan>
                          </text>
                          <polyline
                            className="BorderAnimationEx2 BannerBorderLineEx2"
                            points="30 3, 20 200"
                            style={{
                              fill: "none",
                              stroke: "white",
                              strokeWidth: "4.5",
                            }}
                          />
                          Sorry, your browser does not support inline SVG.
                        </svg>
                        {/* ---------------------------------------external svg css---------------------------------- */}
                        {/* ---------------------------------------external svg css---------------------------------- */}
                        {/* ---------------------------------------external svg css---------------------------------- */}
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
