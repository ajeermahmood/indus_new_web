"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const GalleryBox = ({ banners, loading }) => {
  const skeletonLoader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  const [thirdImageLoaded, setThirdImageLoaded] = useState(false);
  const [fourthImageLoaded, setFourthImageLoaded] = useState(false);
  const [fifthImageLoaded, setFifthImageLoaded] = useState(false);
  const [sixthImageLoaded, setSixthImageLoaded] = useState(false);
  const [seventhImageLoaded, setSeventhImageLoaded] = useState(false);
  const [eighthImageLoaded, setEighthImageLoaded] = useState(false);
  const [ninthImageLoaded, setNinthImageLoaded] = useState(false);
  const [tenthImageLoaded, setTenthImageLoaded] = useState(false);
  const [eleventhImageLoaded, setEleventhImageLoaded] = useState(false);
  const [twelvethImageLoaded, setTwelvethImageLoaded] = useState(false);
  const [thirteenthImageLoaded, setThirteenthImageLoaded] = useState(false);
  const [fourteenthImageLoaded, setFourteenthImageLoaded] = useState(false);
  const [fifteenthImageLoaded, setFifteenthImageLoaded] = useState(false);

  const getImgLoadVar = (index) => {
    switch (index) {
      case 0:
        return firstImageLoaded;
      case 1:
        return secondImageLoaded;
      case 2:
        return thirdImageLoaded;
      case 3:
        return fourthImageLoaded;
      case 4:
        return fifthImageLoaded;
      case 5:
        return sixthImageLoaded;
      case 6:
        return seventhImageLoaded;
      case 7:
        return eighthImageLoaded;
      case 8:
        return ninthImageLoaded;
      case 9:
        return tenthImageLoaded;
      case 10:
        return eleventhImageLoaded;
      case 11:
        return twelvethImageLoaded;
      case 12:
        return thirteenthImageLoaded;
      case 13:
        return fourteenthImageLoaded;
      case 14:
        return fifteenthImageLoaded;
      default:
        break;
    }
  };

  const getImgLoadFunc = (index) => {
    switch (index) {
      case 0:
        setFirstImageLoaded(true);
        break;
      case 1:
        setSecondImageLoaded(true);
        break;
      case 2:
        setThirdImageLoaded(true);
        break;
      case 3:
        setFourthImageLoaded(true);
        break;
      case 4:
        setFifthImageLoaded(true);
        break;
      case 5:
        setSixthImageLoaded(true);
        break;
      case 6:
        setSeventhImageLoaded(true);
        break;
      case 7:
        setEighthImageLoaded(true);
        break;
      case 8:
        setNinthImageLoaded(true);
        break;
      case 9:
        setTenthImageLoaded(true);
        break;
      case 10:
        setEleventhImageLoaded(true);
        break;
      case 11:
        setTwelvethImageLoaded(true);
        break;
      case 12:
        setThirteenthImageLoaded(true);
        break;
      case 13:
        setFourteenthImageLoaded(true);
        break;
      case 14:
        setFifteenthImageLoaded(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".single-pro-slide-next__active",
          prevEl: ".single-pro-slide-prev__active",
        }}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        width={480}
      >
        {loading
          ? skeletonLoader.map((bnr, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <Skeleton
                    variant="rectangular"
                    className="bdrs12 w-100"
                    width={480}
                    height={342}
                  />
                </div>
              </SwiperSlide>
            ))
          : banners.map((bnr, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <a href={bnr.link} target="_blank">
                    <p className="mb0 fz20 text-indus">{bnr.title}</p>
                  </a>

                  <a href={bnr.link} target="_blank">
                    <p className="mb10">
                      <i>{bnr.subtitle}</i>
                    </p>
                  </a>

                  <a href={bnr.link} target="_blank">
                    {!getImgLoadVar(index) ? (
                      <Skeleton
                        // className="w-100 h-100"
                        variant="rectangular"
                        className="bdrs12 w-100"
                        width={480}
                        height={342}
                      />
                    ) : (
                      <></>
                    )}
                    <Image
                      width={480}
                      height={342}
                      className={`${
                        !getImgLoadVar(index)
                          ? "opacity-0 position-absolute bdrs12 w-100"
                          : "opacity-100 bdrs12 w-100 position-relative"
                      }}`}
                      src={bnr.image}
                      alt={`Image ${index + 1}`}
                      onLoadingComplete={() => getImgLoadFunc(index)}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

      <div className="rounded-arrow arrowY-center-position">
        <button className="single-pro-slide-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="single-pro-slide-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation  */}
    </>
  );
};

export default GalleryBox;