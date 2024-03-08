"use client";
import { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Autoplay]);

import $ from "jquery";
import Link from "next/link";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const MainBanner = () => {
  const [realIndex, setIndex] = useState(0);
  useEffect(() => {
    $(".Banner2").delay(0).fadeIn(500);
    $(".BannerHolderEx2").delay(10).fadeIn(500);
    $(".BannerBorderEx2,.BannerBorderLineEx2").delay(500).fadeIn(500);
    $(".SalesEx2").delay(1000).fadeIn(500);
    $(".Mega").delay(1600).fadeIn(500);
    $(".ShopNowEx2").delay(2000).fadeIn(500);

    // bayz video overlay delay

    // $(".bayz-video-inner-text").delay(2000).fadeIn(500);
    // $(".bt-2").delay(1000).fadeIn(500);
  });

  const size = useWindowSize();

  const sliderTexts = [
    {
      title: "EXCLUSIVE PROPERTY EVENT",
      subtitle: "17th March 2024",
      f_size: 25,
      subtitle_2: "10AM-7PM Crown Plaza Hotel",
      subtitle_3: "Jaipur, India",
      subtitle_4: "REGISTER NOW",
    },
    {
      title: "Get a 1% Payment Plan and Exciting Offers",
      subtitle: "From ₹ 3.9 Lakh per month",
      f_size: 25,
      subtitle_2: "",
      subtitle_4: "REGISTER NOW",
    },
    {
      title: "Avail",
      subtitle: "GOLD COIN",
      f_size: 35,
      subtitle_2: "OR",
      subtitle_3: "FREE TRIP + HOTEL STAY",
      subtitle_4: "IN DUBAI, UAE",
      subtitle_5: "*T&C Apply",
    },
  ];

  const fontSizeGet = (size) => {
    switch (size) {
      case 20:
        return "fz20";
      case 25:
        return "fz25";
      case 30:
        return "fz30";
      case 35:
        return "fz35 lh-73";
      case 40:
        return "fz40";
      default:
        return "";
    }
  };
  return (
    <>
      <div id="bayz-wrapper" className="hero-large-home9">
        <video
          className="bayz-video-custom"
          width={size.width < 500 ? 500 : 1920}
          height={size.width < 500 ? 600 : 1080}
          autoPlay
          muted
          loop
          preload
        >
          {size.width < 500 ? (
            <source src="videos/mobile-video.mp4" type="video/mp4" />
          ) : (
            <source src="videos/bayzvideo.mp4" type="video/mp4" />
          )}
          Your browser does not support the video tag.
        </video>

        <div className="bayz-video-inner-text">
          <Swiper
            onSlideChange={(e) => setIndex(e.realIndex)}
            spaceBetween={1}
            modules={[Autoplay]}
            slidesPerView={1}
            initialSlide={0}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            style={{ height: size.width > 500 ? "23vh" : "29vh" }}
          >
            {sliderTexts.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={
                    "https://www.jotform.com/assign/240292264800450/240363582641051"
                  }
                >
                  <div>
                    <h3
                      className={`banner-title color-black lh-40 ${
                        realIndex === index ? "op-1" : "op-1"
                      }`}
                    >
                      <span className="fz40">{item.title}</span>
                      <br />
                      <span
                        className={`${fontSizeGet(item.f_size)} ${
                          item.subtitle == "February 18, 2024"
                            ? "slide-1-feb"
                            : ""
                        }`}
                      >
                        {item.subtitle}
                      </span>
                      <br />
                      <span
                        className={`fz20 lh-0 ${
                          item.subtitle_2 == "OR"
                            ? "positioning-or-text"
                            : item.subtitle_2 == "10AM-7PM Crown Plaza Hotel"
                            ? "slide-1-time"
                            : ""
                        }`}
                      >
                        {item.subtitle_2}
                      </span>
                      <br />
                      {item.subtitle_3 == "FREE TRIP + HOTEL STAY" ? (
                        <span className={`fz30 lh-0 position-free-trip`}>
                          <b>{item.subtitle_3}</b>
                        </span>
                      ) : (
                        <span
                          className={`fz25 lh-0 ${
                            item.subtitle_3 == "Jaipur, India"
                              ? "slide-1-loc"
                              : ""
                          }`}
                        >
                          {item.subtitle_3}
                        </span>
                      )}
                      <br />
                      <span
                        className={`fz20 lh-0 ${
                          item.subtitle_4 == "REGISTER NOW" &&
                          item.title == "EXCLUSIVE PROPERTY EVENT"
                            ? "slide-1-reg"
                            : item.subtitle_4 == "REGISTER NOW" &&
                              item.title ==
                                "Get a 1% Payment Plan and Exciting Offers"
                            ? "slide-2-reg"
                            : item.subtitle_4 == "IN DUBAI, UAE"
                            ? "position-in-dubai"
                            : ""
                        }`}
                      >
                        {item.subtitle_4}
                      </span>
                      <br />
                      <span
                        className={`fz15 lh-0 ${
                          item.subtitle_5 == "*T&C Apply"
                            ? "position-tc-apply"
                            : ""
                        }`}
                      >
                        {item.subtitle_5}
                      </span>
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <Swiper
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
                          <text
                            className="SalesEx2"
                            font-family="Viga"
                            font-size="65"
                          >
                            <tspan
                              fill="#000"
                              opacity="0.8"
                              x="300"
                              y="185"
                              font-family="Viga"
                              font-size="15"
                            >
                              *T&C Applied
                            </tspan>
                            <tspan
                              x="300"
                              y="183"
                              font-family="Viga"
                              font-size="15"
                              opacity="1"
                              fill="#fff"
                            >
                              *T&C Applied
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </>
  );
};

export default MainBanner;
