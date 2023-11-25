import React from "react";

const Social = () => {
  const socialIcons = [
    {
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/IndusRealEstate",
    },
    {
      icon: "fab fa-twitter",
      link: "https://twitter.com/indusREdubai",
    },
    {
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/indusredubai/",
    },
    {
      icon: "fab fa-linkedin-in",
      link: "https://linkedin.com/company/indusre",
    },
  ];

  return (
    <div className="social-style1 light-style">
      <a className="me-2 fw600 fz15 text-blue-gray" href="#">
        Follow us
      </a>
      {socialIcons.map((iconClass, index) => (
        <a key={index} href={iconClass.link} target="_blank">
          <i className={iconClass.icon + " list-inline-item text-blue-gray"} />
        </a>
      ))}
    </div>
  );
};

export default Social;
