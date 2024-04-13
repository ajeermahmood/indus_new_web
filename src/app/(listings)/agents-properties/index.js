"use client";
import Header from "@/components/home/home-v2/Header";

import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v7/footer";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-4-col/PropertyFiltering";

import { useSearchParams } from "next/navigation";

const AllProperties = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section pt130 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">
                  Browse Through{" "}
                  <span className="text-indus">{name}&apos;s</span> Collection
                </h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Agent&apos;s properties</a>
                </div>
                <a
                  className="filter-btn-left mobile-filter-btn d-block d-lg-none"
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
      <ProperteyFiltering agentId={id} />

      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AllProperties;
