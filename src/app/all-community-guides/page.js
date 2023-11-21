import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";

import Listing6 from "@/components/listing/list-view/all-list-style/Listing6";

export const metadata = {
  title: "Community Guides | Indus Real Estate LLC",
};

const CommunityGuidePage = () => {
  return (
    <>
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
                <h2 className="title">Community Guides</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Guides</a>
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
