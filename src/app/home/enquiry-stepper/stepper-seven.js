"use client";

import OfferForm from "./offer-form";

const StepperSeven = ({ activeStep, size, handleFunctions }) => {
  return (
    <>
      {/* <div
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
      </div> */}
      <div
        className="w-100 h20rem d-flex align-items-center"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <div className="w-100">
          <div className="stepper-progress-finished">
            <span className="part-1"></span>
          </div>
          <span className="stepper-progres-finished-perc">
            <b>{Math.ceil((activeStep / 6) * 100)}%</b>
          </span>
          <h4 className="mt20">
            Great, You have completed the enquiry. Thanks for your time.
          </h4>
        </div>
      </div>
      {size.width < 500 ? (
        <OfferForm handleFunctions={handleFunctions} />
      ) : (
        <></>
      )}
    </>
  );
};

export default StepperSeven;
