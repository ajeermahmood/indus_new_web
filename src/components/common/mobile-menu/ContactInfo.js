import React from "react";

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Customer Care",
      phone: "800 INDUS (46387)",
      phoneHref: "tel:+971080046387", // Updated phoneHref to use "tel" URI
    },
    {
      id: 2,
      title: "Need Live Support?",
      email: "info@indusre.ae",
      emailHref: "mailto:info@indusre.ae", // Updated emailHref to use "mailto" URI
    },
  ];

  return (
    <>
      {contactInfo.map((info) => (
        <div className="col-auto" key={info.id}>
          <div className="contact-info">
            <p className="info-title dark-color">{info.title}</p>
            {info.phone && (
              <p className="info-phone dark-color">
                <a href={info.phoneHref}>{info.phone}</a>
              </p>
            )}
            {info.email && (
              <p className="info-mail dark-color">
                <a href={info.emailHref}>{info.email}</a>
              </p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
