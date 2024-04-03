"use client";
import ReCaptcha from "@/app/contact/recaptcha";
import { useRef } from "react";
import Select from "react-select";

const CareerForm = () => {
  const captcha = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission

    console.log(event);
  };
  const personalRole = [
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
    { value: "Miss", label: "Miss." },
  ];
  const experience = [
    { value: "0-2", label: "0-2 Years" },
    { value: "2-5", label: "2-5 Years" },
    { value: "above-5", label: "Above 5 Years" },
  ];

  const experienceInt = [
    { value: "0-2", label: "0-2 Years" },
    { value: "2-5", label: "2-5 Years" },
    { value: "above-5", label: "Above 5 Years" },
  ];

  const license = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const heared = [
    { value: "google", label: "Google" },
    { value: "linkdln", label: "Linkdln" },
    { value: "social-media", label: "Social Media" },
    { value: "other", label: "Other" },
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

  return (
    <form className="form-style1 inquery_form" onSubmit={handleSubmit}>
      <div className="row">
        {/* <div className="col-md-12">
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
        </div> */}
        {/* End .col */}

        <div className="col-md-3">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Personel Role</label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[personalRole[0]]}
                name="colors"
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
        {/* End .col */}

        <div className="col-md-9">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Personel Name</label>
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
            <label className="form-label fw600 dark-color">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="johndue@gmail.com"
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">Mobile Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="+971 524576956"
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">
              Real Estate Experience In UAE
            </label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[experience[0]]}
                name="colors"
                options={experience}
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
        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">
              International Real Estate Market Experience
            </label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[experienceInt[0]]}
                name="colors"
                options={experienceInt}
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

        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">
              Do you have driver&apos;s license?
            </label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[license[0]]}
                name="colors"
                options={license}
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
        <div className="col-md-12">
          <div className="mb20">
            <label className="form-label fw600 dark-color">
              How did you hear about us?
            </label>
            <div className="bootselect-multiselect">
              <Select
                defaultValue={[heared[0]]}
                name="colors"
                options={heared}
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
        <label className="form-label fw600 dark-color">
          Upload Your CV/Resume
        </label>
        <div className="col-md-4">
          <div className="mb20">
            <input type="file" accept="*/*" className="" required />
          </div>
        </div>

        {/* <ReCaptcha ref={captcha}/> */}

        <div className="d-grid mt20">
          <button className="ud-btn btn-thm" type="submit">
            Submit <i className="fal fa-arrow-right-long" />
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default CareerForm;
