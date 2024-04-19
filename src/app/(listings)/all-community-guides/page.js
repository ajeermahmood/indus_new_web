import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";

import Listing6 from "@/components/listing/list-view/all-list-style/Listing6";

export const metadata = {
  title: "Dubai Community Guides: Explore Top Developments",
  description: `Discover the diverse communities of Dubai developed by top real estate developers. Our guides offer insights into amenities, lifestyle, and investment opportunities.`,
};

const CommunityGuidePage = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://www.indusre.com/all-community-guides"
        key="canonical"
      />
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section pt130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h1 className="title">Dubai&apos;s Premier Community Guides</h1>
                <div className="breadcumb-list">
                  <h6>
                    Your go-to resource for home living in Dubai&apos;s diverse
                    communities.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-agents pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <Listing6 />
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Agent Section Area */}
      {/* <FilteringAgency /> */}

      {/* End Agent Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default CommunityGuidePage;
