"use client";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const BannerSlider = ({ hightlights, title , url}) => {
  return (
    <>
      <div className="rounded-arrow arrow-with-border d-flex flex-column d-position end-pos">
        <button className="hero9-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="hero9-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation  */}

      <div className="hero-large-home9">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".hero9-next__active",
            prevEl: ".hero9-prev__active",
          }}
          className="hero_9"
          style={{ height: "90vh" }}
        >
          {hightlights.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="item"
                style={{
                  height: "100%",
                }}
              >
                <div
                  className="slider-slide-item no-overlay"
                  style={{
                    backgroundImage: `url('https://www.indusre.com/communityimg/${item.ps_highlight_image}')`,
                    height: "100%",
                  }}
                  data-thumb={item.ps_highlight_image}
                >
                  <div className="container position-relative">
                    <h3
                      className="banner-title fz40"
                      style={{
                        position: "absolute",
                        top: "-180px",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-light fz20"
                      style={{
                        position: "absolute",
                        top: "-120px",
                      }}
                    >
                      Hightlights
                    </p>
                    <div className="row">
                      <div className="col-xl-7">
                        <h3 className="banner-title fz40">
                          {item.ps_highlight_title}
                        </h3>
                        <p className="text-light fz25">
                          {item.ps_highlight_text}
                        </p>

                        <p className="banner-text text-white ff-heading">
                          {item.meta}
                        </p>
                        <a
                          target="_blank"
                          href={url}
                          className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs"
                        >
                          View Details <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                      {/* End .col-6 */}

                      <div className="col-sm-6 col-xl-4 offset-xl-3"></div>
                      {/* End .col-6 */}
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

export default BannerSlider;
