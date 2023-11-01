import CallToActions from "@/components/common/CallToActions";
import MobileMenu from "@/components/common/mobile-menu";
import YouRubeVideoComponent from "@/components/common/youtube_video";
import Header from "@/components/home/home-v2/Header";
import FindHomeBlock from "@/components/home/home-v6/FindHomeBlock";
import Footer from "@/components/home/home-v7/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Seller&apos;s Guide | Indus Real Estate LLC",
};

const SellGuidePage = () => {
  const blocks = [
    {
      icon: "flaticon-bird-house",
      number: "01",
      subtitle: "Property Presentation",
    },
    {
      icon: "flaticon-chat",
      number: "02",
      subtitle: "Finding An Agent",
    },
    {
      // icon: "flaticon-bird-house",
      icon: "flaticon-search-1",
      number: "03",
      subtitle: "Market Appraisals",
    },
    {
      icon: "flaticon-house-1",
      number: "04",
      subtitle: "Marketing your home",
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
              <h2 className="blog-title">Seller Guide</h2>
              <div className="blog-single-meta">
                <div className="post-author d-sm-flex align-items-center"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt50">
          <div className="row">
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="100">
              <div className="about-box2">
                <h4 className="title">
                  Need help on selling
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
                  src="/images/svg/selling.svg"
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
            <h4 className="mb10">Lets Explain Further</h4>
            <div className="custom_bsp_grid">
              <ul className="list-style-type-bullet p-0 ml20">
                <li>
                  <b>Property Presentation:</b> Appearance is key. Presenting
                  your property at its best whether it is cleaning your home,
                  handling repairs or maintenance issues, fixing up your garden
                  or even putting on a new layer of paint can determine the sale
                  of your property. This will not only help sell property fast
                  but also increase chances for good offers from potential
                  buyers.
                </li>
                <li>
                  <b>Finding An Agent:</b> Work with a good RERA certified
                  broker who has the relevant market knowledge of properties in
                  Dubai. Here, they can share advice and insight on the property
                  area you are selling at. Working with an agent from a
                  reputable agency who is able to use marketing strategies to
                  promote your property online and offline can help generate a
                  higher response from a wide clientele.
                </li>
                <li>
                  <b>Market Appraisals:</b> After choosing your agent, a
                  marketing appraisal will be done via visiting your property.
                  The selling price are determined through facts based on
                  location, property type and similar properties around the area
                  in order to help secure the best selling price for your
                  property.
                </li>
                <li>
                  <b>Marketing Your Home:</b> Form A will need to be signed
                  between broker and seller in order sell or market property
                  online. Marketing is a significant stage. Professional
                  photographs and descriptions will be taken and posted with
                  some agencies offering 3D tours set on different marketing
                  channels online in order to generate leads.
                </li>
                <li>
                  <b>Viewings:</b>Brokers will invite potential buyers for
                  property viewings so it is best to keep the property at its
                  best condition. On behalf of the seller, the broker will
                  assist in any questions or related queries made to the
                  property. During this phase, there will be some offers coming
                  up and brokers will report back and begin the negotiation
                  stage
                </li>
                <li>
                  <b>MOU:</b> When the right buyer comes along, an MOU will be
                  required to be signed. The MOU is simply a non-binding
                  contract that instates the details of both parties&apos;
                  responsibilities and requirements.
                </li>
                <li>
                  <b>Applying For NOC:</b> All parties including the agent will
                  meet at the developer&apos;s office to apply for an NOC to sell the
                  property. Someone from the developer&apos;s office will then visit
                  the property once an NOC is applied to ensure all outstanding
                  charges are paid for.
                </li>
                <li>
                  <b>Utility Deactivation:</b> All parties including the agent
                  will meet at the developer&apos;s office to apply for an NOC to
                  sell the property. Someone from the developer&apos;s office will
                  then visit the property once an NOC is applied to ensure all
                  outstanding charges are paid for.
                </li>
                <li>
                  <b>Transfer Day:</b> After an NOC is issued, the parties
                  will then visit the DLD office to begin the property transfer
                  to the new buyer. Once all documents and formalities are
                  completed, a new title deed will be issued to the new buyer.
                </li>
              </ul>
            </div>
          </div>
          <YouRubeVideoComponent videoId={"8M8hfDEO7FE"} />
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

export default SellGuidePage;
