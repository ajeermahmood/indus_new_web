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

const StepperFive = ({ activeStep, functions, size }) => {
  const card = [
    {
      img: "https://indusspeciality.com/api/assets/images/enquiry/urban-living.jpg",
      text: "Urban & Downtown Living",
    },
    {
      img: "https://indusspeciality.com/api/assets/images/enquiry/green-community.jpeg",
      text: "Green Community Living",
    },
    {
      img: "https://indusspeciality.com/api/assets/images/enquiry/beach-living.jpg",
      text: "Beachfront & Waterfront Living",
    },
  ];

  const selectCard = (index) => {
    functions.setselectedFive(index);
  };
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
          Choose a lifestyle that best suits you
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
          functions.selectedFive == index ? (
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
