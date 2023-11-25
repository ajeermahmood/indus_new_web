import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Page Not Found | Indus Real Estate LLC",
};

const NotFound = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Error/404 Section Area */}
      <section className="our-error">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4" data-aos="fade-left">
              <div className="animate_content text-center text-xl-start">
                <div className="animate_thumb">
                  <Image
                    width={400}
                    height={400}
                    className="w-100 h-100 cover"
                    src="https://indusspeciality.com/api/assets/images/icon/error-page-img.svg"
                    alt="error-page-img"
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}

            <div
              className="col-xl-5 offset-xl-1 wow fadeInLeft"
              data-aos="fade-right"
            >
              <div className="error_page_content mt80 mt50-lg text-center text-xl-start">
                <div className="erro_code">
                  <span className="text-thm text-indus">40</span>4
                </div>
                <div className="h2 error_title">
                  Oops! It looks like you&apos;re lost.
                </div>
                <p className="text fz15 mb20">
                  The page you&apos;re looking for isn&apos;t available. Try to
                  search again <br className="d-none d-lg-block" /> or use the
                  go to.
                </p>
                <Link href="/" className="ud-btn btn-dark">
                  Go Back To Home
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            {/* End .col-6 */}
          </div>
        </div>
      </section>
      {/* End Error/404 Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default NotFound;
