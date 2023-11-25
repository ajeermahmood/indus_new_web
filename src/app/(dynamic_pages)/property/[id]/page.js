import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import ContactWithAgent from "@/components/property/property-single-style/sidebar/ContactWithAgent";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import PropertyGallery from "@/components/property/property-single-style/single-v4/property-gallery";
import OverView from "@/components/property/property-single-style/single-v7/OverView";
import PropertyHeader from "@/components/property/property-single-style/single-v7/PropertyHeader";

// export async function generateStaticParams() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     `https://indusspeciality.com/api/listings/get_all_properties_ids_for_SSG.php`,
//     {
//       method: "GET",
//     }
//   );
//   const props = await res.json();

//   return props.map((p) => ({
//     id: p.property_id,
//   }));
// }

export async function getProperty(id) {
  const res = await fetch(
    `https://indusspeciality.com/api/listings/get_property_details.php`,
    {
      // cache: "force-cache",
      method: "POST",
      body: JSON.stringify({
        prop_id: id,
      }),
    }
  );
  const data = await res.json();

  return data;
}

export async function generateMetadata({ params }) {
  const staticData = await fetch(
    `https://indusspeciality.com/api/listings/get_property_details.php`,
    {
      // cache: "force-cache",
      method: "POST",
      body: JSON.stringify({
        prop_id: params.id,
      }),
    }
  );

  const data = await staticData.json();
  return {
    title: `${data.property_title}, ${data.location_name}`,
  };
}

async function PropertyPage({ params }) {
  const data = await getProperty(params.id);

  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* <!-- Start Property Singe Top --> */}
      <section className="pt130 pb60 pb0 bgc-dark">
        <div className="container">
          <div className="row">
            <PropertyHeader propData={data} />
          </div>
          {/* End .row */}

          <div className="row  mt30">
            <PropertyGallery data={data} />
          </div>
          {/* End .row */}

          <div className="row mt70">
            <OverView propData={data} />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Property Singe Top --> */}

      {/* Property All Single V7 */}
      <section className="pt60 pb90 bgc-white">
        <div className="container">
          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Property Description</h4>
                <ProperytyDescriptions desc={data.property_description} />
                {/* End property description */}

                <h4 className="title fz17 mb30 mt50">Property Details</h4>
                <div className="row">
                  <PropertyDetails data={data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Address</h4>
                <div className="row">
                  <PropertyAddress data={data} />
                </div>
              </div>
              {/* End .ps-widget */}

              {data.amenties != "none" ? (
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Features &amp; Amenities</h4>
                  <div className="row">
                    <PropertyFeaturesAminites amenties={data.amenties} />
                  </div>
                </div>
              ) : (
                <></>
              )}

              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Energy Class</h4>
                <div className="row">
                  <EnergyClass />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Floor Plans</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion-style1 style2">
                      <FloorPlans />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End .ps-widget */}

              {data.property_video != "" ? (
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                  <h4 className="title fz17 mb30">Video</h4>
                  <div className="row">
                    <PropertyVideo />
                  </div>
                </div>
              ) : (
                <></>
              )}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">360° Virtual Tour</h4>
                <div className="row">
                  <VirtualTour360 />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">What&apos;s Nearby?</h4>
                <div className="row">
                  <PropertyNearby />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Walkscore</h4>
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="fw400 mb20">
                      10425 Tabor St Los Angeles CA 90034 USA
                    </h4>
                    <WalkScore />
                  </div>
                </div>
              </div> */}
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Mortgage Calculator</h4>
                <div className="row">
                  <MortgageCalculator />
                </div>
              </div>
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  <PropertyViews />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Home Value</h4>
                <div className="row">
                  <HomeValueChart />
                </div>
              </div> */}
              {/* End .ps-widget */}
              {data.agent != null ? (
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Get More Information</h4>
                  <InfoWithForm agent={data.agent} />
                </div>
              ) : (
                <></>
              )}

              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  <AllReviews />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Leave A Review</h4>
                <div className="row">
                  <ReviewBoxForm />
                </div>
              </div> */}
              {/* End .ps-widget */}
            </div>
            {/* End .col-8 */}

            <div className="col-lg-4">
              <div className="column">
                <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                  <h4 className="form-title mb5">Schedule a tour</h4>
                  <p className="text">Choose your preferred day</p>
                  <ScheduleTour />
                </div>
                {/* End .Schedule a tour */}

                {data.agent != null ? (
                  <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                    <div className="widget-wrapper mb-0">
                      <h6 className="title fz17 mb30">Get More Information</h6>
                      <ContactWithAgent agent={data.agent} />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          {/* End .row */}
          {data.similarProps.length != 0 ? (
            <>
              <div className="row mt30 align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="main-title">
                    <h2 className="title">Discover Similar Properties</h2>
                    <p className="paragraph">
                      Below shows similar type of properties.
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
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="property-city-slider">
                    <NearbySimilarProperty props={data.similarProps} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V7  */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
}

export default PropertyPage;
