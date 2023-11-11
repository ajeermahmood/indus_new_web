"use client";

import Image from "next/image";

const StepperOne = ({ activeStep }) => {
  return (
    <>
      <div
        className="d-flex justify-content-between"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <span className="fz19 fw500">
          What is your primary goal for this property?
        </span>
        <span>
          <b className="clr-green mr5">{Math.ceil((activeStep / 6) * 100)}%</b> Completed
        </span>
      </div>
      <div
        className="col-12 d-flex w-100 mt20 justify-content-between"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <div className="col-4 bdr-grey mxw240">
          <Image
            src="/images/locations/arabian-ranches.webp"
            alt="img"
            className="w-100 cover"
            width={240}
            height={250}
          />
          <div className="px10 py15">
            <p className="lh-sm m-0 fw600 fz13 clr-grey">
              Seeking long-term rental income
            </p>
          </div>
        </div>
        <div className="col-4 bdr-grey mxw240">
          <Image
            src="/images/locations/arabian-ranches.webp"
            alt="img"
            className="w-100 cover"
            width={240}
            height={250}
          />
          <div className="px10 py15">
            <p className="lh-sm m-0 fw600 fz13 clr-grey">
              Capital appreciation and resale potential
            </p>
          </div>
        </div>
        <div className="col-4 bdr-grey mxw240">
          <Image
            src="/images/locations/arabian-ranches.webp"
            alt="img"
            className="w-100 cover"
            width={240}
            height={250}
          />
          <div className="px10 py15">
            <p className="lh-sm m-0 fw600 fz13 clr-grey">
              Personal use as a vacation home or residence
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepperOne;
