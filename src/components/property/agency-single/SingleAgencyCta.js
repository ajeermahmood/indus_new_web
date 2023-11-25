"use client";
import Image from "next/image";
import { useState } from "react";

const SingleAgencyCta = ({ agent }) => {
  const [erroImgs, setErrorImgs] = useState([]);
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center">
        <div className="single-img mb30-sm">
          <Image
            width={172}
            height={172}
            src={
              erroImgs.includes(agent.client_user_id)
                ? "https://indusspeciality.com/api/assets/images/agents/demo.png"
                : `https://www.indusre.com/agentimg/${agent.client_user_image}`
            }
            style={{ borderRadius: "50%", objectFit: "cover" }}
            alt="agents"
            onError={(e) => {
              setErrorImgs([...erroImgs, agent.client_user_id]);
            }}
          />
        </div>
        {/* End single image */}
        <div className="single-contant ml30 ml0-xs">
          <h2 className="title mb-0 text-white">{agent.client_user_name}</h2>
          <p className="fz15 text-white">
            {agent.client_user_designation} at <b>Indus Real Estate LLC</b>
          </p>
          <div className="agent-meta mb15 d-md-flex align-items-center">
            <a
              className="text fz15 pe-2 ps-2 bdrr1 text-white"
              href={`tel:${agent.client_user_phone}`}
            >
              <i className="flaticon-call pe-1" />
              {agent.client_user_phone}
            </a>
            <a
              className="text fz15 pe-2 ps-2 bdrr1 text-white"
              href={`mailto:${agent.client_user_email}`}
            >
              <i className="flaticon-email pe-1" />
              {agent.client_user_email}
            </a>
            <a
              className="text fz15 bg-light px10 py5 ml10 rounded d-flex"
              target="_blank"
              href={`https://wa.me/${agent.client_user_phone}`}
            >
              <i className="flaticon-whatsapp text-success pe-1 fz20" />
              <span className="text-success"><b>Whatsapp</b></span>
              
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAgencyCta;
