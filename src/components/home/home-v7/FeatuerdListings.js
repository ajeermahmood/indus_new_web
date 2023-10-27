
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({data}) => {
  // console.log(data);
  return (
    <>
      {data.map((listing) => (
        <div className="col-sm-6 col-lg-4" key={listing.id}>
          <div className="listing-style8">
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100 h-100 cover"
                src={listing.properties_image_name}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {/* {listing.featured && (
                  <div className="list-tag rounded-0 fz12">
                    <span className="flaticon-electricity" />
                    FEATURED
                  </div>
                )} */}
                <div className="list-tag2 rounded-0 fz12">FOR SALE</div>
              </div>
              <div className="list-meta">
                <a className="rounded-0 mr5" href="#">
                  <span className="flaticon-like"></span>
                </a>
                <a className="rounded-0 mr5" href="#">
                  <span className="flaticon-new-tab"></span>
                </a>
                <a className="rounded-0" href="#">
                  <span className="flaticon-fullscreen"></span>
                </a>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/single-v5/${listing.property_reference}`}>{listing.property_title}</Link>
              </h6>
              <p className="list-text">{listing.location_name}</p>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="list-meta2 d-flex align-items-center">
                  <a href="#" className="mr10">
                    <span className="flaticon-bed" /> {listing.property_bedrooms}
                  </a>
                  <a href="#" className="mr10">
                    <span className="flaticon-shower" /> {listing.property_bathrooms}
                  </a>
                  <a href="#">
                    <span className="flaticon-expand" /> {listing.property_size}
                  </a>
                </div>
                <div className="list-price">
                  {listing.property_price} / <span>mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
