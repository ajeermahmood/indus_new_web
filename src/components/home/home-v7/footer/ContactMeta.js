import React from "react";

const ContactMeta = () => {
  const contactInfoData = [
    {
      text: "Head Office",
      info: "Office 203, Al Sharafi Building, Bur Dubai, 118163, Dubai, UAE.",
      link: "https://maps.app.goo.gl/fNb9PAT1LRZcC8yJ8", // Empty link value for the first object
    },
    {
      text: "DMCC Branch",
      info: "4H Almas Tower, Jumeirah Lake Towers (Cluster G), Dubai, UAE",
      link: "https://maps.app.goo.gl/62EUgrrPQ7rSP2bZ8", // Empty link value for the first object
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
          <p className={`fw600 text mb5 text-blue-gray`}>
            {contact.text}
          </p>
          {contact.link.startsWith("mailto:") ? (
            <h6 className="info-mail">
              <a
                className={`fw400 text-light`}
                href={contact.link}
              >
                {contact.info}
              </a>
            </h6>
          ) : (
            <h6 className="info-phone">
              <a
                className={`fw400 text-light`}
                target={
                  contact.text == "Head Office" || contact.text == "DMCC Branch"
                    ? "_blank"
                    : "_self"
                }
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
