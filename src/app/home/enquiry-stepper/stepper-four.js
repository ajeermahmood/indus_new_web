"use client";

const StepperFour = ({ activeStep }) => {
  return (
    <div className="h20rem">
      <div
        className="d-flex justify-content-between"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <span className="fz19 fw500">
          Specify the range of a preferred budget (in AED)
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
        <div className="col-4 bdr-grey mxw240 justify-content-center h50 d-flex align-items-center">
          <span className="fz17 fw500 clr-grey">1.5M - 3M</span>
        </div>
        <div className="col-4 bdr-grey mxw240 justify-content-center h50 d-flex align-items-center">
          <span className="fz17 fw500 clr-grey">3M - 5M</span>
        </div>
        <div className="col-4 bdr-grey mxw240 justify-content-center h50 d-flex align-items-center">
          <span className="fz17 fw500 clr-grey">5M - 8M</span>
        </div>
      </div>
      <div
        className="col-12 d-flex w-100 mt20 justify-content-between"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <div className="col-4 bdr-grey mxw240 justify-content-center h50 d-flex align-items-center">
          <span className="fz17 fw500 clr-grey">Above 8M</span>
        </div>
      </div>
    </div>
  );
};

export default StepperFour;
