"use client";
import apartmentType from "@/data/apartmentType";
import Link from "next/link";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Autoplay]);

const ApartmentType = () => {
  return (
    <div className="row m0">
      {apartmentType.map((type, index) => (
        <div className="item col" key={index}>
          <Link href={`/all-properties/?t=${type.id}`}>
            <div className="iconbox-style4 p20-mbl">
              <span className={`icon ${type.icon}`} />
              <div className="iconbox-content">
                <h6 className="title">{type.title}</h6>
                {type.count != "0" ? (
                  <p className="text text-light mb-0">{`${type.count} Properties`}</p>
                ) : (
                  <p className="text text-light mb-0"> {"Explore"} </p>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ApartmentType;
