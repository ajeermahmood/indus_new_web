"use client";
import apartmentType from "@/data/apartmentType";
import Link from "next/link";

const ApartmentType = () => {
  return (
    <div className="row m0">
      {apartmentType.map((type, index) => (
        <div className="item col" key={index}>
          <Link href={`/all-properties/?t=${type.id}`}>
            <div className="iconbox-style4 p20-mbl minw-150">
              <span className={`icon ${type.icon}`} />
              <div className="iconbox-content">
                <p className="title">{type.title}</p>
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
