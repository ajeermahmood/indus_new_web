import React from "react";
import Social from "./Social";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = ({ path }) => {
  return (
    <div className="container gray-bdrt1 py-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center text-lg-start">
            <p
              className={`copyright-text ff-heading mb-0 ${
                path != "/" ? "text-blue-gray" : ""
              }`}
            >
              © {getCurrentYear()}{" "}
              <a
                className={` ${path != "/" ? "text-blue-gray" : ""}`}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indus Real Estate LLC
              </a>{" "}
              - All rights reserved
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6">
          <div className="text-center text-lg-end">
            {path == "/" ? <Social /> : <></>}
          </div>
        </div>
        {/* End .col-sm-6 */}
      </div>
    </div>
  );
};

export default Footer;
