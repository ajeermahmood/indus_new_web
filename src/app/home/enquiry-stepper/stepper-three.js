"use client";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiFormControlLabel-root": {
      border: "solid 1px rgba(217,216,230,.55)",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%)",
      borderRadius: "5px",
      margin: "0px",
      marginBottom: "10px",
      paddingRight: "15px",
      paddingLeft: "4px",
      paddingTop: "3px",
      paddingBottom: "3px",
    },
  },
});

const StepperThree = ({ activeStep, functions, size }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    functions.setselectedThree(event.target.value);
  };
  return (
    <div className="h20rem">
      <div
        className={`${size.width > 500 ? 'd-flex' : 'd-block'} justify-content-between`}
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <span className="fz19 fw500">
          Choose a number of bedrooms you are looking for?
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
        className="col-12 d-flex w-100 mt20 justify-content-between"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={functions.selectedThree}
            onChange={handleChange}
            name="radio-buttons-group"
            className={classes.root}
          >
            <FormControlLabel value="1" control={<Radio />} label="1 Bedroom" />
            <FormControlLabel
              value="2-4"
              control={<Radio />}
              label="2 - 4 Bedrooms"
            />
            <FormControlLabel
              value="5+"
              control={<Radio />}
              label="5 + Bedrooms"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default StepperThree;
