"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Partner = () => {
  const partnerImages = [
    "emaar.jpg",
    "Nakheel_logo.jpg",
    "dubai-properties-logo.jpg",
    "al_habtoor.png",
    "Al%20Wasl_logo.png",
    "Aldar_logo.png",
    "damac_2-1.jpg",
    "Meraas.jpg",
  ];
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <>
      {showSlider && (
        <Swiper
          spaceBetween={150} // Adjust the spacing between items as per your preference
          slidesPerView={6} // Default number of slides per view
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          loop
          autoplay={{
            delay: 3000, // Adjust the autoplay delay (in milliseconds) as per your preference
            disableOnInteraction: false,
          }}
          className="swiper-container"
        >
          {partnerImages.map((imageName, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div className="partner_item">
                  <Image
                    width={190}
                    height={130}
                    style={{ objectFit: "contain" }}
                    className="wa m-auto"
                    src={`https://www.indusre.com/images/builders/logo/${imageName}`}
                    alt={imageName}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Partner;
