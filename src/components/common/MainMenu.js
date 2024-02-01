import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
  residentialPages,
  commercialPages,
  guidesPages,
  morePages,
} from "@/data/navItems";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const property_purpose_param = searchParams.get("ps");
  const property_status_param = searchParams.get("st");
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });

    residentialPages.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("residential");
      }
    });

    commercialPages.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("commercial");
      }
    });

    guidesPages.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("guide");
      }
    });

    blogItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("blog");
      }
    });

    morePages.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("more");
      }
    });
    pageItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("pages");
      }
    });
    propertyItems.forEach((item) =>
      item.subMenuItems.forEach((elm) => {
        if (elm.href.split("/")[1] == pathname.split("/")[1]) {
          setTopMenu("property");
          setSubmenu(item.label);
        }
      })
    );
    listingItems.forEach((item) =>
      item.submenu.forEach((elm) => {
        if (elm.href.split("/")[1] == pathname.split("/")[1]) {
          setTopMenu("listing");
          setSubmenu(item.title);
        }
      })
    );

    if ("developers" == pathname.split("/")[1]) {
      setTopMenu("developers");
    }
    if ("why-indus" == pathname.split("/")[1]) {
      setTopMenu("why-indus");
    }
    if ("contact" == pathname.split("/")[1]) {
      setTopMenu("contact");
    }
    if ("bayz-101" == pathname.split("/")[1]) {
      setTopMenu("bayz-101");
    }
  }, [pathname]);

  const handleActive = (link) => {
    if (link.split("/")[1] == pathname.split("/")[1]) {
      return "menuActive";
    }
  };

  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Home
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {homeItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End homeItems */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={
              pathname == "/all-properties" &&
              property_purpose_param == "residential"
                ? "title menuActive"
                : "title"
            }
          >
            Residential
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {residentialPages.map((item, index) => (
            <li key={index}>
              {pathname == "/all-properties" ? (
                <a
                  className={`${
                    property_status_param == item.value &&
                    property_purpose_param == "residential"
                      ? "menuActive"
                      : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ) : (
                <Link className={`${handleActive(item.href)}`} href={item.href}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </li>
      {/* End Residential Pages */}
      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={
              pathname == "/all-properties" &&
              property_purpose_param == "commercial"
                ? "title menuActive"
                : "title"
            }
          >
            Commercial
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {commercialPages.map((item, index) => (
            <li key={index}>
              {pathname == "/all-properties" ? (
                <a
                  className={`${
                    property_status_param == item.value &&
                    property_purpose_param == "commercial"
                      ? "menuActive"
                      : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ) : (
                <Link className={`${handleActive(item.href)}`} href={item.href}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </li> */}
      {/* End Commercial Pages */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "guide" ? "title menuActive" : "title"}>
            Guides
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {guidesPages.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End Guides Pages */}
      <li className="visible_list dropitem">
        <Link className="list-item" href="/developers">
          <span
            className={topMenu == "developers" ? "title menuActive" : "title"}
          >
            Developers
          </span>
        </Link>
      </li>
      {/* End Developer */}
      {/* <li className="visible_list dropitem">
        <Link className="list-item" href="/why-indus">
          <span
            className={topMenu == "why-indus" ? "title menuActive" : "title"}
          >
            Why Indus
          </span>
        </Link>
      </li> */}
      {/* End why Indus */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "more" ? "title menuActive" : "title"}>
            More
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {morePages.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End More Pages */}
      <li className="visible_list dropitem">
        <Link className="list-item" href="/contact">
          <span className={topMenu == "contact" ? "title menuActive" : "title"}>
            Contact Us
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <div className="d-flex align-items-end">
          <Link
            className="list-item animated-button1 text-light"
            href="/bayz-101"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Invest &amp; Win
          </Link>
        </div>
      </li>
      {/* End contact */}

      {/* <li className="megamenu_style dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "listing" ? "title menuActive" : "title"}>
            Listing
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="row dropdown-megamenu sub-menu">
          {listingItems.map((item, index) => (
            <li className="col mega_menu_list" key={index}>
              <h4 className="title">{item.title}</h4>
              <ul className="sub-menu">
                {item.submenu.map((submenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className={`${handleActive(submenuItem.href)}`}
                      href={submenuItem.href}
                    >
                      {submenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End listings */}

      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={topMenu == "property" ? "title menuActive" : "title"}
          >
            Property
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {propertyItems.map((item, index) => (
            <li key={index} className="dropitem">
              <a href="#">
                <span
                  className={
                    submenu == item.label ? "title menuActive" : "title"
                  }
                >
                  {item.label}
                </span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                {item.subMenuItems.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className={`${handleActive(subMenuItem.href)}`}
                      href={subMenuItem.href}
                    >
                      {subMenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End property Items */}

      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "blog" ? "title menuActive" : "title"}>
            Blog
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {blogItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End blog Items */}

      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "pages" ? "title menuActive" : "title"}>
            Pages
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {pageItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End pages Items */}
    </ul>
  );
};

export default MainMenu;
