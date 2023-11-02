"use client";
import React, { useState } from "react";
import Image from "next/image";

const SingleAgentInfo = ({ agent }) => {
  const [erroImgs, setErrorImgs] = useState([]);
  const agentData = {
    id: 1,
    name: agent.client_user_name,
    phoneNumber: agent.client_user_phone,
    email: agent.client_user_email,
    socialMedia: ["linkedin"],
  };

  return (
    <div className="agent-single d-sm-flex align-items-center bdrb1 mb30 pb25">
      <div className="single-img mb30-sm">
        <Image
          width={90}
          height={90}
          className="w90"
          src={
            erroImgs.includes(agent.client_user_id)
              ? "/images/agents/demo.png"
              : `https://www.indusre.com/agentimg/${agent.client_user_image}`
          }
          alt="agent"
          onError={(e) => {
            setErrorImgs([...erroImgs, agent.client_user_id]);
          }}
        />
      </div>
      <div className="single-contant ml30 ml0-xs">
        <h6 className="title mb-1">{agentData.name}</h6>
        <div className="agent-meta mb10 d-md-flex align-items-center">
          <a
            className="text fz15 pe-2 bdrr1"
            href={`tel:${agentData.phoneNumber}`}
          >
            <i className="flaticon-call pe-1 ps-1" />
            {agentData.phoneNumber}
          </a>
          <a
            className="text fz15 pe-2 bdrr1"
            href={`mailto:${agentData.email}`}
          >
            <i className="flaticon-email pe-1 ps-1" />
            {agentData.email}
          </a>

          <a
            className="text fz15 ps-2"
            target="_blank"
            href={`https://wa.me/${agentData.phoneNumber}`}
          >
            <i className="flaticon-whatsapp pe-1" />
            WhatsApp
          </a>
        </div>
        <div className="agent-social">
          {agentData.socialMedia.map((social, index) => (
            <a
              target="_blank"
              key={index}
              className="mr20"
              href={agent.client_user_linkedin}
            >
              <i className={`fab fa-${social}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleAgentInfo;
