import Header from "@/components/home/home-v2/Header";

import Footer from "@/components/home/home-v7/footer";
import MobileMenu from "@/components/common/mobile-menu";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-4-col/PropertyFiltering";

import React from "react";

export const metadata = {
  title: "Explore Prime Residential Properties for Sale and Rent in Dubai, UAE",
  description: `Discover luxurious residential properties for sale and rent in Dubai, UAE, showcasing diverse communities developed by top real estate developers. 
                Invest in prime real estate opportunities with breathtaking views, world-class amenities, and insights into lifestyle and investment opportunities. 
                Find your dream home or ideal rental in one of the most vibrant cities in the world today.`,
};

const AllPropertiesPage = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://www.indusre.com/all-properties"
        key="canonical"
      />
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section pt130 bgc-f7 pt20-mbl pb20-mbl">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h1 className="title">
                  Explore Prime Residential Properties for Sale and Rent in
                  Dubai, UAE
                </h1>
                <div className="breadcumb-list">
                  Discover luxurious residential properties for sale and rent in
                  Dubai, UAE, showcasing diverse communities developed by top
                  real estate developers. Invest in prime real estate
                  opportunities with breathtaking views, world-class amenities,
                  and insights into lifestyle and investment opportunities. Find
                  your dream home or ideal rental in one of the most vibrant
                  cities in the world today.
                </div>
                <a
                  className="filter-btn-left mobile-filter-btn d-block d-lg-none text-dark mt5"
                  data-bs-toggle="offcanvas"
                  href="#listingSidebarFilter"
                  role="button"
                  aria-controls="listingSidebarFilter"
                >
                  <span className="flaticon-settings" /> Filter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <ProperteyFiltering />

      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AllPropertiesPage;
