import React from "react";

const PropertyAddress = ({ data }) => {
  return (
    <>
      <div className={`col-md-6 col-xl-5`}>
        <div className="d-flex justify-content-between">
          <div className="pd-list">
            <p className="fw600 mb10 ff-heading dark-color">Address</p>
            <p className="fw600 mb10 ff-heading dark-color">City</p>
            <p className="fw600 mb-0 ff-heading dark-color">State/county</p>
          </div>
          <div className="pd-list">
            <p className="text mb10">{data.location_sub_name}</p>
            <p className="text mb10">{data.location_name}</p>
            <p className="text mb-0">UAE</p>
          </div>
        </div>
      </div>

      {/* End col */}

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${data.location_sub_name}&t=m&z=14&output=embed&iwloc=near`}
          title={data.location_sub_name}
          aria-label={data.location_sub_name}
        />
      </div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
