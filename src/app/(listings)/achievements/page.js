import FilteringAchievements from "@/components/achievements/FilteringAchievements";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";

export const metadata = {
  title:
    "Indus Real Estate LLC: 20 Years of Success, 160+ Awards, Countless Dreams Realized",
  description: `Discover the remarkable achievements and accolades earned by Indus Real Estate LLC over the past two decades. 
                With more than 160 prestigious awards, we stand as a testament to excellence in the real estate industry
  `,
};
const AchievementsPage = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://www.indusre.com/achievements"
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
                <h1 className="title">
                  Indus Real Estate LLC: Unveiling 20 Years of Triumphs - 160+
                  Awards and Beyond
                </h1>
                <div className="breadcumb-list">
                  <h6 className="fw400">
                    Discover the remarkable achievements and accolades earned by
                    Indus Real Estate LLC over the past two decades. With more
                    than 160 prestigious awards, we stand as a testament to
                    excellence in the real estate industry
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FilteringAchievements />

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AchievementsPage;
