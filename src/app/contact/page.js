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
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
          title="London Eye, London, United Kingdom"
          aria-label="London Eye, London, United Kingdom"
        />
        {/* End map */}

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-6 position-relative">
              <div className="home8-contact-form bdrs12 p40 p30-md bgc-white mb30">
                <h2 className="form-title">Get In Touch</h2>
                <p className="text mb25">
                  Aliquam lacinia diam quis lacus euismod
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
                  Realton has more than 9,000 offices of all sizes and all
                  potential of session.
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
