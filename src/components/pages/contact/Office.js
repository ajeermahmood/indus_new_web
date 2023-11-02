import Image from "next/image";
import React from "react";

const Office = () => {
  const offices = [
    {
      id: 1,
      city: "Head Office",
      icon: "/images/office/bur-dubai.webp",
      address:
        "Office 203, Al Sharafi Building, Bur Dubai, 118163, Dubai, UAE.",
      phoneNumber: "800 INDUS (46387)",
      map: "https://maps.app.goo.gl/fNb9PAT1LRZcC8yJ8",
    },
    {
      id: 2,
      city: "DMCC Branch",
      icon: "/images/office/almas-tower.webp",
      address: "4H Almas Tower, Jumeirah Lake Towers (Cluster G), Dubai, UAE",
      phoneNumber: "800 INDUS (46387)",
      map: "https://maps.app.goo.gl/62EUgrrPQ7rSP2bZ8",
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
              <a
                target="_blank"
                className="text-decoration-underline"
                href={office.map}
              >
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
