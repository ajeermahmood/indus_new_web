import CallToActions from "@/components/common/CallToActions";
import Partner from "@/components/common/Partner";
import MobileMenu from "@/components/common/mobile-menu";
import Agents from "@/components/home/home-v2/Agents";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import FunFact from "@/components/pages/about/FunFact";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Indus Real Estate LLC | Dubai Luxury Properties",
};

const AboutCompanyPage = () => {
  const featuresData = [
    {
      points: [
        "Integrity is our honor, Transparency is our responsibility",
        "We build as a Team, Together we grow.",
        "We motivate ourselves to inspire others.",
        "Practice Excellent service everyday",
        "We believe that Listening is the best way of understanding.",
      ],
    },
    {
      points: [
        "Think Big and Think ahead.",
        "Passionate in Being Goal and Result Oriented",
        "Train Hard, Work Smarter",
      ],
    },
  ];
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0 mt80">
        <div className="container mt50">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">About Us</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2>
                <b>Indus Real Estate</b>
              </h2>
              <p className="fz30">
                <i>Service you Deserve, People you Trust</i>
              </p>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">
                <b>Indus Real Estate</b> is a multi-awarded Real Estate
                Regulatory Agency (RERA) registered company. We are established
                since 2004 and in business for more than 17 years with a solid
                UAE and international client base
              </p>
              <p className="text mb55">
                At Indus, the range of service focuses on all aspects of
                property selling,buying and leasing - both residential and
                commercial . Our efficiency is derived from a combination of
                experience and knowledge of the local property market.
              </p>
              <div className="row">{/* <Mission /> */}</div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}

      {/* About Banner */}
      <section className="our-about pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-12">
              <div className="about-page-img">
                <Image
                  width={1206}
                  height={515}
                  priority
                  className="w-100 h-100 cover"
                  src="/images/about/midterm-award.jpg"
                  alt="about banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Banner */}

      {/* Funfact */}
      <section className="pt-0">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FunFact />
          </div>
        </div>
      </section>
      {/* End Funfact */}
      <div className="col-xl-8 offset-xl-2 px30">
        <div className="ui-content mt40 mb30">
          <h4 className="mb10">MISSION</h4>
          <div className="custom_bsp_grid">
            <ul className="list-style-type-bullet p-0 ml20">
              <li>
                We are committed to create mutual trust and long-term
                relationship by delivering what we can do best and beyond.
              </li>
              <li>
                We strive to be always motivated and focused in providing
                excellent real estate services using the most comprehensive and
                innovative approach.
              </li>
              <li>
                We aim to actively increase our client base and maintain good
                relationships with our existing clientele by preserving their
                trust and loyalty.
              </li>
              <li>
                We make every effort to optimize exceptional Resources, People,
                System and Values strategically.
              </li>
              <li>
                We aim to create a one stop shop for all real estate services
                for all our clients locally and internationally.
              </li>
            </ul>
          </div>
        </div>

        <div className="blockquote-style1 mb60">
          <blockquote className="blockquote">
            <p className="fst-italic fz15 fw500 ff-heading">
              Our objective at Indus is to constantly upgrade our comprehensive
              service standards and to provide real quality service and
              excellence in client’s satisfaction.
            </p>
            <h6 className="quote-title">Mr. Hamir Asher</h6>
            <p className="fz10">General Manager, Indus Real Estate LLC</p>
          </blockquote>
        </div>

        <div className="ui-content mt40 mb30">
          <h4 className="mb10">VISION</h4>
          <div className="custom_bsp_grid">
            <ul className="list-style-type-bullet p-0 ml20">
              <li>
                To revolutionize real estate industry and to become the real
                estate of choice in UAE and across the world.
              </li>
              <li>
                To be a place where everyone creates their winning ideas,
                innovation and inspire other people’s dream of optimism and
                reality.
              </li>
              <li>
                We intend to be a remarkable and legendary real estate
                management firm who always provide clients the best investment
                experience in UAE from beginning to end with an advance, smart
                and secure methods in real estate service in accordance with the
                highest professional standards.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 ui-content mt50">
          <h4 className="title">VALUES</h4>
        </div>
        <div className="row">
          {featuresData.map((featureSection, index) => (
            <div className="col-auto" key={index}>
              <div className="ui-content">
                <div className="list-style1">
                  <ul>
                    {featureSection.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <i className="far fa-check text-thm3 bgc-thm3-light" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Agents */}
      <section className="pb90">
        <div className="container">
          <div className="row  justify-content-center">
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
          </div>
          {/* End .row */}

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
      </section>
      {/* Exclusive Agents */}

      {/* Abut intro */}
      {/* <section className="pt30 pb-0">
        <div className="cta-banner3 bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize">
                    Let’s find the right <br className="d-none d-md-block" />{" "}
                    selling option for you
                  </h2>
                </div>
                <div className="why-chose-list style2">
                  <Features />
                </div>
                <Link href="#" className="ud-btn btn-dark">
                  Learn More
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Abut intro */}

      {/* Our Partners */}
      <section className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AboutCompanyPage;
