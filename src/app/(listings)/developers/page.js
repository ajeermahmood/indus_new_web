import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FilteringAgency from "@/components/property/FilteringAgency";

import React from "react";

export const metadata = {
  title: "Developers | Indus Real Estate LLC",
};

const Agency = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section pt130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">UAE Real Estate Developers</h2>
                <div className="breadcumb-list">
                  <h6>
                    Dive into the world of premier real estate developers in the
                    UAE, crafting iconic destinations.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Agent Section Area */}
      <FilteringAgency />

      {/* End Agent Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Agency;
