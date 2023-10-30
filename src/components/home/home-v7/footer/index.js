"use client";
import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="footer-widget light-style mb-4 mb-lg-5">
              <Link className="footer-logo" href="/">
                <Image
                  width={100}
                  height={40}
                  className="mb40"
                  src="/images/logo/indus-logo-2.png"
                  alt=""
                />
              </Link>

              <ContactMeta path={path} />
            </div>
          </div>

          <MenuWidget path={path} />

          <div className="col-sm-6 col-lg-3">
            <div className="footer-widget mb-4 mb-lg-5 ps-lg-3">
              <div className="mailchimp-widget mb30">
                <h6
                  className={`title mb30 ${
                    path != "/" ? "text-blue-gray" : ""
                  }`}
                >
                  Keep Yourself Up to Date
                </h6>
                <Subscribe />
              </div>

              <AppWidget path={path} />
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <Copyright path={path} />
      {/* End copyright */}
    </>
  );
};

export default Footer;
