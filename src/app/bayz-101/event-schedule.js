"use client";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";

const ScheduleEvent = () => {
  const [arrivalTime, setArrivalTime] = useState(null);

  const handleTimeChange = (newTime) => {
    setArrivalTime(newTime);
  };
  return (
    <div className="ps-navtab">
      <div className="tab-content" id="pills-tabContent">
        <form
          className="form-style1"
          method="POST"
          action="https://www.indus-inhouse.com/lead-api-v3"
        >
          {/* Hidden Fields */}
          <input type="hidden" value="5f41397a7ff24" name="campaign" />
          <input type="hidden" value="sale" name="lead_type" />
          <input type="hidden" value="apartment" name="property_type" />
          <input type="hidden" value="lp" name="source" />

          {/* Form Fields */}
          <div className="row">
            <div className="col-lg-12 mb15">
              {/* Name */}
              <TextField
                label="Name"
                placeholder="Name"
                name="name"
                required
                fullWidth
              />
            </div>

            <div className="col-lg-12 mb15">
              {/* Phone */}
              <TextField
                label="Phone"
                placeholder="Phone"
                name="phone"
                required
                fullWidth
              />
            </div>

            <div className="col-lg-12 mb15">
              {/* Email */}
              <TextField
                label="Email"
                placeholder="Email"
                name="email"
                type="email"
                required
                fullWidth
              />
            </div>

            <div className="col-lg-12">
              {/* RSVP */}
              <span>Will you be interested in attending the Event?</span>
              <FormControl>
                <RadioGroup row defaultValue="yes" name="rsvp" className="mt5">
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="col-lg-12 mt10">
              {/* Time Picker */}
              <span>Your Earliest time of Arrivals on 18th Feb&apos;24?</span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Pick a time"
                  className="w-100 mt5"
                  name="arrival_time"
                  value={arrivalTime}
                  onChange={handleTimeChange}
                  required
                />
              </LocalizationProvider>
            </div>

            <div className="col-lg-12 mt15">
              {/* Special Requests */}
              <TextField
                label="Special Requests"
                placeholder="Requests.."
                name="message"
                multiline
                rows={4}
                fullWidth
              />
            </div>

            <div className="d-grid mt20">
              {/* Submit Button */}
              <button type="submit" className={`ud-btn btn-dark`} name="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleEvent;
