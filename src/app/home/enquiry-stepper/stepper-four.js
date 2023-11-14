"use client";

const StepperFour = ({ activeStep, functions }) => {
  const selectCard = (index) => {
    functions.setselectedFour(index);
  };

  const card = [
    {
      text: "1.5M - 3M",
    },
    {
      text: "3M - 5M",
    },
    {
      text: "5M - 8M",
    },
  ];
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
          <b className="clr-green mr5">{Math.ceil((activeStep / 6) * 100)}%</b>{" "}
          Completed
        </span>
      </div>
      <div
        className="col-12 d-flex w-100 mt20 justify-content-between"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        {card.map((c, index) =>
          functions.selectedFour == index ? (
            <div
              key={index}
              onClick={() => selectCard(index)}
              className="col-4 stepper-card-amt-active"
            >
              <span className="fz17 fw500 text-indus">{c.text}</span>
            </div>
          ) : (
            <div
              key={index}
              onClick={() => selectCard(index)}
              className="col-4 stepper-card-amt"
            >
              <span className="fz17 fw500 clr-grey">{c.text}</span>
            </div>
          )
        )}
      </div>
      <div
        className="col-12 d-flex w-100 mt20 justify-content-between"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        {functions.selectedFour == 3 ? (
          <div
            onClick={() => selectCard(3)}
            className="col-4 stepper-card-amt-active"
          >
            <span className="fz17 fw500 text-indus">Above 8M</span>
          </div>
        ) : (
          <div
            onClick={() => selectCard(3)}
            className="col-4 stepper-card-amt"
          >
            <span className="fz17 fw500 clr-grey">Above 8M</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperFour;
