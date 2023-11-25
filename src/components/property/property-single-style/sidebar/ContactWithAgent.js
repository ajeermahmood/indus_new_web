"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactWithAgent = ({ agent }) => {
  const [erroImgs, setErrorImgs] = useState([]);
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center pb25">
        <div className="single-img mb30-sm">
          <Image
            width={90}
            height={90}
            className="w90"
            src={
              erroImgs.includes(agent.client_user_id)
                ? "https://indusspeciality.com/api/assets/images/agents/demo.png"
                : `https://www.indusre.com/agentimg/${agent.client_user_image}`
            }
            alt="avatar"
            onError={(e) => {
              setErrorImgs([...erroImgs, agent.client_user_id]);
            }}
          />
        </div>
        <div className="single-contant ml20 ml0-xs">
          <h6 className="title mb-1">{agent.client_user_name}</h6>
          <div className="agent-meta mb10 d-md-flex align-items-center">
            <a className="text fz15" href={`tel:${agent.client_user_phone}`}>
              <i className="flaticon-call pe-1" />
              {agent.client_user_phone}
            </a>
          </div>
          <Link
            href={`/agents-properties?id=${agent.client_user_id}&name=${agent.client_user_name}`}
            className="text-decoration-underline fw600"
          >
            View Listings
          </Link>
        </div>
      </div>
      {/* End agent-single */}

      <div className="d-grid">
        <Link
          href={`/agent/${agent.client_user_id}`}
          className="ud-btn btn-white2"
        >
          Contact Agent
          <i className="fal fa-arrow-right-long" />
        </Link>
      </div>
    </>
  );
};

export default ContactWithAgent;
