"use client";

import Image from "next/image";

const StepperTwo = ({ activeStep, functions, size }) => {
  const selectCard = (index) => {
    functions.setselectedTwo(index);
  };

  const card = [
    {
      img: "https://indusspeciality.com/api/assets/images/enquiry/apartment.webp",
      text: "Apartment",
    },
    {
      img: "https://indusspeciality.com/api/assets/images/enquiry/townhouse.jpeg",
      text: "Townhouse",
    },
    {
      img: "https://indusspeciality.com/api/assets/images/enquiry/villa.jpg",
      text: "Villa",
    },
  ];

  if (size.width < 500) {
    card.push({
      img: "https://indusspeciality.com/api/assets/images/enquiry/mansion.jpg",
      text: "Mansion",
    });
  }
  return (
    <>
      <div
        className={`${
          size.width > 500 ? "d-flex" : "d-block"
        } justify-content-between mb20`}
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <span className="fz19 fw500">Choose your preferred property type?</span>
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
      <div className="enq-stepper-scroll pr5">
        <div
          className={`${
            size.width > 500 ? "d-flex" : "d-block"
          } col-12 w-100 mt20 justify-content-between`}
          data-aos="fade-up"
          data-aos-delay="0"
        >
          {card.map((c, index) =>
            functions.selectedTwo == index ? (
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
        {size.width > 500 ? (
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
                <img
                  src="https://indusspeciality.com/api/assets/images/enquiry/mansion.jpg"
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
              <div className="col-4 stepper-card" onClick={() => selectCard(3)}>
                <img
                  src="https://indusspeciality.com/api/assets/images/enquiry/mansion.jpg"
                  alt="img"
                  className="w-100 cover"
                  width={240}
                  height={250}
                />
                <div className="px10 py15">
                  <p className="lh-sm m-0 fw600 fz13 clr-blue">Mansion</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default StepperTwo;
