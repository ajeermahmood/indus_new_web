import LaunchesFilters from "./launches-list/launchesFilterContainer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";

export const metadata = {
  title:
    "Indus Real Estate L.L.C | Latest & Upcoming Property Projects | Real Estate Launch",
  description: `Explore latest project by top developer like Emaar, Damac, Dubai Properties, Meraas, Danube, Aldar,Nakheel, Nshama and Binghatti. 
  Invest in the right property with our Latest Updates`,
};

const NewLaunchesPage = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://www.indusre.com/new-launches"
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
                  Indus Real Estate L.L.C | Latest & Upcoming Property Projects
                  | Real Estate Launch
                </h1>
                <div className="breadcumb-list">
                  <h6 className="fw400">
                    Explore latest project by top developer like Emaar, Damac,
                    Dubai Properties, Meraas, Danube, Aldar,Nakheel, Nshama and
                    Binghatti. Invest in the right property with our Latest
                    Updates
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Start */}

      {/* Blog Section Area */}
      <LaunchesFilters />
      {/* End Blog Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default NewLaunchesPage;
