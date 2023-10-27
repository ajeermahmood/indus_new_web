import Partner from "@/components/common/Partner";
import MobileMenu from "@/components/common/mobile-menu";
import Agents from "@/components/home/home-v2/Agents";
import ApartmentType from "@/components/home/home-v2/ApartmentType";
import Explore from "@/components/home/home-v2/Explore";
import Header from "@/components/home/home-v2/Header";
import Testimonial from "@/components/home/home-v2/Testimonial";
import About from "@/components/home/home-v2/about";
import Hero from "@/components/home/home-v2/hero";
import Cta from "@/components/home/home-v7/Cta";
import ExploreCities from "@/components/home/home-v7/ExploreCities";
import Footer from "@/components/home/home-v7/footer";

import Blog from "@/components/common/Blog";
import InqueryForm from "@/components/home/home-v7/InqueryForm";
import PropertyListing from "@/components/home/home-v7/PropertyListing";
import Image from "next/image";

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
            <div className="home2-hero-banner bdrs12"></div>
            <div className="row">
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
      <section className="pb90 pb30-md">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade">
            <div className="col-lg-12">
              <ApartmentType />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Featured Listings */}
      {/* Popular Property */}
      <PropertyListing />
      {/* Popular Property */}
      {/* <section className="pt0 pb60 pb30-md bgc-white">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Discover Our Featured Listings</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-full-3-col">
                  See All Properties
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Explore Featured Listings */}

      {/* Property Cities */}
      {/* <section className="pt0 pb90 pb50-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Explore Cities</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="cities_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>

                <div className="col-auto">
                  <div className="pagination swiper--pagination cities_pagination__active" />
                </div>

                <div className="col-auto">
                  <button className="cities_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <ExploreCities />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pb90 pb30-md">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title">Explore Cities</h2>
                <p className="paragraph">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <ExploreCities />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End property cities */}
      <section className="pb90 pb20-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* Explore Apartment */}
      <section className="p-0">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title">See How Realton Can Help</h2>
                  <p className="paragraph">
                    Aliquam lacinia diam quis lacus euismod
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* About Us */}
      <section className="about-us">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Us */}

      {/* Our Testimonials */}
      <section className="our-testimonial p-0">
        <div className="cta-banner2 bgc-f7 maxw1600 mx-auto pt110 pt60-md pb110 pb60-md bdrs12 position-relative">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="main-title text-center">
                  <h2>Testimonials</h2>
                  <p className="paragraph">
                    10,000+ unique online course list designs
                  </p>
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
      <section className="pb90">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Our Exclusive Agetns</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="agent_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination agent_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="agent_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Exclusive Agents */}

      {/* Our Partners */}
      <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
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
                <p className="paragraph fz15">
                  As the complexity of buildings to increase
                </p>
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
                    height={778}
                    className="w-100 h-100 cover"
                    src="/images/about/about-4.png"
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
      <Cta />
      {/* Our End CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default HomePage;
