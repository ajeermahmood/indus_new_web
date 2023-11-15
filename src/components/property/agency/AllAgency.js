"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllAgents = ({ data, loading }) => {
  const skeletonLoader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {!loading && data.length == 0 ? (
        <div className="col w-100 mt60">
          <div className="row justify-content-center">
            <Image
              src="/images/svg/no-data.svg"
              width={200}
              height={200}
              className="mb3"
              alt="no-data"
            />
          </div>

          <p className="text-center mb60">
            <b>Sorry, No Results Found!</b>
          </p>
        </div>
      ) : (
        <></>
      )}
      {loading
        ? skeletonLoader.map((sk) => (
            <div key={sk} className="col-md-6 col-lg-4">
              <div className="agency-style1 p30 bdrs12 bdr1 mb30">
                <div className="agency-img">
                  <Skeleton
                    variant="rectangular"
                    className="w-100 contain"
                    width={324}
                    height={209}
                  />
                </div>
                <div className="agency-details pt40">
                  <h6 className="agency-title mb-1">
                    <Skeleton variant="rectangular" width={130} height={20} />
                  </h6>
                  <p className="fz15">
                    <Skeleton variant="rectangular" width={200} height={20} />
                  </p>
                  <div className="d-grid">
                    <Link href="" className="ud-btn btn-white2">
                      View Details
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        : data.map((dev) => (
            <div key={dev.developer_id} className="col-md-6 col-lg-4">
              <div className="agency-style1 p30 bdrs12 bdr1 mb30">
                <div className="agency-img">
                  <Image
                    width={324}
                    height={209}
                    className="w-100 contain"
                    style={{
                      borderBottom: "1px solid #dddddd",
                    }}
                    src={`https://www.indusre.com/images/builders/logo/${dev.logo}`}
                    alt="agency"
                  />
                </div>
                <div className="agency-details pt40">
                  {/* <h6 className="fw400">
                    <i className="fas fa-star review-color2 pr10 fz10" />
                    {agent.starRating}
                  </h6> */}
                  <h6 className="agency-title mb20 text-capitalize fz20">
                    {dev.name}
                  </h6>
                  {/* <p className="fz15">{agent.address}</p> */}
                  <div className="d-grid">
                    <Link
                      href={`/developer-details/?id=${dev.id}`}
                      className="ud-btn btn-white2"
                    >
                      View Details
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

export default AllAgents;
