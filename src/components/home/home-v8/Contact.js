"use client";
import ReCaptcha from "@/app/contact/recaptcha";
import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Contact Number
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Your Number"
              required
            />
          </div>
        </div>
        {/* End .col */}

        {/* End .col */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Message
            </label>
            <textarea
              cols={30}
              rows={4}
              placeholder="Type the message"
              defaultValue={""}
            />
          </div>
        </div>
        <ReCaptcha />
        {/* End .col */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-dark">
              Submit
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default Contact;
