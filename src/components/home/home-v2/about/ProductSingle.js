import { Skeleton } from "@mui/material";
import Link from "next/link";

const ProductSingle = ({ property }) => {
  return (
    <>
      {property == "" ? (
        <div className="listing-style1 mini-style bounce-y">
          <div className="list-content">
            <h6 className="list-title">
              <Skeleton variant="rectangular" width={250} height={20} />
            </h6>
            <p className="list-text mt10">
              <Skeleton variant="rectangular" width={200} height={15} />
            </p>
            <div className="list-meta d-flex align-items-center">
              <a href="#">
                <Skeleton variant="rectangular" width={30} height={20} />
              </a>
              <a href="#">
                <Skeleton variant="rectangular" width={30} height={20} />
              </a>
              <a href="#">
                <Skeleton variant="rectangular" width={30} height={20} />
              </a>
            </div>
            <Link href={``} className="btn mt15 fz15">
              <Skeleton variant="rectangular" width={130} height={35} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="listing-style1 mini-style bounce-y">
          <div className="list-content">
            <h6 className="list-title">
              <Link
                href={`/property-details/?id=${property.property_id}`}
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  display: "block",
                }}
              >
                {property.property_title}
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
              {" "}
              {property.location_sub_name != ""
                ? property.location_sub_name + ", "
                : ""}
              {property.location_name}
            </p>
            <div className="list-meta d-flex align-items-center">
              <a href="#">
                <span className="flaticon-bed" />
                {property.property_bedrooms != "-1"
                  ? property.property_bedrooms
                  : "Studio"}
              </a>
              <a href="#">
                <span className="flaticon-shower" />
                {property.property_bathrooms}
              </a>
              <a href="#">
                <span className="flaticon-expand" />
                {property.property_size}
              </a>
            </div>
            <Link
              href={`/property-details/?id=${property.property_id}`}
              className="btn mt15 fz15"
            >
              View House
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSingle;
