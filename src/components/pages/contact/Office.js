import Image from "next/image";
import React from "react";

const Office = () => {
  const offices = [
    {
      id: 1,
      city: "Head Office",
      icon: "https://indusspeciality.com/api/assets/images/office/bur-dubai.webp",
      address:
        "Office 203, Al Sharafi Building, Bur Dubai, 118163, Dubai, UAE.",
      phoneNumber: "800 INDUS (46387)",
      map: "https://maps.app.goo.gl/fNb9PAT1LRZcC8yJ8",
      mapFrame:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.347636082021!2d55.2955573!3d25.2588886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433c08a17429%3A0xabed067bd72d99ea!2sIndus%20Real%20Estate%20LLC!5e0!3m2!1sen!2sae!4v1700733444276!5m2!1sen!2sae",
    },
    {
      id: 2,
      city: "DMCC Branch",
      icon: "https://indusspeciality.com/api/assets/images/office/almas-tower.webp",
      address: "4H Almas Tower, Jumeirah Lake Towers (Cluster G), Dubai, UAE",
      phoneNumber: "800 INDUS (46387)",
      map: "https://maps.app.goo.gl/62EUgrrPQ7rSP2bZ8",
      mapFrame:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9706586903426!2d55.1412048!3d25.068983600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d04d580eb8d%3A0x8d223d86886fa136!2sIndus%20Real%20Estate%20LLC%20(DMCC%20Branch)!5e0!3m2!1sen!2sae!4v1700733542756!5m2!1sen!2sae",
    },
    // Add more office objects here...
  ];

  return (
    <>
      {offices.map((office) => (
        <div className="col-sm-6 col-lg-4" key={office.id}>
          <div className="iconbox-style8 text-center">
            <div className="icon">
              <iframe
                src={office.mapFrame}
                width={300}
                height={300}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
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
