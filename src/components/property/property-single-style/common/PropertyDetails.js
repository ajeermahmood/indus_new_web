import React from "react";

const PropertyDetails = ({ data }) => {
  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  const columns = [
    [
      {
        label: "Reference ID",
        value: data.property_reference,
      },
      {
        label: "Price",
        value: currencyFormatter.format(data.property_price),
      },
      {
        label: "Property Size",
        value: `${data.property_size} Sq Ft`,
      },
      {
        label: "Bedrooms",
        value:
          data.property_bedrooms != "-1" ? data.property_bedrooms : "Studio",
      },
      {
        label: "Bathrooms",
        value: data.property_bathrooms,
      },
    ],
    [
      {
        label: "Garage",
        value: data.property_parking_space,
      },
      {
        label: "Year Built",
        value: data.property_build_year,
      },
      {
        label: "Property Type",
        value: data.property_type_name,
      },
      {
        label: "Property Status",
        value: data.property_category_name == "Buy" ? "For Sale" : "For Rent",
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) =>
            detail.value != "0" ? (
              <div key={index} className="d-flex justify-content-between">
                <div className="pd-list">
                  <p className="fw600 mb10 ff-heading dark-color">
                    {detail.label}
                  </p>
                </div>
                <div className="pd-list">
                  <p className="text mb10">{detail.value}</p>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
