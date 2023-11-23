const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "1. Shortlist a property on the portal",
    },
    {
      icon: "flaticon-keywording",
      title: "2. Book a Date & time when you want to visit",
    },
    {
      icon: "flaticon-investment",
      title: "3. Reach the property and confirm that you are there",
    },
    {
      icon: "flaticon-investment",
      title: "4. You will get an OTP to unlock the door",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1 fz20 mr45">{feature.title}</h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
