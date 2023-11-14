"use client";

import Image from "next/image";

const StepperTwo = ({ activeStep, functions }) => {
  const selectCard = (index) => {
    functions.setselectedTwo(index);
  };

  const card = [
    {
      img: "/images/locations/arabian-ranches.webp",
      text: "Apartment",
    },
    {
      img: "/images/locations/arabian-ranches.webp",
      text: "Townhouse",
    },
    {
      img: "/images/locations/arabian-ranches.webp",
      text: "Villa",
    },
  ];
  return (
    <>
      <div
        className="d-flex justify-content-between mb20"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <span className="fz19 fw500">Choose your preferred property type?</span>
        <span>
          <b className="clr-green mr5">{Math.ceil((activeStep / 6) * 100)}%</b>{" "}
          Completed
        </span>
      </div>
      <div className="enq-stepper-scroll pr5">
        <div
          className="col-12 d-flex w-100 justify-content-between"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          {card.map((c, index) =>
            functions.selectedTwo == index ? (
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
        <div
          className="col-12 d-flex w-100 mt20 justify-content-between"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          {functions.selectedTwo == 3 ? (
            <div
              className="col-4 stepper-card-active"
              onClick={() => selectCard(3)}
            >
              <Image
                src="/images/locations/arabian-ranches.webp"
                alt="img"
                className="w-100 cover p5"
                width={240}
                height={250}
              />
              <div className="px10 py15">
                <p className="lh-sm m-0 fw600 fz13 text-indus">Mansion</p>
              </div>
            </div>
          ) : (
            <div
              className="col-4 stepper-card"
              onClick={() => selectCard(3)}
            >
              <Image
                src="/images/locations/arabian-ranches.webp"
                alt="img"
                className="w-100 cover"
                width={240}
                height={250}
              />
              <div className="px10 py15">
                <p className="lh-sm m-0 fw600 fz13 clr-grey">Mansion</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StepperTwo;
