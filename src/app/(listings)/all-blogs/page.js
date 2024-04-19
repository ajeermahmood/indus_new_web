import BlogFilters from "@/components/blog/blog-list/BlogFilterContainer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";

export const metadata = {
  title: "Indus Real Estate LLC | Dubai Real Estate Blog | Expert Insights",
  description: `Explore the latest insights and expert opinions on the Dubai real estate market. 
                Stay informed with our blog posts covering trends, tips, and news.`,
};

const AllBlogsPage = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://www.indusre.com/all-blogs"
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
                <h1 className="title">
                  Discover Expert Insights on Dubai Real Estate
                </h1>
                <div className="breadcumb-list">
                  <h6 className="fw400">
                    Explore the latest insights and expert opinions on the Dubai
                    real estate market. Stay informed with our blog posts
                    covering trends, tips, and news.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Start */}

      {/* Blog Section Area */}
      <BlogFilters />
      {/* End Blog Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AllBlogsPage;
