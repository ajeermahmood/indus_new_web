import MobileMenu from "@/components/common/mobile-menu";
import BannerSlider from "@/components/home/home-v10/BannerSlider";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import PropertyGallery from "@/components/property/property-single-style/single-v1/PropertyGallery";
import Link from "next/link";

// export async function generateStaticParams() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     `https://indusspeciality.com/api/listings/get_all_community_guides_ids_for_SSG.php`,
//     {
//       method: "GET",
//     }
//   );
//   const props = await res.json();

//   return props.map((p) => ({
//     id: p.ps_guide_id,
//   }));
// }

export async function getCommunityGuide(id) {
  const res = await fetch(
    `https://indusspeciality.com/api/listings/get_community_guide_details.php`,
    {
      // cache: "force-cache",
      method: "POST",
      body: JSON.stringify({
        guide_id: id,
      }),
    }
  );
  const data = await res.json();

  return data;
}

export async function generateMetadata({ params }) {
  const staticData = await fetch(
    `https://indusspeciality.com/api/listings/get_community_guide_details.php`,
    {
      // cache: "force-cache",
      method: "POST",
      body: JSON.stringify({
        guide_id: params.id,
      }),
    }
  );

  const data = await staticData.json();
  return {
    title: `Community guide for ${data.location_name}`,
  };
}

async function CommunityGuidePage({ params }) {
  const data = await getCommunityGuide(params.id);

  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />

      <section className="our-blog pt80">
        {/* <Details data={data} /> */}

        <div
          className="banner-wrapper main-banner-wrapper  position-relative banner-style-one"
          style={{
            maxHeight: "55rem",
          }}
        >
          <BannerSlider
            hightlights={data.highlights}
            title={data.location_name}
            url={data.more_details_url}
          />
        </div>

        <div className="container">
          <div className="roww" data-aos="fade-up" data-aos-delay="500">
            <div className="col-xl-8 offset-xl-2">
              <div className="ui-content mt40 mb60">
                <p className="mb25 ff-heading fz20">{data.location_blurb}</p>
                <div
                  className="ff-heading fz20"
                  dangerouslySetInnerHTML={{
                    __html: data.location_description,
                  }}
                ></div>
              </div>

              {/* End  blockquote*/}

              <div className="col-12 ui-content">
                <h4 className="title">Glimpse of {data.location_name}</h4>
              </div>
            </div>
          </div>
          <div className="row mb30 mt30">
            <PropertyGallery id={1} galery={data.images} />
          </div>

          {data.props.length != 0 ? (
            <>
              <div className="row mt100 align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="main-title">
                    <h2 className="title">
                      Discover Properties In {data.location_name}
                    </h2>
                    <p className="paragraph">
                      Below shows properties from {data.location_name}.
                    </p>
                  </div>
                </div>
                {/* End header */}

                <div className="col-auto mb30">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-auto">
                      <button className="featured-prev__active swiper_button">
                        <i className="far fa-arrow-left-long" />
                      </button>
                    </div>
                    {/* End prev */}

                    <div className="col-auto">
                      <div className="pagination swiper--pagination featured-pagination__active" />
                    </div>
                    {/* End pagination */}

                    <div className="col-auto">
                      <button className="featured-next__active swiper_button">
                        <i className="far fa-arrow-right-long" />
                      </button>
                    </div>
                    {/* End Next */}
                  </div>
                  {/* End .col for navigation and pagination */}
                </div>
                {/* End .col for navigation and pagination */}
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="property-city-slider">
                    <NearbySimilarProperty props={data.props} />
                  </div>
                </div>
              </div>
              <div className="d-grid d-md-block text-center mt30 mt0-md">
                <Link
                  href={`/all-properties?lc=${data.location_id}`}
                  className="ud-btn btn-dark bdrs0"
                >
                  View All<i className="fal fa-arrow-right-long"></i>
                </Link>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
}

export default CommunityGuidePage;
