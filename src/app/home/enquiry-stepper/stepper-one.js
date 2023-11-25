"use client";

import Image from "next/image";

const StepperOne = ({ activeStep, functions, size }) => {
  const selectCard = (index) => {
    functions.setselectedOne(index);
  };

  const card = [
    {
      img: "https://indusspeciality.com/api/assets/images/locations/downtown.webp",
      text: "Seeking long-term rental income",
    },
    {
      img: "https://indusspeciality.com/api/assets/images/locations/dubai-img-01.jpg",
      text: "Capital appreciation and resale potential",
    },
    {
      img: "https://indusspeciality.com/api/assets/images/locations/vacation.jpg",
      text: "Personal use as a vacation home or residence",
    },
  ];
  return (
    <>
      <div
        className={`${
          size.width > 500 ? "d-flex" : "d-block"
        } justify-content-between`}
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <span className="fz19 fw500">
          What is your primary goal for this property?
        </span>
        {size.width > 500 ? (
          <>
            <span>
              <b className="clr-green mr5">
                {Math.ceil((activeStep / 6) * 100)}%
              </b>{" "}
              Completed
            </span>
          </>
        ) : (
          <>
            <p className="mt10 text-end">
              <b className="clr-green mr5">
                {Math.ceil((activeStep / 6) * 100)}%
              </b>{" "}
              Completed
            </p>
          </>
        )}
      </div>
      <div
        className={`${
          size.width > 500 ? "d-flex" : "d-block"
        } col-12 w-100 mt20 justify-content-between`}
        data-aos="fade-up"
        data-aos-delay="0"
      >
        {card.map((c, index) =>
          functions.selectedOne == index ? (
            <div
              className={`${
                size.width > 500 ? "col-4" : "col-12 mb10"
              } stepper-card-active`}
              key={index}
              onClick={() => selectCard(index)}
            >
              <img
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
              className={`${
                size.width > 500 ? "col-4" : "col-12 mb10"
              } stepper-card`}
              key={index}
              onClick={() => selectCard(index)}
            >
              <img
                src={c.img}
                alt="img"
                className="w-100 cover"
                width={240}
                height={250}
              />
              <div className="px10 py15">
                <p className="lh-sm m-0 fw600 fz13 clr-blue">{c.text}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default StepperOne;
