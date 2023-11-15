"use client";
import { getExclusiveAgents } from "@/app/api/listings";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Agents = () => {
  const skeletonLoader = [1, 2, 3, 4, 5];
  const [erroImgs, setErrorImgs] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getExclusiveAgents().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".agent_next__active",
          prevEl: ".agent_prev__active",
        }}
        pagination={{
          el: ".agent_pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        autoplay={{ delay: 3000 }} // Set the desired delay for autoplay
      >
        {data.length == 0
          ? skeletonLoader.map((agent, index) => (
              <SwiperSlide key={index}>
                <div className="item" key={index}>
                  <div className="team-style1 mb30">
                    <div
                      className="team-img"
                      style={{
                        height: "15rem",
                      }}
                    >
                      <Skeleton
                        variant="rectangular"
                        width={217}
                        height={248}
                        className="w-100 h-100 cover"
                      />
                    </div>
                    <div className="team-content pt20">
                      <Skeleton
                        variant="rectangular"
                        width={200}
                        height={20}
                        className="name mb-1"
                      />
                      <Skeleton
                        variant="rectangular"
                        width={180}
                        height={20}
                        className="text fz15 mb-0"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : data.map((agent, index) => (
              <SwiperSlide key={index}>
                <div className="item" key={index}>
                  <Link href={`/about-agent/?id=${agent.client_user_id}`}>
                    <div className="team-style1 mb30">
                      <div
                        className="team-img"
                        style={{
                          height: "15rem",
                        }}
                      >
                        <Image
                          width={217}
                          height={248}
                          className="w-100 h-100 cover"
                          style={{
                            objectPosition: "top",
                          }}
                          src={
                            erroImgs.includes(agent.client_user_id)
                              ? "/images/agents/demo.png"
                              : `https://www.indusre.com/agentimg/${agent.client_user_image}`
                          }
                          alt="agent team"
                          onError={(e) => {
                            setErrorImgs([...erroImgs, agent.client_user_id]);
                          }}
                        />
                      </div>
                      <div className="team-content pt20">
                        <h6 className="name mb-1">{agent.client_user_name}</h6>
                        <p className="text fz15 mb-0">
                          {agent.client_user_designation}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default Agents;
