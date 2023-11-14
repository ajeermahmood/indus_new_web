"use client";

import Image from "next/image";

const StepperOne = ({ activeStep, functions }) => {
  const selectCard = (index) => {
    functions.setselectedOne(index);
  };

  const card = [
    {
      img: "/images/locations/arabian-ranches.webp",
      text: "Seeking long-term rental income",
    },
    {
      img: "/images/locations/arabian-ranches.webp",
      text: "Capital appreciation and resale potential",
    },
    {
      img: "/images/locations/arabian-ranches.webp",
      text: "Personal use as a vacation home or residence",
    },
  ];
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
          functions.selectedOne == index ? (
            <div
              className="col-4 stepper-card-active"
              key={index}
              onClick={() => selectCard(index)}
            >
              <Image
                src={c.img}
                alt="img"
                className="w-100 cover p5"
                width={240}
                height={250}
              />
              <div className="px10 py15">
                <p className="lh-sm m-0 fw600 fz13 text-indus">{c.text}</p>
              </div>
            </div>
          ) : (
            <div
              className="col-4 stepper-card"
              key={index}
              onClick={() => selectCard(index)}
            >
              <Image
                src={c.img}
                alt="img"
                className="w-100 cover"
                width={240}
                height={250}
              />
              <div className="px10 py15">
                <p className="lh-sm m-0 fw600 fz13 clr-grey">{c.text}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default StepperOne;
