import CallToActions from "@/components/common/CallToActions";
import MobileMenu from "@/components/common/mobile-menu";
import YouRubeVideoComponent from "@/components/common/youtube_video";
import Header from "@/components/home/home-v2/Header";
import FindHomeBlock from "@/components/home/home-v6/FindHomeBlock";
import Footer from "@/components/home/home-v7/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Buyer Guide | Indus Real Estate LLC",
};

const BuyGuidePage = () => {
  const blocks = [
    {
      icon: "flaticon-bird-house",
      number: "01",
      subtitle: "Better Affordability",
    },
    {
      icon: "flaticon-chat",
      number: "02",
      subtitle: "Market Condition",
    },
    {
      // icon: "flaticon-bird-house",
      icon: "flaticon-search-1",
      number: "03",
      subtitle: "Sufficient Rental Yeild",
    },
    {
      icon: "flaticon-house-1",
      number: "04",
      subtitle: "Residence Visa",
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
      <section className="our-blog pt130 pt10-mbl">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12">
              <h2 className="blog-title">Buyer Guide</h2>
              <div className="blog-single-meta">
                <div className="post-author d-sm-flex align-items-center">
                  Purchasing real estate in Dubai and the UAE can be an exciting
                  yet complex process. Whether you&apos;re a first-time buyer or a
                  seasoned investor, understanding the nuances of the market and
                  the legal framework is crucial. Here&apos;s a comprehensive buyer&apos;s
                  guide to help you navigate through the process:
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
                  Need help on buying
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
                  src="https://indusspeciality.com/api/assets/images/svg/buying.svg"
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
                    <b>Affordability:</b> It is advised that your monthly
                    housing expenses should not exceed 30% of your salary. When
                    buying a house it is crucial to budget the upfront fees -
                    this can be close to 7-8% of the purchase price. Upfront
                    fees include Dubai Land Department fee, property
                    registration fee, real estate agent fee, property valuation
                    fee amongst others. As an owner, you will not only have to
                    pay for the ongoing maintenance fees but also the annual
                    service fees.
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Savings:</b> Perhaps the most important factor to
                    consider when contemplating buying a home is your
                    down-payment. In line with UAE Central Bank Regulations, the
                    minimum deposit required for expats is 25% of the purchase
                    price for properties valued at less than AED 5 million, and
                    20% for UAE nationals. A personal loan obtained from a local
                    bank cannot be used to finance your down-payment — this must
                    come from your own savings. However, the above-mentioned
                    upfront transaction costs, agent fees and bank fees may be
                    financed using a personal loan.
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Rental Yeild:</b> If you would want to convert your home
                    into an investment property in the long term then it&apos;s
                    important to assess whether the projected rental income will
                    be sufficient to cover your monthly mortgage repayment and
                    maintenance expenses.
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Residence Visa:</b> For properties valued above AED 1
                    million and below AED 5 million: You may be entitled to a
                    residency visa through home-ownership, subject to meeting
                    certain conditions. You may be eligible for 2 types of
                    visas: 6-month multi-entry or a 2-year residency. For
                    properties valued above AED 5 million: If there is no
                    mortgage attached and the property has been retained for 3
                    years, you may be entitled to a 5-year residency visa,
                    subject to eligibility conditions. Property owners can also
                    sponsor a visa for their immediate family members.
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Location:</b> Things to consider: the size of your
                    family, stage of life and lifestyle. Is the property near
                    schools or childcare facilities? What is the approximate
                    daily commute from the property to your work or
                    children&apos;s school? Is public transport easily
                    accessible? Are restaurants, cafes, cultural attractions or
                    nightlife destinations important to you? Does your chosen
                    community have adequate options?
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Size:</b> You must consider the size of your family and
                    plans of expansion in the forseeable future - is the
                    property large enough to meet your needs? Are you looking
                    for a spacious backyard for your children?
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Layout:</b> Properly assessing floor-plans and layouts is
                    essential to help you understand the square footage,
                    usability and functionality of the square footage available.
                    Are you looking for open-plan living? Seeking spacious
                    living areas or do you prefer larger bedrooms?
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Quality:</b> Have you considered the age of the property?
                    If investing in the secondary market, does the property
                    require any renovations? If buying off-plan, was the
                    property built by a reputable developer?
                  </p>
                </li>
                <li>
                  <p className="fz20">
                    {" "}
                    <b>Market Condition:</b> Stay up to date with current market
                    trends in your chosen community. Is it the right time to
                    buy? What are current rental yields? These are the main
                    factors to consider in buying a home or property in Dubai.
                    For expert advice on real estate and investment, you may
                    contact our agents to assist you. We can help you make the
                    right choice.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <YouRubeVideoComponent videoId={"ebts66NNEeg"} />
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

export default BuyGuidePage;
