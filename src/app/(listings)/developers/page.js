import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FilteringAgency from "@/components/property/FilteringAgency";

import React from "react";

export const metadata = {
  title: "Explore the Leading Real Estate Developers in Dubai, UAE | Find Your Dream Property",
  description: `Explore a comprehensive list of major real estate developers in Dubai, UAE. Find trusted developers known for 
                quality projects and innovative designs. Discover your dream property with our curated directory.`,
};
const Agency = () => {
  return (
    <>
     <link
        rel="canonical"
        href="https://www.indusre.com/developers"
        key="canonical"
      />
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
                <h1 className="title">Discover Top Real Estate Developers in Dubai, UAE</h1>
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
