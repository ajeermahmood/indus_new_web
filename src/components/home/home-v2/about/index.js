"use client";
import React, { useEffect, useState } from "react";
import Funfact from "./Funfact";
import ProductSingle from "./ProductSingle";
import Image from "next/image";
import VideoBox from "./VideoBox";
import { getFeaturedOneListing } from "@/app/api/listings";
import { Skeleton } from "@mui/material";

const About = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    getFeaturedOneListing().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className="row mt80 mt0-md">
      <div className="col-md-6 col-xl-6">
        <div className="position-relative">
          <div className="img-box-7">
            {data == "" ? (
              <Skeleton
                // className="w-100 h-100"
                variant="rectangular"
                style={{
                  minHeight: "45rem",
                  borderRadius: "5px",
                }}
                className="w-100 h-100 cover img-1"
                width={591}
                height={768}
              />
            ) : (
              <Image
                width={591}
                height={768}
                style={{
                  minHeight: "45rem",
                }}
                className="w-100 h-100 cover img-1"
                src={data.dp_2}
                alt="about"
              />
            )}
          </div>
          <div className="img-box-8 position-relative">
            <Image
              width={193}
              height={193}
              className="img-1 spin-right"
              src="/images/about/element-1.png"
              alt="about"
            />
          </div>
          {data != "" ? (
            data.property_video != "" ? (
              <VideoBox />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}

          <div className="img-box-10 position-relative">
            <ProductSingle property={data} />
          </div>
        </div>
      </div>
      {/* End col */}

      <div className="col-md-6 col-xl-4 offset-xl-2">
        <div className="about-box-1">
          <h2 className="title mb30">With Us Help You Find Your Dream Home</h2>
          <p className="text mb20 fz15">
            At Indus, the range of service focuses on all aspects of property
            selling, buying and leasing – both residential and commercial. Our
            efficiency is derived from a combination of experience and knowledge
            of the local property market.
          </p>
          <Funfact />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default About;
