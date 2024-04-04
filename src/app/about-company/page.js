import CallToActions from "@/components/common/CallToActions";
import MobileMenu from "@/components/common/mobile-menu";
import Agents from "@/components/home/home-v2/Agents";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Premier Real Estate Agency in Dubai | Indus Real Estate LLC",
  description: `Indus Real Estate LLC, a multi-awarded RERA registered agency, 
  celebrates 20 years of excellence in Dubai's real estate market. Catering to 
  international clients worldwide, we provide top-notch services in property buying, 
  selling, and leasing. Learn more about our mission, vision, and values.`,
};

const AboutCompanyPage = () => {
  const featuresData = [
    {
      points: [
        "Top Agent Of The Year by DAMAC",
        "Agent Of The Month Award by Bayut.com",
        "Top Achievement Award by Dubai Properties",
        "Partnership Certificate 2017-2018 by Dubai Quality Group",
        "Top Broker Award 2017 by DAMAC",
      ],
    },
    {
      points: [
        "Agent Of The Year Platinum Award by NSHAMA",
        "Sales Achievement Award by Dubai South",
        "Certificate Of Recognition by EMAAR",
        "Top Achievement Award 2016 by EMAAR",
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
      <section className="breadcumb-section2 p-0 mt80 mt0-mbl">
        <div className="container mt50">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">About Us</h2>
                {/* <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about pb90">
        <div className="container">
          <h1 className="title mb40">
            Welcome to Indus Real Estate LLC - Your Trusted Partner in
            Dubai&apos;s Real Estate Market.
          </h1>
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <Image
                src={
                  "https://indusspeciality.com/api/assets/images/logo/indus-icon.png"
                }
                width={400}
                height={400}
                alt="logo"
                className="indus-logo-about-page"
              />
              {/* <h2>
                <b>Indus Real Estate</b>
              </h2>
              <p className="fz30">
                <i>Service you Deserve, People you Trust</i>
              </p> */}
            </div>
            <div className="col-lg-6">
              <p className="text mb25 fz20">
                Established in 2004, <b>Indus Real Estate LLC</b> is a
                distinguished Real Estate Regulatory Agency (RERA) registered
                company, celebrating 20 years of unparalleled success in Dubai&apos;s
                dynamic real estate landscape. With a solid foundation built on
                integrity, transparency, and excellence, we have garnered a
                reputable position as a premier real estate agency in the UAE
                and beyond.
              </p>
              <h3>Your Trusted Partner in Real Estate</h3>
              <p className="text mb55 fz20">
                At Indus Real Estate LLC, we understand that buying, selling, or
                leasing property can be a significant decision. That&apos;s why we
                strive to be your trusted partner throughout the process. With
                our extensive market knowledge, unwavering integrity, and
                dedication to excellence, you can count on us to navigate the
                complexities of the real estate landscape with ease.
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
                  src="https://indusspeciality.com/api/assets/images/about/midterm-award.jpg"
                  alt="about banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Banner */}
      <section className="our-about pt0 pb0">
        <div className="container">
          <h3>Customer-Centric Approach</h3>
          <p className="text mb55 fz20">
            Your satisfaction is our priority, and we are committed to
            delivering exceptional service that exceeds your expectations. From
            the initial consultation to the final closing, we prioritize clear
            communication, attention to detail, and responsiveness to ensure a
            smooth and stress-free experience for our clients.
          </p>
          <h3>Tailored Solutions</h3>
          <p className="text mb55 fz20">
            We recognize that every client has unique needs and objectives.
            That&apos;s why we take a personalized approach to real estate, offering
            tailored solutions that align with your goals and preferences.
            Whether you&apos;re searching for your dream home, seeking investment
            opportunities, or looking to lease commercial space, we have the
            expertise and resources to help you achieve success.
          </p>
          <h3>Transparency and Integrity</h3>
          <p className="text mb55 fz20">
            Transparency and integrity are at the core of everything we do. We
            believe in open and honest communication, and we always act with the
            utmost integrity in all of our dealings. You can trust us to provide
            transparent guidance, reliable advice, and ethical representation
            every step of the way.
          </p>
          <h3>Our Mission</h3>
          <p className="text mb55 fz20">
            At Indus, our mission is to cultivate mutual trust and foster
            long-term relationships by consistently delivering exceptional real
            estate services. With a relentless pursuit of innovation and
            excellence, we are dedicated to surpassing client expectations and
            creating value beyond measure.
          </p>
          <h3>Our Vision</h3>
          <p className="text mb55 fz20">
            We aspire to revolutionize the real estate industry, setting new
            standards of excellence and becoming the preferred choice for
            clients in the UAE and across the globe. With a focus on creativity,
            innovation, and unparalleled service, we aim to inspire optimism and
            turn dreams into reality.
          </p>
          <h3>Our Values</h3>
          <p className="text mb55 fz20">
            Integrity and transparency are the cornerstones of our business,
            guiding every interaction and decision we make. We believe in the
            power of teamwork and collaboration, nurturing a culture where
            everyone thrives and grows together. With a passion for excellence
            and a commitment to continuous improvement, we strive to provide
            outstanding service every day.
          </p>

          <h3>Awards and Recognitions</h3>
          <p className="text mb25 fz20">
            Over the years, Indus Real Estate LLC has been honored with numerous
            prestigious awards and accolades, including:
          </p>
          <div className="row mb55">
            {featuresData.map((featureSection, index) => (
              <div className="col-auto" key={index}>
                <div className="ui-content">
                  <div className="list-style1">
                    <ul>
                      {featureSection.points.map((point, pointIndex) => (
                        <li key={pointIndex}>
                          <i className="far fa-check text-thm3 bgc-thm3-light fz20" />
                          <p className="fz20 mb0 ml10">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3>Why Choose Indus Real Estate LLC?</h3>
          <p className="text mb10 fz20">
            <b>Expertise:</b> With over 19 years of experience in the Dubai real
            estate market, we possess the knowledge and insights to help you
            make informed decisions.
          </p>
          <p className="text mb10 fz20">
            <b>Global Reach:</b> Catering to clients from various countries and
            continents including India, the UK, Europe, Russia, the Philippines,
            Africa, the USA, and worldwide, we offer a truly international
            perspective.
          </p>
          <p className="text mb10 fz20">
            <b>Award-Winning Service:</b> Our commitment to excellence has been
            recognized by top developers and agencies through prestigious awards
            such as Top Agent Of The Year, Agent Of The Month Award, and many
            more.
          </p>
          <p className="text mb55 fz20">
            <b>Client-Centric Approach:</b> Your satisfaction is our priority.
            We go above and beyond to understand your needs and tailor our
            services to exceed your expectations.
          </p>

          <h3>Our Commitment to Excellence</h3>
          <p className="text mb55 fz20">
            At Indus Real Estate LLC, excellence is not just a goal; it&apos;s our
            standard. We are dedicated to delivering top-notch service and
            ensuring client satisfaction at every step of the way. Our team of
            experienced professionals works tirelessly to provide you with
            personalized solutions tailored to your unique requirements.
          </p>
          <h3>Innovation and Technology</h3>
          <p className="text mb55 fz20">
            In a rapidly evolving industry, we stay ahead of the curve by
            embracing innovation and leveraging cutting-edge technology. From
            advanced marketing strategies to streamlined transaction processes,
            we utilize the latest tools and techniques to optimize efficiency
            and enhance the client experience.
          </p>
          <h3>Community Engagement</h3>
          <p className="text mb55 fz20">
            Beyond our commitment to our clients, we are deeply invested in
            giving back to the community. Through various charitable initiatives
            and community outreach programs, we strive to make a positive impact
            and contribute to the welfare of society.
          </p>
          <h3>Join the Indus Family</h3>
          <p className="text mb55 fz20">
            Whether you&apos;re a first-time buyer, seasoned investor, or property
            owner looking to maximize returns, Indus Real Estate LLC is here to
            support you every step of the way. Join the Indus family today and
            let us help you achieve your real estate goals with confidence and
            peace of mind.
          </p>
          <h3>Join the Indus Family</h3>
          <p className="text mb25 fz20">
            Whether you&apos;re a first-time buyer, seasoned investor, or property
            owner looking to maximize returns, Indus Real Estate LLC is here to
            support you every step of the way. Join the Indus family today and
            let us help you achieve your real estate goals with confidence and
            peace of mind.
          </p>
          <p className="text mb55 fz20">
            <b>Comprehensive Services:</b> From property buying and selling to
            leasing both residential and commercial properties, we offer a full
            range of real estate services to meet your diverse needs.
          </p>

          <h3>Get in Touch</h3>
          <p className="text mb55 fz20">
            Embark on your real estate journey with Indus Real Estate LLC.
            Contact us today to discover the possibilities and experience the
            difference that sets us apart as the premier real estate agency in
            Dubai and beyond.
          </p>
          <h3>Contact Us Today</h3>
          <p className="text mb55 fz20">
            Ready to embark on your real estate journey? Contact Indus Real
            Estate LLC today to experience the difference for yourself. Let us
            put our expertise to work for you and help you achieve your real
            estate goals efficiently and effectively.
          </p>
        </div>

        <CallToActions />
      </section>

      {/* Funfact */}
      {/* <section className="pt-0">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FunFact />
          </div>
        </div>
      </section> */}
      {/* End Funfact */}
      {/* <div className="col-xl-8 offset-xl-2 px30">
        <div className="ui-content mt40 mb30">
          <h4 className="mb10 text-indus fz30">MISSION</h4>
          <div className="custom_bsp_grid">
            <ul className="list-style-type-bullet p-0 ml20">
              <li>
                <p className="fz20">
                  We are committed to create mutual trust and long-term
                  relationship by delivering what we can do best and beyond.
                </p>
              </li>
              <li>
                <p className="fz20">
                  We strive to be always motivated and focused in providing
                  excellent real estate services using the most comprehensive
                  and innovative approach.
                </p>
              </li>
              <li>
                <p className="fz20">
                  We aim to actively increase our client base and maintain good
                  relationships with our existing clientele by preserving their
                  trust and loyalty.
                </p>
              </li>
              <li>
                <p className="fz20">
                  We make every effort to optimize exceptional Resources,
                  People, System and Values strategically.
                </p>
              </li>
              <li>
                <p className="fz20">
                  We aim to create a one stop shop for all real estate services
                  for all our clients locally and internationally.
                </p>
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
          <h4 className="mb10 fz30 text-indus">VISION</h4>
          <div className="custom_bsp_grid">
            <ul className="list-style-type-bullet p-0 ml20">
              <li>
                <p className="fz20">
                  To revolutionize real estate industry and to become the real
                  estate of choice in UAE and across the world.
                </p>
              </li>
              <li>
                <p className="fz20">
                  To be a place where everyone creates their winning ideas,
                  innovation and inspire other people’s dream of optimism and
                  reality.
                </p>
              </li>
              <li>
                <p className="fz20">
                  We intend to be a remarkable and legendary real estate
                  management firm who always provide clients the best investment
                  experience in UAE from beginning to end with an advance, smart
                  and secure methods in real estate service in accordance with
                  the highest professional standards.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 ui-content mt50">
          <h4 className="title fz30 text-indus">VALUES</h4>
        </div>
        <div className="row">
          {featuresData.map((featureSection, index) => (
            <div className="col-auto" key={index}>
              <div className="ui-content">
                <div className="list-style1">
                  <ul>
                    {featureSection.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <i className="far fa-check text-thm3 bgc-thm3-light fz20" />
                        <p className="fz20 mb0 ml10">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Exclusive Agents */}
      <section className="pb90 pt0">
        <div className="container">
          <div className="row  justify-content-center">
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
      {/* <section className="our-partners">
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
      </section> */}
      {/* End Our Partners */}

      {/* Our CTA */}

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
