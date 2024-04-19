import BlogFilterContainer from "@/components/blog/blog-list-v3/BlogFilterContainer";
import Footer from "@/components/home/home-v7/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";

export const metadata = {
  title: "Indus Real Estate LLC | Dubai Luxury Properties",
};

const AllNewsPage = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://www.indusre.com/all-news"
        key="canonical"
      />
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
                <h2 className="title">All News</h2>
                <div className="breadcumb-list">
                  <h6 className="fw400">
                    Stay informed with the newest updates and insights on
                    Dubai&apos;s real estate scene. Discover expert analysis, trends,
                    and market developments at Indus Real Estate LLC.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Start */}

      {/* Blog Section Area */}
      <BlogFilterContainer />
      {/* End Blog Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AllNewsPage;
