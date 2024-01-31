"use client";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const ScheduleEvent = () => {
  return (
    <div className="ps-navtab">
      <div className="tab-content" id="pills-tabContent">
        <form
          className="form-style1"
          method="POST"
          action="https://www.indus-inhouse.com/lead-api-v2"
        >
          <input value="5f41397a7ff24" name="campaign" type="hidden" />
          <input value="sale" name="lead_type" type="hidden" />
          <input value="apartment" name="property_type" type="hidden" />
          <input value="lp" name="source" type="hidden" />

          <div className="row">
            <div className="col-lg-12">
              <div class="form-group">
                <div className="mb20">
                  <label className="heading-color ff-heading fw600 mb10">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div class="form-group">
                <div className="mb20">
                  <label className="heading-color ff-heading fw600 mb10">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div class="form-group">
                <div className="mb20">
                  <label className="heading-color ff-heading fw600 mb10">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="recipient-email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <span>Will you be interested in attending the Event?</span>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                  className="mt5"
                >
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
              <span>Your Earliest time of Arrivals on 18th Feb&apos;24?</span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker label="Pick a time" className="w-100 mt5" />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="col-lg-12 mt15">
              <div class="form-group">
                <div className="mb20">
                  <label className="heading-color ff-heading fw600 mb10">
                    Special Requests
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    class="form-control"
                    id="recipient-email"
                    placeholder="Requests.."
                    required
                    style={{
                      height: "150px",
                    }}
                  />
                </div>
              </div>
            </div>
            {/* <ReCaptcha ref={captcha} /> */}
            <div className="d-grid mt20">
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
