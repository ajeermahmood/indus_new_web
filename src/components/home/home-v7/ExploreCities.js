"use client";
import { getPropertiesCountBasedOnLocations } from "@/api/listings";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ExploreCities = () => {
  const [data, setData] = useState("");

  const router = useRouter();

  useEffect(() => {
    getPropertiesCountBasedOnLocations().then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);
  const apartmentData = [
    {
      city: "Downtown Dubai",
      imageSrc: "https://indusspeciality.com/api/assets/images/locations/downtown-3.webp",
      propertyCount: data.downtown,
      className: "col-lg-6",
      value: 50,
    },
    {
      city: "Dubai Marina",
      imageSrc: "https://indusspeciality.com/api/assets/images/locations/dubai-marina.webp",
      propertyCount: data.dubai_marina,
      className: "col-6 col-lg-3",
      value: 65,
    },
    {
      city: "Dubai South",
      imageSrc: "https://indusspeciality.com/api/assets/images/locations/dubai-south.webp",
      propertyCount: data.dubai_south,
      className: "col-6 col-lg-3",
      value: 464,
    },
    {
      city: "Town Square",
      imageSrc: "https://indusspeciality.com/api/assets/images/locations/town-square.webp",
      propertyCount: data.town_square,
      className: "col-6 col-lg-3",
      value: 140,
    },
    {
      city: "Dubai Hills Estate",
      imageSrc: "https://indusspeciality.com/api/assets/images/locations/hills-estate.webp",
      propertyCount: data.dubai_hills_estate,
      className: "col-6 col-lg-3",
      value: 60,
    },
    {
      city: "Dubai Creek Harbour",
      imageSrc: "https://indusspeciality.com/api/assets/images/locations/dubai-creek-harbour.webp",
      propertyCount: data.dubai_creek,
      className: "col-lg-6",
      value: 55,
    },
  ];

  return (
    <>
      {apartmentData.map((apartment, index) => (
        <div key={index} className={apartment.className}>
          <div
            className="feature-style1 mb30"
            onClick={() => router.push(`/all-properties?lc=${apartment.value}`)}
          >
            <div className="feature-img">
              <Image
                width={591}
                height={270}
                className="w-100 h-100 cover"
                src={apartment.imageSrc}
                alt="city listing"
              />
            </div>
            <div className="feature-content">
              <div className="top-area">
                <h6 className="title mb-1">{apartment.city}</h6>
                <p className="text">{apartment.propertyCount} Properties</p>
              </div>
              <div className="bottom-area">
                <Link
                  className="ud-btn2"
                  href={`/all-properties?lc=${apartment.value}`}
                >
                  See All Properties
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExploreCities;
