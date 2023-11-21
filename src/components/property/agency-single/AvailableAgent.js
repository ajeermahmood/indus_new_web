"use client";
import agents from "@/data/agents";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AvailableAgent = ({ similarAgents }) => {
  const [erroImgs, setErrorImgs] = useState([]);
  return (
    <>
      {similarAgents.map((agent) => (
        <div className="col-sm-6 col-md-4" key={agent.client_user_id}>
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
            <div className="feature-content pt20">
              <h6 className="title mb-1">
                <Link href={`/agent/${agent.client_user_id}`}>
                  {agent.client_user_name}
                </Link>
              </h6>
              <p className="text fz15">{agent.client_user_designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AvailableAgent;
