"use client";
import React from "react";
import Link from "next/link";

const FindHomeBlock = ({ blocks, type }) => {
  return (
    <>
      {blocks.map((block, index) => (
        <div className="col-sm-6" key={index}>
          <Link href={`${type}#${block.link}`}>
            <div className="iconbox-style6 cursor-pointer">
              <span className={`icon ${block.icon}`} />
              <h3 className="title mb-1">{block.number}</h3>
              <h6 className="subtitle fz30 text-blue-gray">{block.subtitle}</h6>
              {/* <p className="iconbox-text">{block.text}</p> */}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindHomeBlock;
