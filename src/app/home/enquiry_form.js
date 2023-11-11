"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import StepperFive from "./enquiry-stepper/stepper-five";
import StepperFour from "./enquiry-stepper/stepper-four";
import StepperOne from "./enquiry-stepper/stepper-one";
import StepperSix from "./enquiry-stepper/stepper-six";
import StepperThree from "./enquiry-stepper/stepper-three";
import StepperTwo from "./enquiry-stepper/stepper-two";

const useStyles = makeStyles({
  root: {
    "& .MuiLinearProgress-root": {
      height: "15px",
      borderRadius: "5px",
      backgroundColor: "#dbdbdb",
      "& .MuiLinearProgress-bar": {
        borderRadius: "5px",
        backgroundColor: "#09B07E",
      },
    },
  },
});

const EnquiryForm = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepper = (step) => {
    switch (step) {
      case 0:
        return <StepperOne activeStep={activeStep} />;
      case 1:
        return <StepperTwo activeStep={activeStep} />;
      case 2:
        return <StepperThree activeStep={activeStep} />;
      case 3:
        return <StepperFour activeStep={activeStep} />;
      case 4:
        return <StepperFive activeStep={activeStep} />;
      case 5:
        return <StepperSix activeStep={activeStep} />;
      default:
        break;
    }
  };

  return (
    <>
      <div className="enq-btn" onClick={handleClickOpen}>
        Get a free consultation
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"lg"}
      >
        <div className="col-12 row m-0 enq-form">
          <div className={`${activeStep === 5 ? 'col-6' : 'col-8'} p-0 pt-1`}>
            <div className="app-bar d-flex">
              <svg viewBox="0 0 24 24" className="app-bar-icon">
                <title>mdi-file-document-box-check-outline</title>
                <path
                  fill-rule="nonzero"
                  stroke-width="0"
                  d="M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3H19C20.11,3 21,3.89 21,5V12.8C20.39,12.45 19.72,12.2 19,12.08V5H5V19H12.08C12.2,19.72 12.45,20.39 12.8,21M12,17H7V15H12M14.68,13H7V11H17V12.08C16.15,12.22 15.37,12.54 14.68,13M17,9H7V7H17"
                ></path>
              </svg>

              <span className="ml10 clr-grey fw600">
                Let&apos;s find your ideal property in Dubai
              </span>
            </div>
            <div className="stepper">{getStepper(activeStep)}</div>
            <div className="stepper-progress">
              {activeStep === 5 ? (
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  className={activeStep !== 0 ? "text-indus" : ""}
                >
                  {theme.direction === "rtl" ? (
                    <i className="mr5 far fa-chevron-right"></i>
                  ) : (
                    <i className="mr5 far fa-chevron-left"></i>
                  )}
                  Back
                </Button>
              ) : (
                <MobileStepper
                  variant="progress"
                  steps={7}
                  position="static"
                  activeStep={activeStep}
                  className={classes.root}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === 6}
                      className={activeStep !== 6 ? "text-indus" : ""}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <i className="ml5 far fa-chevron-left"></i>
                      ) : (
                        <i className="ml5 far fa-chevron-right"></i>
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                      className={activeStep !== 0 ? "text-indus" : ""}
                    >
                      {theme.direction === "rtl" ? (
                        <i className="mr5 far fa-chevron-right"></i>
                      ) : (
                        <i className="mr5 far fa-chevron-left"></i>
                      )}
                      Back
                    </Button>
                  }
                />
              )}
            </div>
          </div>
          <div className={`${activeStep === 5 ? 'col-6' : 'col-4'} pt-2`}></div>
        </div>
      </Dialog>
    </>
  );
};

export default EnquiryForm;
