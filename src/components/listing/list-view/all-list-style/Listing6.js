"use client";
import { getAllCommunityGuides } from "@/api/listings";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Listing6 = () => {
  const skeleton = [1, 2, 3, 4, 5, 6];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllCommunityGuides()
      .then((res) => {
        setData(res);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading
        ? skeleton.map((guide, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="listing-style9">
                <div
                  className="list-thumb"
                  style={{
                    height: "25rem",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    className="w-100  cover"
                    width={382}
                    height={400}
                  />
                </div>
              </div>
            </div>
          ))
        : data.map((guide, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="listing-style9">
                <div
                  className="list-thumb black-shadow-bottom"
                  style={{
                    height: "25rem",
                  }}
                >
                  <Image
                    width={382}
                    height={400}
                    className="w-100 h-100 cover"
                    src={`https://www.indusre.com/communityimg/${guide.location_image}`}
                    alt="listings"
                  />
                </div>

                <div className="list-content">
                  <h6 className="list-title my-1">
                    <Link
                      className="guide-title"
                      href={`/community-guide/${guide.ps_guide_id}`}
                    >
                      {guide.location_name}
                    </Link>
                  </h6>
                  <p className="my-1 text-light">{guide.location_blurb}</p>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default Listing6;
