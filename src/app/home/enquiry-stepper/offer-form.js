"use client";

import { Button, Checkbox, TextField } from "@mui/material";
import { useState } from "react";

const OfferForm = () => {
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

      setFormErrorName(undefined);
      setFormErrorEmail(undefined);
      setFormErrorNumber(undefined);
    } else if (formErrorName == undefined) {
      setFormErrorName("Please Enter Name");
    } else if (formErrorEmail == undefined) {
      setFormErrorEmail("Please Enter Email");
    } else if (formErrorNumber == undefined) {
      setFormErrorNumber("Please Enter Number");
    }
  };
  return (
    <>
      <TextField
        error={formErrorName != false && formErrorName != undefined}
        className="w-100 mb15"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        helperText={formErrorName}
        onChange={(e) => onTextChange(e, "name")}
      />
      <TextField
        error={formErrorEmail != false && formErrorEmail != undefined}
        className="w-100 mb15"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        helperText={formErrorEmail}
        onChange={(e) => onTextChange(e, "email")}
      />
      <TextField
        error={formErrorNumber != false && formErrorNumber != undefined}
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
    </>
  );
};

export default OfferForm;
