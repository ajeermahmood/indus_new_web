import React from "react";

const FindHomeBlock = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => (
        <div className="col-sm-6" key={index}>
          <div className="iconbox-style6">
            <span className={`icon ${block.icon}`} />
            <h3 className="title mb-1">{block.number}</h3>
            <h6 className="subtitle fz30 text-blue-gray">{block.subtitle}</h6>
            {/* <p className="iconbox-text">{block.text}</p> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default FindHomeBlock;
