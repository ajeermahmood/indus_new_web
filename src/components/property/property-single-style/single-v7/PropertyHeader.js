"use client";

const PropertyHeader = ({ propData }) => {
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title text-white">{propData.property_title}</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text text-white fz15 mb-0 pr10 bdrrn-sm">
              {propData.location_name}, {propData.location_sub_name}, UAE
            </p>
          </div>
          <div className="property-meta d-flex align-items-center">
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 bdrrn-sm"
              href="#"
            >
              <i className="fas fa-circle fz10 pe-2" />
              {propData.property_category_name == "Buy" ? "For Sale" : "For Rent"}
            </a>
            {propData.property_build_year != "0" ? (
              <a
                className="ff-heading text-white bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
                href="#"
              >
                <i className="far fa-clock pe-2" />{" "}
                {new Date().getFullYear() -
                  Number(propData.property_build_year)}{" "}
                years ago
              </a>
            ) : (
              <></>
            )}

            <a className="ff-heading text-white ml10 ml0-sm fz15" href="#">
              <i className="flaticon-fullscreen pe-2 align-text-top" />
              {propData.property_size} SqFt
            </a>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action dark-version text-lg-end">
            <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
              <a className="icon mr10" href="#">
                <span className="flaticon-like" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-new-tab" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-share-1" />
              </a>
              <a className="icon" href="#">
                <span className="flaticon-printer" />
              </a>
            </div>
            <h3 className="price mb-0 text-white">
              {currencyFormatter.format(propData.property_price)}
            </h3>
            <p className="text space fz15 text-white">
              {(
                Number(propData.property_price) / Number(propData.property_size)
              ).toFixed(2)}
              /sq ft
            </p>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
