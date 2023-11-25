import React from "react";

const PropertyFeaturesAminites = ({ amenties }) => {
  return (
    <>
      {amenties.map((am, rowIndex) => (
        <div key={rowIndex} className="col-sm-6 col-md-4">
          <div className="pd-list">
            <p key={rowIndex} className="text mb10 paragraph-theme">
              <i className="fas fa-circle fz6 align-middle pe-2" />
              {am.amenity_name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;
