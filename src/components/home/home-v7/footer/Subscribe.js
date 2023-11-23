"use client";

import CommonThanksDialog from "@/components/common/common-thanks-dialog";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";

const Subscribe = () => {
  const ref = useRef();
  const emailRegex = /^((\w+\.)*\w+)@(\w+\.)+(\w)/;
  const [formErrorEmail, setFormErrorEmail] = useState(undefined);
  const [textFieldValue, setTextFieldValue] = useState("");
  const onTextChange = (event) => {
    setTextFieldValue(event.target.value);
    if (!event.target.value.match(emailRegex)) {
      setFormErrorEmail("Enter Valid Email");
    } else if (event.target.value == "") {
      setFormErrorEmail("Please Enter Email");
    } else {
      setFormErrorEmail(false);
    }
  };

  const submit = () => {
    ref.current.handleOpen();
    setTextFieldValue("");
    setFormErrorEmail(undefined);
  };
  return (
    <>
      <CommonThanksDialog ref={ref} />
      <div className="d-flex">
        <TextField
          value={textFieldValue}
          error={formErrorEmail != false && formErrorEmail != undefined}
          type="email"
          className="form-control text-dark"
          placeholder="Your Email"
          helperText={formErrorEmail}
          onChange={(e) => onTextChange(e)}
        />
        <Button
          variant="outlined"
          color="success"
          className="ml5"
          disabled={formErrorEmail !== false}
          onClick={submit}
        >
          <span className="flaticon-send fz20"></span>
        </Button>
      </div>
    </>
    // <div className="mailchimp-style1 at-home4 white-version">

    // </div>
  );
};

export default Subscribe;
