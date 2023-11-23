import Partner from "@/components/common/Partner";
import MobileMenu from "@/components/common/mobile-menu";
import ApartmentType from "@/components/home/home-v2/ApartmentType";
import Header from "@/components/home/home-v2/Header";
import Testimonial from "@/components/home/home-v2/Testimonial";
import Hero from "@/components/home/home-v2/hero";
import ExploreCities from "@/components/home/home-v7/ExploreCities";
import Footer from "@/components/home/home-v7/footer";

import Blog from "@/components/common/Blog";
import InqueryForm from "@/components/home/home-v7/InqueryForm";
import PropertyListing from "@/components/home/home-v7/PropertyListing";
import PropertyGallery from "@/components/property/property-single-style/single-v4/banners-gallery";
import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "./enquiry-stepper";
import ScrollDownCustom from "./scroll-down-custom";
import { Rating } from "@mui/material";

export const metadata = {
  title: "Indus Real Estate LLC | Dubai Luxury Properties",
};

const HomePage = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V2 */}
      <section className="home-banner-style2 p0">
        <div className="home-style2">
          <div className="container maxw1600">
            <div className="home2-hero-banner bdrs12 h480-mbl"></div>
            <div className="row m-0">
              <div className="col-xl-10 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V2 */}

      {/* Explore Apartment */}
      <section className="pb0 pb30-md pt0">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade"
            data-aos-delay="0"
          >
            <div className="col-lg-12">
              <ApartmentType />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      <section className="pb50 pt40 pt0-mbl">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title">Featured Projects</h2>
                <p className="paragraph">
                  Featuring luxury apartments and townhouses. Contact us for
                  more information.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt5">
            <PropertyGallery />
          </div>
        </div>
      </section>

      {/* Popular Property */}
      <section
        className="bgc-f7 pt50 pb30-md pb60 pt60"
        id="featured-properties"
      >
        <PropertyListing />
      </section>
      {/* <section>
        <div className="container">
          <div
            className="row align-items-md-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <WhyChoose />
          </div>
        </div>
      </section> */}

      <section className="pb10 pb30-md pt60" id="explore-cities">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title">Explore Cities</h2>
                <p className="paragraph">
                  Take a deep dive and Browse All original neighbourhood photos,
                  drone footage, resident reviews and local insights to see if
                  the home for sale is right for you.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <ExploreCities />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End property cities */}
      <section className="pb90 pb20-md pt50 pt0-mbl" id="featured-blogs">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">Latest News</h2>
                <p className="paragraph">
                  Read latest news about Real Estate in Dubai
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <Blog />
            <div className="d-grid d-md-block text-center mt30 mt0-md">
              <Link href="/all-news" className="ud-btn btn-dark bdrs0">
                View More<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* Explore Apartment */}
      {/* <section className="p-0" id="guides">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title">See How Indus Can Help</h2>
                  <p className="paragraph">Indus will help find your home.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section> */}
      {/* End Explore Apartment */}

      {/* About Us */}
      {/* <section className="about-us">
        <div className="container">
          <About />
        </div>
      </section> */}
      {/* End About Us */}

      {/* Our Testimonials */}
      <section className="our-partners pt50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0">
              <div className="main-title text-center">
                <h6>Trusted Partners</h6>
              </div>
            </div>
            {/* End .col-12 */}

            <div
              className="col-lg-12 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Partner />
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
      </section>

      <section className="our-testimonial p-0">
        <div className="cta-banner2 bgc-f7 maxw1600 mx-auto pt110 pt60-md pb110 pb60-md bdrs12 position-relative">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 mx-auto"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="main-title text-center">
                  {/* <h2>Testimonials</h2> */}
                  <img
                    src="/images/testimonials/google_logo.svg"
                    width={200}
                    height={80}
                    alt="google"
                  />
                  <p className="paragraph ltsp-2 fw500">REVIEWS</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-8 m-auto"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="testimonial-style2">
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Testimonials */}

      {/* Exclusive Agents */}
      {/* <section className="pb90" id="exclusive-team">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Our Exclusive Team</h2>
                <p className="paragraph">
                  Keep in touch with our exclusive team.
                </p>
              </div>
            </div>

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="agent_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>

                <div className="col-auto">
                  <div className="pagination swiper--pagination agent_pagination__active" />
                </div>

                <div className="col-auto">
                  <button className="agent_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
            <div className="d-grid d-md-block text-center mt30 mt0-md">
              <Link href="/team" className="ud-btn btn-dark bdrs0">
                View All Team<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* Exclusive Agents */}

      {/* Our Partners */}

      {/* End Our Partners */}
      {/* Real Estate Inquiry Form */}
      <section>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-xl-5"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <div className="main-title mb40">
                <h2 className="title">Real Estate Inquiry Form</h2>
              </div>
              <div className="inquiry-form mb30-md">
                <InqueryForm />
              </div>
            </div>
            {/* End col-6 */}

            <div
              className="col-lg-6 col-xl-6 offset-xl-1"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="inquiry-form">
                <div className="inquiry-img">
                  <Image
                    width={591}
                    height={800}
                    style={{
                      borderRadius: "5px",
                    }}
                    className="w-100 h-100 cover"
                    src="/images/enquiry/burj-khalifa.webp"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Real Estate Inquiry Form */}

      {/* Our CTA */}
      {/* <Cta /> */}
      {/* Our End CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0 bdr-top ">
        <Footer />
      </section>
      {/* End Our Footer */}

      <ScrollDownCustom />
      <EnquiryForm />
    </>
  );
};

export default HomePage;
