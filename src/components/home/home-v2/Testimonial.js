"use client";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { getAllGoogleReviews } from "../../../api/listings";

const Testimonial = () => {
  const [realIndex, setIndex] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllGoogleReviews().then((res) => {
      setReviews(res);
    });
  }, []);
  return (
    <>
      {reviews.length != 0 && (
        <Swiper
          onSlideChange={(e) => setIndex(e.realIndex)}
          className="overflow-visible"
          spaceBetween={1}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".single-pro-slide-testimonials-next__active",
            prevEl: ".single-pro-slide-testimonials-prev__active",
          }}
          slidesPerView={1}
          initialSlide={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          // width={500}
        >
          {reviews.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className={`tab-pane fade ${
                  realIndex === index ? "show active" : ""
                }`}
                id={`pills-${testimonial.id}`}
                role="tabpanel"
                aria-labelledby={`pills-${testimonial.id}-tab`}
              >
                <div className="testi-content text-center">
                  <span className="icon fas fa-quote-left" />
                  <h4 className="testi-text">&quot;{testimonial.review}&quot;</h4>
                  {/* <h6 className="name">{testimonial.name}</h6>
                  <p className="design">Customer</p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="rounded-arrow arrowY-center-position top-minus-15">
        <button className="single-pro-slide-testimonials-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="single-pro-slide-testimonials-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
    </>
  );
};

export default Testimonial;
