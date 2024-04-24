"use client";
import Image from "next/image";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
SwiperCore.use([Autoplay]);

const MainImageSlider = () => {
  const [realIndex, setIndex] = useState(0);

  const [showFcp, setShowFcp] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState([]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    fetch(`https://indusspeciality.com/api/listings/get_main_slider_imgs.php`, {
      cache: "no-store",
      method: "GET",
    })
      .then(async (data) => {
        const images = await data.json();
        setAllImages(images);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (imagesLoaded.length > 2) {
      setShowFcp(false);
    }
  }, [imagesLoaded]);

  return (
    <>
      <Image
        style={{
          filter: "blur(1px) brightness(0.6)",
          height: "60vh",
          transition: "all 0.5s ease-in-out",
        }}
        className={
          showFcp
            ? "opacity-1 position-relative cover w-100 bdrs10"
            : "opacity-0 position-absolute cover w-100 bdrs10"
        }
        src={`https://www.indusre.com/main_slider/al_habtoor_tower.webp`}
        priority
        height={144}
        width={384}
        alt="img"
      />
      {allImages.length > 0 && (
        <>
          <div
            style={{
              transition: "all 0.5s ease-in-out",
            }}
            className={
              !showFcp
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
              {allImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`item main-img-slider-overlay fade ${
                      realIndex === index ? "show active" : ""
                    }`}
                  >
                    <Image
                      style={{
                        filter: "brightness(0.6)",
                        height: "60vh",
                      }}
                      className="cover w-100 bdrs10"
                      src={`https://www.indusre.com/main_slider/${item.img}`}
                      loading="lazy"
                      height={405}
                      width={1080}
                      alt="img"
                      onLoadingComplete={() => {
                        setImagesLoaded((prev) => [...prev, index]);
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}

      {/* <Image
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
      /> */}
    </>
  );
};

export default MainImageSlider;
