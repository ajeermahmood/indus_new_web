import React from "react";

const ScheduleTour = () => {
  const tabs = [
    {
      id: "inperson",
      label: "In Person",
    },
    {
      id: "videochat",
      label: "Video Chat",
    },
  ];

  return (
    <div className="ps-navtab">
      {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id} role="presentation">
            <button
              className={`nav-link${
                tab.id === "inperson" ? " active mr15 mb5-lg" : ""
              }`}
              id={`pills-${tab.id}-tab`}
              data-bs-toggle="pill"
              data-bs-target={`#pills-${tab.id}`}
              type="button"
              role="tab"
              aria-controls={`pills-${tab.id}`}
              aria-selected={tab.id === "inperson" ? "true" : "false"}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul> */}
      {/* End nav-pills */}

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
            <div className="form-group">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="recipient-email"
                  placeholder="Email"
                  required
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
        {tabs.map((tab) => (
          <div
            className={`tab-pane fade${
              tab.id === "inperson" ? " show active" : ""
            }`}
            id={`pills-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`pills-${tab.id}-tab`}
            key={tab.id}
          >
            {/* <form className="form-style1">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Time"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="mb20">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="mb10">
                    <textarea
                      cols={30}
                      rows={4}
                      placeholder="Enter Your Messages"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="d-grid">
                    <button type="submit" className="ud-btn btn-thm">
                      Submit a Tour Request
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </form> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTour;
