import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import MobileMenu from "@/components/common/mobile-menu";

import PropertyFilteringBanner from "@/components/listing/grid-view/banner-search-v1/PropertyFilteringBanner";

import React from "react";

export const metadata = {
  title: "Search Properties In Dubai | Indus Real Estate LLC",
};

const SearchResultsPage = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V1 */}
      <PropertyFilteringBanner />
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SearchResultsPage;
