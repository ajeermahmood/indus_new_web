"use client";
import CommonThanksDialog from "@/components/common/common-thanks-dialog";
import { useRef, useState } from "react";

const InqueryForm = () => {
  const captcha = useRef();
  const ref = useRef();

  const inqueryType = [
    { value: "Apartments", label: "Apartments" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Houses", label: "Houses" },
    { value: "Loft", label: "Loft" },
    { value: "Office", label: "Office" },
    { value: "Townhome", label: "Townhome" },
    { value: "Villa", label: "Villa" },
  ];
  const personalRole = [
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
    { value: "Miss", label: "Miss." },
  ];
  const addressed = [
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#2B4257"
          : isHovered
          ? "#88a9c33b"
          : isFocused
          ? "#88a9c33b"
          : undefined,
      };
    },
  };

  const textRegex = /^[a-zA-Z ]*$/;
  const emailRegex = /^((\w+\.)*\w+)@(\w+\.)+(\w)/;
  // const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

  const [formErrorName, setFormErrorName] = useState(undefined);
  const [formErrorEmail, setFormErrorEmail] = useState(undefined);

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");

  const onTextChange = (event, type) => {
    if (type == "name") {
      setFormName(event.target.value);
      if (!event.target.value.match(textRegex)) {
        setFormErrorName("Enter Valid Name");
      } else if (event.target.value == "") {
        setFormErrorName("Please Enter Name");
      } else {
        setFormErrorName(false);
      }
    } else if (type == "email") {
      setFormEmail(event.target.value);
      if (!event.target.value.match(emailRegex)) {
        setFormErrorEmail("Enter Valid Email");
      } else if (event.target.value == "") {
        setFormErrorEmail("Please Enter Email");
      } else {
        setFormErrorEmail(false);
      }
    }
  };

  const submit = () => {
    if (
      formErrorName == false &&
      formErrorEmail == false &&
      captcha.current.verified == true
    ) {
      ref.current.handleOpen();
      setFormErrorName(undefined);
      setFormErrorEmail(undefined);
    } else if (formErrorName == undefined) {
      setFormErrorName("Please Enter Name");
    } else if (formErrorEmail == undefined) {
      setFormErrorEmail("Please Enter Email");
    }
  };

  return (
    <div className="form-style1 inquery_form">
      <CommonThanksDialog ref={ref} />
      {/* <div className="row">
        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Inquiry Type</label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[inqueryType[0]]}
                name="colors"
                isMulti
                options={inqueryType}
                styles={customStyles}
                className="text-start"
                classNamePrefix="select"
                required
                isSearchable={false}
                isClearable={false}
              />
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Personel Role</label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[personalRole[0]]}
                name="colors"
                isMulti
                options={personalRole}
                styles={customStyles}
                className="text-start"
                classNamePrefix="select"
                required
                isSearchable={false}
                isClearable={false}
              />
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Personel Name</label>
            <TextField
              value={formName}
              error={formErrorName != false && formErrorName != undefined}
              margin="dense"
              id="name"
              placeholder="Name"
              type="text"
              fullWidth
              helperText={formErrorName}
              onChange={(e) => onTextChange(e, "name")}
              className="mt0"
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Email</label>
            <TextField
              value={formEmail}
              error={formErrorEmail != false && formErrorEmail != undefined}
              margin="dense"
              id="name"
              placeholder="youremail@example.ae"
              type="email"
              fullWidth
              helperText={formErrorEmail}
              onChange={(e) => onTextChange(e, "email")}
              className="mt0"
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">
              How to address you
            </label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[addressed[0]]}
                name="colors"
                isMulti
                options={addressed}
                styles={customStyles}
                className="text-start"
                classNamePrefix="select"
                required
                isSearchable={false}
                isClearable={false}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Max Price</label>
            <input type="number" className="form-control" placeholder="2000" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb30">
            <label className="form-label fw600 dark-color">
              Min Size (Sq ft)
            </label>
            <input type="number" className="form-control" placeholder={20} />
          </div>
        </div>

        <ReCaptcha ref={captcha} />

        <div className="d-grid mt20">
          <button className="ud-btn btn-thm" onClick={submit}>
            Submit <i className="fal fa-arrow-right-long" />
          </button>
        </div>
      </div> */}
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
    </div>
  );
};

export default InqueryForm;
