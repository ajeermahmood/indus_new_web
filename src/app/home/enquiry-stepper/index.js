"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { useState } from "react";
import StepperFive from "./stepper-five";
import StepperFour from "./stepper-four";
import StepperOne from "./stepper-one";
import StepperSix from "./stepper-six";
import StepperThree from "./stepper-three";
import StepperTwo from "./stepper-two";
import { Checkbox, TextField } from "@mui/material";

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

  const [selectedOne, setselectedOne] = useState();
  const [selectedTwo, setselectedTwo] = useState();
  const [selectedThree, setselectedThree] = useState();
  const [selectedFour, setselectedFour] = useState();
  const [selectedFive, setselectedFive] = useState();

  const stepperFunctions = {
    setselectedOne,
    setselectedTwo,
    setselectedThree,
    setselectedFour,
    setselectedFive,
    selectedOne,
    selectedTwo,
    selectedThree,
    selectedFour,
    selectedFive,
  };

  const getStepper = (step) => {
    switch (step) {
      case 0:
        return (
          <StepperOne activeStep={activeStep} functions={stepperFunctions} />
        );
      case 1:
        return (
          <StepperTwo activeStep={activeStep} functions={stepperFunctions} />
        );
      case 2:
        return (
          <StepperThree activeStep={activeStep} functions={stepperFunctions} />
        );
      case 3:
        return (
          <StepperFour activeStep={activeStep} functions={stepperFunctions} />
        );
      case 4:
        return (
          <StepperFive activeStep={activeStep} functions={stepperFunctions} />
        );
      case 5:
        return <StepperSix activeStep={activeStep} />;
      default:
        break;
    }
  };

  const getCurrentSelection = (active) => {
    switch (active) {
      case 0:
        return selectedOne;
      case 1:
        return selectedTwo;
      case 2:
        return selectedThree;
      case 3:
        return selectedFour;
      case 4:
        return selectedFive;
      default:
        break;
    }
  };

  const getAgentComment_one = (active) => {
    switch (active) {
      case 1:
        return "Apartment, villa or a townhouse, it's a matter of taste.";
      case 2:
        return "All properties are equipped with high-class amenities which provide ultimate level of comfort and harmony.";
      case 3:
        return "We will recommend best options according to your budget.";
      case 4:
        return "Dubai is the city where lifestyles collide.";
      default:
        break;
    }
  };

  const getAgentComment_two = (active) => {
    switch (active) {
      case 1:
        return "Select one option you are interested in.";
      case 2:
        return "Select the preferred size of your property.";
      case 3:
        return "Set the price range that matches your preferred budget.";
      case 4:
        return "Select the lifestyle you'd like to live in Dubai.";
      default:
        break;
    }
  };

  const [tickedPolicy, setTickedPolicy] = useState(false);

  const onSubmit = () => {
    if (
      formErrorName == false &&
      formErrorEmail == false &&
      formErrorNumber == false
    ) {
      setOpen(false);
      setActiveStep(0);
      setselectedOne();
      setselectedTwo();
      setselectedThree();
      setselectedFour();
      setselectedFive();
    }
  };

  const textRegex = /^[a-zA-Z ]*$/;
  const emailRegex = /^((\w+\.)*\w+)@(\w+\.)+(\w)/;
  // const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

  const [formErrorName, setFormErrorName] = useState(false);
  const [formErrorEmail, setFormErrorEmail] = useState(false);
  const [formErrorNumber, setFormErrorNumber] = useState(false);

  const onTextChange = (event, type) => {
    if (type == "name") {
      if (!event.target.value.match(textRegex)) {
        setFormErrorName("Enter Valid Name");
      } else if (event.target.value == "") {
        setFormErrorName("Please Enter Name");
      } else {
        setFormErrorName(false);
      }
    } else if (type == "email") {
      if (!event.target.value.match(emailRegex)) {
        setFormErrorEmail("Enter Valid Email");
      } else if (event.target.value == "") {
        setFormErrorEmail("Please Enter Email");
      } else {
        setFormErrorEmail(false);
      }
    } else if (type == "number") {
      if (event.target.value.length < 10) {
        setFormErrorNumber("Enter Valid Number");
      } else if (event.target.value == "") {
        setFormErrorNumber("Please Enter Number");
      } else {
        setFormErrorNumber(false);
      }
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
          <div className={`${activeStep === 5 ? "col-6" : "col-8"} p-0 pt-1`}>
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
                      disabled={
                        activeStep === 6 ||
                        getCurrentSelection(activeStep) === undefined
                      }
                      className={
                        activeStep !== 6 &&
                        getCurrentSelection(activeStep) !== undefined
                          ? "text-indus"
                          : ""
                      }
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
          <div className={`${activeStep === 5 ? "col-6" : "col-4"} pt-2`}>
            {activeStep != 5 ? (
              <div className="row m-0 p10">
                <div className="col-4 pl0">
                  <Image
                    src="https://www.indusre.com/agentimg/m-b4adb1d6fe7980e40c19e246cf7e9b96.jpg"
                    width={100}
                    height={100}
                    alt="img"
                    className="stepper-avatar cover"
                  />
                  <span className="online-green-dot"></span>
                </div>
                <div className="col-8 d-flex align-items-center pr0">
                  <div>
                    <p className="mb0 fz14 fw600 lh-sm">
                      Aneet Kumar Bhambhani
                    </p>
                    <p className="mb0">Sales Manager</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p60 h-100">
                <TextField
                  error={formErrorName != false}
                  className="w-100 mb15"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  type="text"
                  helperText={formErrorName}
                  onChange={(e) => onTextChange(e, "name")}
                />
                <TextField
                  error={formErrorEmail != false}
                  className="w-100 mb15"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  helperText={formErrorEmail}
                  onChange={(e) => onTextChange(e, "email")}
                />
                <TextField
                  error={formErrorNumber != false}
                  className="w-100 mb15"
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  type="number"
                  helperText={formErrorNumber}
                  onChange={(e) => onTextChange(e, "number")}
                />

                <Button
                  className="w-100 py10"
                  variant="contained"
                  disabled={!tickedPolicy}
                  onClick={onSubmit}
                >
                  Get My Offer
                </Button>

                <div className="mt10">
                  <Checkbox
                    checked={tickedPolicy}
                    onChange={(e) => setTickedPolicy(e.target.checked)}
                  />
                  <span>I agree with the Privacy policy</span>
                </div>
              </div>
            )}
            {activeStep == 1 ||
            activeStep == 2 ||
            activeStep == 3 ||
            activeStep == 4 ? (
              <div className="px20" data-aos="fade-up" data-aos-delay="0">
                <div className="agent-message-chat">
                  <p>{getAgentComment_one(activeStep)}</p>
                  <p>
                    <i>
                      <strong>{getAgentComment_two(activeStep)}</strong>
                    </i>
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EnquiryForm;
