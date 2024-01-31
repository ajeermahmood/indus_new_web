"use client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

const ImgGallary = () => {
  const size = useWindowSize();

  const ref = useRef();
  const [realIndex, setIndex] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const imgs = [
    "bayz_gallery1.webp",
    "bayz_gallery2.webp",
    "bayz_gallery3.webp",
    "bayz_gallery4.webp",
    "bayz_gallery5.webp",
    "bayz_gallery6.webp",
    "bayz_gallery7.webp",
    "bayz_gallery8.webp",
    "bayz_gallery9.webp",
  ];

  useEffect(() => {
    if (ref.current != undefined) {
      setImgWidth(ref.current.clientWidth);
    }
  }, [size]);
  return (
    <>
      <Swiper
        onSlideChange={(e) => setIndex(e.realIndex)}
        className="overflow-visible"
        spaceBetween={1}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".single-pro-slide-bayz-101-next__active",
          prevEl: ".single-pro-slide-bayz-101-prev__active",
        }}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
        // autoplay={{ delay: 3000 }}
        // width={500}
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              ref={ref}
              className={`w-100 h-100 cover fade ${
                realIndex === index ? "show active" : ""
              }`}
              src={`/images/bayz-101/${img}`}
              width={800}
              height={400}
              alt="gallary-img"
            />
            {/* <div
              className={`tab-pane fade ${
                realIndex === index ? "show active" : ""
              }`}
              id={`pills-${testimonial.id}`}
              role="tabpanel"
              aria-labelledby={`pills-${testimonial.id}-tab`}
            >
              <div className="testi-content text-center">
                <span className="icon fas fa-quote-left" />
                <h4 className="testi-text">{testimonial.review}</h4>
                <h6 className="name">{testimonial.name}</h6>
                <p className="design">Customer</p>
              </div>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="rounded-arrow bayz-glry-btns"
        style={{
          width: `${imgWidth}px`,
        }}
      >
        <button className="single-pro-slide-bayz-101-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="single-pro-slide-bayz-101-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
    </>
  );
};

export default ImgGallary;
