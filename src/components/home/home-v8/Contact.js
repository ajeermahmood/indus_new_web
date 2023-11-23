"use client";
import ReCaptcha from "@/app/contact/recaptcha";
import CommonThanksDialog from "@/components/common/common-thanks-dialog";
import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef();
  const captcha = useRef();
  const textRegex = /^[a-zA-Z ]*$/;
  const emailRegex = /^((\w+\.)*\w+)@(\w+\.)+(\w)/;
  // const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

  const [formErrorName, setFormErrorName] = useState(undefined);
  const [formErrorEmail, setFormErrorEmail] = useState(undefined);
  const [formErrorNumber, setFormErrorNumber] = useState(undefined);

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

  const onSubmit = () => {
    console.log(captcha.current.verified, "captcha success");
    if (
      formErrorName == false &&
      formErrorEmail == false &&
      formErrorNumber == false &&
      captcha.current.verified == true
    ) {
      setFormErrorName(undefined);
      setFormErrorEmail(undefined);
      setFormErrorNumber(undefined);

      ref.current.handleOpen();
    } else if (formErrorName == undefined) {
      setFormErrorName("Please Enter Name");
    } else if (formErrorEmail == undefined) {
      setFormErrorEmail("Please Enter Email");
    } else if (formErrorNumber == undefined) {
      setFormErrorNumber("Please Enter Number");
    }
  };

  return (
    <div className="form-style1">
      <CommonThanksDialog ref={ref} />
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            {/* <label className="heading-color ff-heading fw600 mb10">Name</label> */}
            <TextField
              error={formErrorName != false && formErrorName != undefined}
              className="w-100 "
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              helperText={formErrorName}
              onChange={(e) => onTextChange(e, "name")}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-md-12">
          <div className="mb20">
            <TextField
              error={formErrorEmail != false && formErrorEmail != undefined}
              className="w-100 "
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              helperText={formErrorEmail}
              onChange={(e) => onTextChange(e, "email")}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="mb20">
            <TextField
              error={formErrorNumber != false && formErrorNumber != undefined}
              className="w-100 "
              id="outlined-basic"
              label="Contact Number"
              variant="outlined"
              type="number"
              helperText={formErrorNumber}
              onChange={(e) => onTextChange(e, "number")}
            />
          </div>
        </div>
        {/* End .col */}

        {/* End .col */}

        <div className="col-md-12">
          <div className="mb20">
            <TextField
              // className="mt20"
              margin="dense"
              id="name"
              label="Tell Us.."
              type="text"
              fullWidth
              multiline
              rows={4}
              // variant="standard"
            />
          </div>
        </div>
        <ReCaptcha ref={captcha} />
        {/* End .col */}

        <div className="col-md-12 mt20">
          <div className="d-grid">
            <button className="ud-btn btn-dark" onClick={onSubmit}>
              Submit
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </div>
  );
};

export default Contact;
