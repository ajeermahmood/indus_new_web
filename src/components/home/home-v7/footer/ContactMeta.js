import React from "react";

const ContactMeta = ({ path }) => {
  const contactInfoData = [
    {
      text: "Head Office",
      info: "Office 203, Al Sharafi Building, Bur Dubai, 118163, Dubai, UAE.",
      link: "#", // Empty link value for the first object
    },
    {
      text: "DMCC Branch",
      info: "4H Almas Tower, Jumeirah Lake Towers (Cluster G), Dubai, UAE",
      link: "#", // Empty link value for the first object
    },
    {
      text: "Customer Care",
      info: "800 INDUS (46387)",
      link: "tel:+971080046387",
    },
    {
      text: "Need Live Support?",
      info: "info@indusre.ae",
      link: "mailto:info@indusre.ae",
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoData.map((contact, index) => (
        <div className="contact-info mb25" key={index}>
          <p className={`text mb5 ${path != "/" ? "text-blue-gray" : ""}`}>
            {contact.text}
          </p>
          {contact.link.startsWith("mailto:") ? (
            <h6 className="info-mail">
              <a
                className={`${path != "/" ? "text-light" : ""}`}
                href={contact.link}
              >
                {contact.info}
              </a>
            </h6>
          ) : (
            <h6 className="info-phone">
              <a
                className={`${path != "/" ? "text-light" : ""}`}
                href={contact.link}
              >
                {contact.info}
              </a>
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
