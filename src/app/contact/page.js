import CallToActions from "@/components/common/CallToActions";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import Contact from "@/components/home/home-v8/Contact";
import Office from "@/components/pages/contact/Office";

export const metadata = {
  title: "Contact Us | Indus Real Estate LLC",
};

const ContactUs = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Our Contact With Map */}
      {/* Our Contact With Map */}
      <section className="pt100 pb40 mt80">
        <iframe
          className="home8-map"
          loading="lazy"
          src="https://www.google.com/maps/d/embed?mid=1pqoeQ8kSXhE9Vi9nXzU4RuWPJbWEH9s&ehbc=2E312F"
        />
        {/* End map */}

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-6 position-relative">
              <div className="home8-contact-form bdrs12 p40 p30-md bgc-white mb30">
                <h2 className="form-title">Get In Touch</h2>
                <p className="text mb25">
                  Contact us for find a new property for you.
                </p>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Contact With Map */}
      {/* End Our Contact Form */}

      {/* Visit our Office */}
      <section className="pt100 pb90 pb10-md">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title">Visit Our Office</h2>
                <p className="paragraph">
                  Indus Real Estate is a multi-awarded Real Estate Regulatory
                  Agency (RERA) registered company. We are established since
                  2004 and in business for more than 17 years with a solid UAE
                  and international client base
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <Office />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Visit our Office */}

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

export default ContactUs;
