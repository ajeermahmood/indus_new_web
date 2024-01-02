"use client";
import Image from "next/image";
import Link from "next/link";
import AppWidget from "./AppWidget";
import ContactMeta from "./ContactMeta";
import Copyright from "./Copyright";
import MenuWidget from "./MenuWidget";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="footer-widget light-style mb-4 mb-lg-5">
              <Link className="footer-logo" href="/">
                <Image
                  width={170}
                  height={53}
                  className="mb40"
                  src="https://indusspeciality.com/api/assets/images/logo/indus_updated_logo.webp"
                  alt=""
                />
              </Link>

              <ContactMeta />
            </div>
          </div>

          <MenuWidget />

          <div className="col-sm-6 col-lg-3">
            <div className="footer-widget mb-4 mb-lg-5 ps-lg-3">
              <div className="mailchimp-widget mb30">
                <h6 className={`title mb30 text-blue-gray`}>
                  Keep Yourself Up to Date
                </h6>
                <Subscribe />
              </div>

              <AppWidget />
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <Copyright />
      {/* End copyright */}
    </>
  );
};

export default Footer;
