import Blog from "@/components/blog/blog-list-v1/Blog";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";

export const metadata = {
  title:
    "Indus Real Estate LLC Dubai | Latest Real Estate Videos, Property Footages & Expert Agents",
  description: `Explore the latest videos, property footages, exclusive interviews, 
                and updates from Indus Real Estate LLC, Dubai. Connect with expert real estate agents for insights and property show updates.`,
};

const VideosPage = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://www.indusre.com/videos"
        key="canonical"
      />
      <div className="bgc-f7">
        {/* Main Header Nav */}
        <Header />
        {/* End Main Header Nav */}

        {/* Mobile Nav  */}
        <MobileMenu />
        {/* End Mobile Nav  */}

        {/* Breadcrumb Start */}
        <section className="breadcumb-section pt130">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcumb-style1">
                  <h1 className="title">
                    Discover the Latest in Dubai Real Estate with Indus: Videos,
                    Footages & Experts
                  </h1>
                  <div className="breadcumb-list">
                    <h6 className="fw400">
                      Explore the latest videos, property footages, exclusive
                      interviews, and updates from Indus Real Estate LLC, Dubai.
                      Connect with expert real estate agents for insights and
                      property show updates.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Breadcrumb Start */}

        {/* Blog Section Area */}
        <section className="our-blog pt-0">
          <Blog />
          {/* End .container */}
        </section>
        {/* End Blog Section Area */}

        {/* Start Our Footer */}
        <section className="footer-style1 at-home4-2 pt60 pb-0">
          <Footer />
        </section>
        {/* End Our Footer */}
      </div>
    </>
  );
};

export default VideosPage;
