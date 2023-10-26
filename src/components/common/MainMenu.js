import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
  residentialPages,
  commercialPages,
  guidesPages,
} from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
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
        setTopMenu("guides");
      }
    });

    blogItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("blog");
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
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Residential
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {residentialPages.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End Residential Pages */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Commercial
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {commercialPages.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End Commercial Pages */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
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
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Developers
          </span>
        </a>
       
      </li>
      {/* End Developer */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Why Indus
          </span>
        </a>
       
      </li>
      {/* End Developer */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Contact Us
          </span>
        </a>
       
      </li>
      {/* End Developer */}

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
