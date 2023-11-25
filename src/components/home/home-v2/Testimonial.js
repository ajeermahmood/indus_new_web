"use client";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const testimonials = [
  {
    id: 0,
    imageSrc: "https://indusspeciality.com/api/assets/images/testimonials/mihar-ved.png",
    text: "Great experience, good follow up service, friendly agents, great property management. Would recommend them to anyone!",
    name: "Mihar Ved",
    designation: "Customer",
  },
  {
    id: 1,
    imageSrc: "https://indusspeciality.com/api/assets/images/testimonials/karan-variava.png",
    text: "Agent are friendly and they have good knowledge of Dubai and International market",
    name: "Karan Variava",
    designation: "Customer",
  },
  {
    id: 2,
    imageSrc: "https://indusspeciality.com/api/assets/images/testimonials/muhannad-khawam.png",
    text: "The pinnacle of arrangement, refinement and cooperation It's like a beehive",
    name: "Muhannad Khawam",
    designation: "Customer",
  },
  {
    id: 3,
    imageSrc: "https://indusspeciality.com/api/assets/images/testimonials/muhannad-khawam.png",
    text: "Amazing company with good management and better customer service.",
    name: "Solomon Destiny",
    designation: "Customer",
  },
  {
    id: 4,
    imageSrc: "https://indusspeciality.com/api/assets/images/testimonials/muhannad-khawam.png",
    text: "Great Experience! They have a good follow up service, friendly agents and great property management!",
    name: "Ankita Asher",
    designation: "Customer",
  },
  {
    id: 5,
    imageSrc: "https://indusspeciality.com/api/assets/images/testimonials/muhannad-khawam.png",
    text: "Friendly agents, great property management! Would recommend!",
    name: "Saba Masood",
    designation: "Customer",
  },
];

const Testimonial = () => {
  const [realIndex, setIndex] = useState(0);
  return (
    <>
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
        {testimonials.map((testimonial, index) => (
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
                <h4 className="testi-text">{testimonial.text}</h4>
                <h6 className="name">{testimonial.name}</h6>
                <p className="design">{testimonial.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
