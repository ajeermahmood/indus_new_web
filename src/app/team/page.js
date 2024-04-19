import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FilteringAgent from "@/components/property/FilteringAgent";

import React from "react";

export const metadata = {
  title:
    "Meet Our Team of Expert Real Estate Agents | Indus Real Estate LLC, Dubai",
  description: `Explore the profiles of our seasoned real estate agents at Indus Real Estate LLC, Dubai. 
                Learn about their expertise, experience, and commitment to serving your property needs in the vibrant Dubai market.`,
};

const Agents = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://www.indusre.com/team"
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
                <h1 className="title">
                  Meet Our Experienced Real Estate Agents at Indus Real Estate
                  LLC, Dubai
                </h1>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Team</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Agent Section Area */}
      <FilteringAgent />

      {/* End Agent Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Agents;
