import Image from "next/image";
import React from "react";

const Office = () => {
  const offices = [
    {
      id: 1,
      type: "Head Office",
      city: "Bur Dubai",
      icon: "/images/office/bur-dubai.webp",
      address:
        "Office 203, Al Sharafi Building, Bur Dubai, 118163, Dubai, UAE.",
      phoneNumber: "800 INDUS (46387)",
    },
    {
      id: 2,
      type: "DMCC Branch",
      city: "JLT",
      icon: "/images/office/almas-tower.webp",
      address: "4H Almas Tower, Jumeirah Lake Towers (Cluster G), Dubai, UAE",
      phoneNumber: "800 INDUS (46387)",
    },
    // Add more office objects here...
  ];

  return (
    <>
      {offices.map((office) => (
        <div className="col-sm-6 col-lg-4" key={office.id}>
          <div className="iconbox-style8 text-center">
            <div className="icon">
              <Image width={120} height={120} src={office.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{office.city}</h4>
              <p className="text mb-1">{office.address}</p>
              <h6 className="mb10">{office.phoneNumber}</h6>
              <a className="text-decoration-underline" href="#">
                Open Google Map
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Office;
