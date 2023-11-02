import CallToActions from "@/components/common/CallToActions";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import CareerForm from "@/components/home/home-v7/career-form";
import Footer from "@/components/home/home-v7/footer";
import Office from "@/components/pages/contact/Office";
import Image from "next/image";

export const metadata = {
  title: "Indus Career | Indus Real Estate LLC",
};

const CareerPage = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      <section className="breadcumb-section pt160">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-xl-5"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <div className="main-title mb40">
                <h2 className="title">Apply at Indus Real Estate</h2>
                <p className="paragraph fz15">
                  Get in touch with one of the fastest emerging real estate
                  agencies in Dubai.
                </p>
              </div>
              <div className="inquiry-form mb30-md">
                <CareerForm />
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
                    style={{
                      borderRadius: "5px",
                    }}
                    className="w-100 h-100 cover"
                    src="/images/career/career-agent.webp"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Our Contact Form */}

      {/* Visit our Office */}
      <section className=" pb90 pb10-md">
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

export default CareerPage;
