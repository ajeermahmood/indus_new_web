import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Apartments for rent in UAE", href: "/search-results?st=rent&t=1" },
        { label: "Studios for sale in UAE", href: "/search-results?st=buy&t=All&bdo=-1" },
        { label: "Studios for sale in DAMAC Hills", href: "/search-results?st=buy&t=All&bdo=-1&lc=3" },
        { label: "Villas for rent in UAE", href: "/search-results?st=rent&t=2" },
        { label: "Apartments for sale in UAE", href: "/search-results?st=buy&t=1" },
        { label: "Villas for sale in UAE", href: "/search-results?st=buy&t=2" },
        { label: "Office for rent in UAE", href: "/search-results?st=rent&t=26" },
      ],
    },

    {
      title: "Discover",
      links: [
        { label: "Dubai Creek", href: "/search-results?st=all&lc=55" },
        { label: "Jumeirah Village Circle", href: "/search-results?st=all&lc=463" },
        { label: "Business Bay", href: "/search-results?st=all&lc=44" },
        { label: "The Valley", href: "/search-results?st=all&lc=134" },
        { label: "Dubai Hills", href: "/search-results?st=all&lc=60" },
        { label: "Dubailand", href: "/search-results?st=all&lc=74" },
      ],
    },
  ];

  const menuSections2 = [
    {
      title: "Popular Areas",
      links: [
        { label: "Apartments for sale in Dubai Hills", href: "/search-results?st=buy&t=1&lc=60" },
        { label: "Apartments for sale in Downtown Dubai", href: "/search-results?st=buy&t=1&lc=50" },
        { label: "Villas for rent in Dubai Hills", href: "/search-results?st=rent&t=2&lc=60" },
        { label: "Apartment for sale in Dubai Marina", href: "/search-results?st=buy&t=1&lc=65" },
        { label: "Apartments for sale in Dubai", href: "/search-results?st=buy&t=1" },
        { label: "Townhouse for sale in Arabian Ranches 3", href: "/search-results?st=buy&t=3&lc=38" },
        { label: "Apartment for rent in Town Square", href: "/search-results?st=rent&t=1&lc=140" },
      ],
    },

    {
      title: "Quick Links",
      links: [
        { label: "Contact", href: "/contact" },
        // { label: "Our Services", href: "#" },
        { label: "About Us", href: "/about-company" },
        { label: "Our Team", href: "/team" },
        { label: "Blogs", href: "/all-news" },
        { label: "Partners", href: "/developers" },
        { label: "Community Guides", href: "/all-community-guides" },
        // { label: "Careers", href: "#" },
        // { label: "FAQs", href: "#" },
      ],
    },
  ];

  return (
    <>
      <div className="col-sm-6 col-lg-3">
        {menuSections.map((section, index) => (
          <div className="footer-widget mb-4 mb-lg-5 ps-0 ps-lg-3" key={index}>
            <div className="link-style1 light-style mb30 ">
              <h6 className={`mb7 text-blue-gray`}>
                {section.title}
              </h6>
              <ul className="link-list ps-0">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      className={`text-light`}
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
              <h6 className={`mb7 text-blue-gray`}>
                {section.title}
              </h6>
              <ul className="link-list ps-0">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      className={`text-light`}
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
