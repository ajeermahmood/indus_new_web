const OverView = ({ propData }) => {
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: propData.property_bedrooms != '-1' ? propData.property_bedrooms : 'Studio',
    },
    {
      icon: "flaticon-shower",
      label: "Bath",
      value: propData.property_bathrooms,
    },
    {
      icon: "flaticon-event",
      label: "Year Built",
      value: propData.property_build_year,
    },
    {
      icon: "flaticon-garage",
      label: "Garage",
      value: propData.property_parking_space,
    },
    {
      icon: "flaticon-expand",
      label: "Sqft",
      value: propData.property_size,
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: propData.property_type_name,
    },
  ];
  return (
    <>
      {overviewData.map((item, index) =>
        item.value != "0" ? (
          <div key={index} className="col-sm-6 col-md-4 col-xl-2">
            <div className="overview-element dark-version mb25 d-flex align-items-center">
              <span className={`icon ${item.icon}`} />
              <div className="ml15">
                <h6 className="mb-0 text-white">{item.label}</h6>
                <p className="text mb-0 fz15 text-white">{item.value}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default OverView;
