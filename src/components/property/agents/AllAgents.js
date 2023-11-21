"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AllAgents = ({ data, loading }) => {
  const skeletonLoader = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];
  const [erroImgs, setErrorImgs] = useState([]);

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
            <div className="col" key={sk}>
              <div className="feature-style2 mb30">
                <div
                  className="feature-img"
                  style={{
                    height: "15rem",
                  }}
                >
                  <Skeleton
                    // className="w-100 h-100"
                    variant="rectangular"
                    className="bdrs12 w-100 h-100 cover"
                    width={210}
                    height={240}
                  />
                </div>
                <div className="feature-content pt20">
                  <h6 className="title mb-1">
                    <Skeleton variant="rectangular" width={200} height={20} />
                  </h6>
                  <p className="text fz15 mb5">
                    <Skeleton variant="rectangular" width={180} height={10} />
                  </p>
                  <p className="text mb5">
                    <Skeleton variant="rectangular" width={180} height={10} />
                  </p>
                  <p className="text mb5">
                    <Skeleton variant="rectangular" width={160} height={10} />
                  </p>
                </div>
              </div>
            </div>
          ))
        : data.map((agent) => (
            <div className="col" key={agent.client_user_id}>
              <div className="feature-style2 mb30">
                <div
                  className="feature-img"
                  style={{
                    height: "15rem",
                  }}
                >
                  <Link href={`/agent/${agent.client_user_id}`}>
                    <Image
                      width={210}
                      height={240}
                      style={{
                        objectPosition: "top",
                      }}
                      className="bdrs12 w-100 h-100 cover"
                      src={
                        erroImgs.includes(agent.client_user_id)
                          ? "/images/agents/demo.png"
                          : `https://www.indusre.com/agentimg/${agent.client_user_image}`
                      }
                      alt="agents"
                      onError={(e) => {
                        setErrorImgs([...erroImgs, agent.client_user_id]);
                      }}
                    />
                  </Link>
                </div>
                <div
                  className="feature-content pt20 pl15 pb15"
                  style={{
                    borderRight: "1px solid rgb(20 32 46 / 17%)",
                    borderLeft: "1px solid rgb(20 32 46 / 17%)",
                    borderBottom: "1px solid rgb(20 32 46 / 17%)",
                    background: "#14202e0d",
                    height: "11rem",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  <h6 className="title mb-1">
                    <Link href={`/agent/${agent.client_user_id}`}>
                      {agent.client_user_name}
                    </Link>
                  </h6>
                  <p className="text fz15 mb0">
                    {agent.client_user_designation}
                  </p>
                  {agent.client_user_brn != "" &&
                  agent.client_user_brn != null ? (
                    <p className="text mb0">BRN :{agent.client_user_brn}</p>
                  ) : (
                    <></>
                  )}

                  <p className="text mb0">Mobile :{agent.client_user_phone}</p>
                  <p className="text mb0">Email :{agent.client_user_email}</p>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default AllAgents;
