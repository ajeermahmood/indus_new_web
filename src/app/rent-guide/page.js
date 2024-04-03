import Features from "@/components/blog/blog-single/Features";
import CallToActions from "@/components/common/CallToActions";
import MobileMenu from "@/components/common/mobile-menu";
import YouRubeVideoComponent from "@/components/common/youtube_video";
import Header from "@/components/home/home-v2/Header";
import FindHomeBlock from "@/components/home/home-v6/FindHomeBlock";
import Footer from "@/components/home/home-v7/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Renter Guide | Indus Real Estate LLC",
};

const RentGuidePage = () => {
  const blocks = [
    {
      icon: "flaticon-bird-house",
      number: "01",
      subtitle: "Understanding your budget",
    },
    {
      icon: "flaticon-chat",
      number: "02",
      subtitle: "Exploring the Communities",
    },
    {
      // icon: "flaticon-bird-house",
      icon: "flaticon-search-1",
      number: "03",
      subtitle: "Browsing for Properties",
    },
    {
      icon: "flaticon-house-1",
      number: "04",
      subtitle: "Scheduling a viewing",
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

      {/* Blog Section Area */}
      <section className="our-blog pt130">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12">
              <h2 className="blog-title">Renter Guide</h2>
              <div className="blog-single-meta">
                <div className="post-author d-sm-flex align-items-center">
                  Renting property in Dubai and the UAE offers flexibility and a
                  wide range of options to suit different lifestyles and
                  budgets. Whether you&apos;re a newcomer or a long-term resident,
                  understanding the rental process is essential. Here&apos;s a
                  comprehensive guide to help renters navigate through the
                  process:
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt50">
          <div className="row">
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="100">
              <div className="about-box2">
                <h4 className="title">
                  Need help on renting
                  <br className="d-none d-xl-block" /> In Dubai
                </h4>
                <p className="text fz15">
                  Here&apos;s a quick guide on what you
                  <br className="d-none d-xl-block" />
                  need to know, what to expect
                  <br className="d-none d-xl-block" />
                  and what to do.
                </p>
                <Link href="/contact" className="ud-btn btn-thm">
                  Contact Us
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Image
                  width={296}
                  height={318}
                  className="img-1 cover"
                  src="https://indusspeciality.com/api/assets/images/svg/renting.svg"
                  alt="about"
                />
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
              <div className="row">
                <FindHomeBlock blocks={blocks} />
              </div>
            </div>
          </div>

          <div className="ui-content mt40 mb30">
            <h4 className="mb10 text-indus">Lets Explain Further</h4>
            <div className="custom_bsp_grid">
              <ul className="list-style-type-bullet p-0 ml20">
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Understanding your budget:</b> Whether you are new to the
                    city, or simply looking to upgrade, your budget is of utmost
                    importance in determining where you choose to live.
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Exploring the Communities:</b> Whether you are new to the
                    city, or simply looking to upgrade, a right community is
                    equally important.
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Browsing for Properties:</b> You can narrow your search
                    to specific property types once you have shortlisted the
                    communities to live in. Keep in mind the following things
                    before renting your property: property condition, landlord
                    issues and other additional costs.
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Scheduling a property viewing:</b> Property viewings can
                    be time consuming, however, essential. You must prepare a
                    checklist to help you conduct a thorough assessment.
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Securing the property & signing the contract:</b> You
                    will need a variety of documents ready in order to submit
                    your offer and complete your application. Keep your
                    documents organized for swift processing of your tenancy
                    contract to registering with Ejari, connecting your DEWA and
                    other services.
                  </p>
                  <p className="fz20 mt20 text-blue-gray">
                    <b>Documents to prepare</b>
                  </p>
                  <div className="row">
                    <Features />
                  </div>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Moving In:</b> Once you&apos;ve decided on your moving
                    date, you can organize yourself for a seamless move-in
                    experience by ensuring you have already registered for:
                    Ejari, DEWA, internet service, cooling provider, security
                    and moving permit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <YouRubeVideoComponent videoId={"MzaT_xbUN08"} />
        </div>
      </section>

      <CallToActions />

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default RentGuidePage;
