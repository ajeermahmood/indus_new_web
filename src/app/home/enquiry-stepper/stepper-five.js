"use client";

import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Fragment } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const StepperFive = ({ activeStep, functions }) => {
  const card = [
    {
      img: "/images/locations/arabian-ranches.webp",
      text: "Urban & Downtown Living",
    },
    {
      img: "/images/locations/arabian-ranches.webp",
      text: "Green Community Living",
    },
    {
      img: "/images/locations/arabian-ranches.webp",
      text: "Beachfront & Waterfront Living",
    },
  ];

  const selectCard = (index) => {
    functions.setselectedFive(index);
  };
  return (
    <>
      <div
        className="d-flex justify-content-between"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <span className="fz19 fw500">
          Choose a lifestyle that best suits you
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
          functions.selectedFive == index ? (
            <div
              className="col-4 stepper-card-active"
              key={index}
              onClick={() => selectCard(index)}
            >
              <Image
                src="/images/locations/arabian-ranches.webp"
                alt="img"
                className="w-100 cover p5"
                width={240}
                height={250}
              />
              <div className="px10 py15">
                <p className="lh-sm m-0 fw600 fz13 text-indus">{c.text}</p>
              </div>
              <HtmlTooltip
                title={
                  <Fragment>
                    <Typography color="inherit">Modern City Living</Typography>
                    <em>
                      The most obvious of these are roads, but network systems
                      also include sewers, aqueducts, electric lines, and public
                      transit. Human networks are also important, establishing
                      the city&apos;s community and facilitating the
                      dissemination of information. In order for a city to
                      succeed, its networks must be efficient.
                    </em>{" "}
                    <br />
                    <br />
                    Read more about
                    <a href="#">
                      <b>{" modern city living"}</b>
                    </a>
                    .
                  </Fragment>
                }
              >
                <i className="fa fa-info stepper-lifestyle-info"></i>
              </HtmlTooltip>
            </div>
          ) : (
            <div
              className="col-4 stepper-card"
              key={index}
              onClick={() => selectCard(index)}
            >
              <Image
                src="/images/locations/arabian-ranches.webp"
                alt="img"
                className="w-100 cover"
                width={240}
                height={250}
              />
              <div className="px10 py15">
                <p className="lh-sm m-0 fw600 fz13 clr-grey">{c.text}</p>
              </div>
              <HtmlTooltip
                title={
                  <Fragment>
                    <Typography color="inherit">Modern City Living</Typography>
                    <em>
                      The most obvious of these are roads, but network systems
                      also include sewers, aqueducts, electric lines, and public
                      transit. Human networks are also important, establishing
                      the city&apos;s community and facilitating the
                      dissemination of information. In order for a city to
                      succeed, its networks must be efficient.
                    </em>{" "}
                    <br />
                    <br />
                    Read more about
                    <a href="#">
                      <b>{" modern city living"}</b>
                    </a>
                    .
                  </Fragment>
                }
              >
                <i className="fa fa-info stepper-lifestyle-info"></i>
              </HtmlTooltip>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default StepperFive;
