import React from "react";

const MenuWidget = ({ path }) => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Studios for sale in DAMAC Hills", href: "#" },
        { label: "Apartments for rent in UAE", href: "#" },
        { label: "Villas for rent in UAE", href: "#" },
        { label: "Apartments for sale in UAE", href: "#" },
        { label: "Villas for sale in UAE", href: "#" },
        { label: "Office for rent in UAE", href: "#" },
      ],
    },

    {
      title: "Discover",
      links: [
        { label: "Dubai Creek", href: "#" },
        { label: "Jumeirah Village Circle", href: "#" },
        { label: "Business Bay", href: "#" },
        { label: "The Valley", href: "#" },
        { label: "Dubai Hills", href: "#" },
        { label: "Dubailand", href: "#" },
      ],
    },
  ];

  const menuSections2 = [
    {
      title: "Popular Areas",
      links: [
        { label: "Apartments for sale in Dubai Hills", href: "#" },
        { label: "Apartments for sale in Downtown Dubai", href: "#" },
        { label: "Villas for rent in Dubai Hills", href: "#" },
        { label: "Apartment for sale in Dubai Marina", href: "#" },
        { label: "Apartments for sale in Dubai", href: "#" },
        { label: "Townhouse for sale in Arabian Ranches 3", href: "#" },
        { label: "Apartment for rent in Town Square", href: "#" },
      ],
    },

    {
      title: "Quick Links",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Our Services", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
  ];

  return (
    <>
      <div className="col-sm-6 col-lg-3">
        {menuSections.map((section, index) => (
          <div className="footer-widget mb-4 mb-lg-5 ps-0 ps-lg-3" key={index}>
            <div className="link-style1 light-style mb30 ">
              <h6 className={`mb7 ${path != "/" ? "text-blue-gray" : ""}`}>
                {section.title}
              </h6>
              <ul className="link-list ps-0">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      className={`${path != "/" ? "text-light" : ""}`}
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="col-sm-6 col-lg-3">
        {menuSections2.map((section, index) => (
          <div className="footer-widget mb-4 mb-lg-5 ps-0 ps-lg-3" key={index}>
            <div className="link-style1 light-style mb30 ">
              <h6 className={`mb7 ${path != "/" ? "text-blue-gray" : ""}`}>
                {section.title}
              </h6>
              <ul className="link-list ps-0">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      className={`${path != "/" ? "text-light" : ""}`}
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuWidget;
