import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, type, loading }) => {
  const skeletonLoader = [1, 2, 3, 4, 5, 6];
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  return (
    <>
      {!loading && data.length == 0 ? (
        <div className="col w-100 mt60">
          <div className="row justify-content-center">
            <Image
              src="/images/svg/no-data.svg"
              width={200}
              height={200}
              className="mb3"
              alt="no-data"
            />
          </div>

          <p className="text-center mb60">
            <b>Sorry, No Listings Available!</b>
          </p>
        </div>
      ) : (
        <></>
      )}
      {loading
        ? skeletonLoader.map((sk) => (
            <div className="col-sm-6 col-lg-4" key={sk.id}>
              <div className="listing-style8">
                <div className="list-thumb">
                  <Skeleton
                    // className="w-100 h-100"
                    variant="rectangular"
                    width={382}
                    height={248}
                  />

                  <div className="sale-sticker-wrap">
                    {/* <div className="list-tag2 rounded-0 fz12">FOR SALE</div> */}
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
                    <Skeleton variant="rectangular" width={300} height={30} />
                  </h6>
                  {/* <p className="list-text">{listing.location_name}</p> */}
                  <Skeleton
                    className="mt-2"
                    variant="rectangular"
                    width={300}
                    height={15}
                  />

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="list-meta2 d-flex align-items-center">
                      <a href="#" className="mr10">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={30}
                        />
                      </a>
                      <a href="#" className="mr10">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={30}
                        />
                      </a>
                      <a href="#">
                        <Skeleton
                          variant="rectangular"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                    {/* <div className="list-price"> */}
                    <Skeleton variant="rectangular" width={100} height={30} />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))
        : data.map((listing) => (
            <div className="col-sm-6 col-lg-4" key={listing.id}>
              <div className="listing-style8">
                <div
                  className="list-thumb"
                  // style={{
                  //   height: "15rem !Important",
                  // }}
                >
                  <Image
                    width={382}
                    height={248}
                    className="w-100 cover"
                    src={listing.dp_1}
                    alt="listings"
                  />
                  <div className="sale-sticker-wrap">
                    {/* {listing.featured && (
                  <div className="list-tag rounded-0 fz12">
                    <span className="flaticon-electricity" />
                    FEATURED
                  </div>
                )} */}
                    <div className="list-tag2 rounded-0 fz12">
                      {type == "rent" ? "FOR RENT" : "FOR SALE"}
                    </div>
                  </div>
                  <div
                    className="list-meta"
                    style={{
                      height: "11rem !Important",
                    }}
                  >
                    {/* <a className="rounded-0 mr5" href="#">
                      <span className="flaticon-like"></span>
                    </a> */}
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
                    <Link
                      href={`/property-details/?id=${listing.property_id}`}
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        display: "block",
                      }}
                    >
                      {listing.property_title}
                    </Link>
                  </h6>
                  <p
                    className="list-text"
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      display: "block",
                    }}
                  >
                    {listing.location_sub_name != ""
                      ? listing.location_sub_name + ", "
                      : ""}
                    {listing.location_name}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="list-meta2 d-flex align-items-center">
                      <a href="#" className="mr10">
                        <span className="flaticon-bed" />{" "}
                        {listing.property_bedrooms != "-1"
                          ? listing.property_bedrooms
                          : "Studio"}
                      </a>
                      <a href="#" className="mr10">
                        <span className="flaticon-shower" />{" "}
                        {listing.property_bathrooms}
                      </a>
                      <a href="#">
                        <span className="flaticon-expand" />{" "}
                        {listing.property_size}
                      </a>
                    </div>
                    <div className="list-price">
                      {currencyFormatter.format(listing.property_price)}{" "}
                      {type == "rent" ? <span>/ mo</span> : <></>}
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
