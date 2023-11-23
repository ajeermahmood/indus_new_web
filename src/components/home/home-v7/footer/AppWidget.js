import React from "react";

const AppWidget = () => {
  const appList = [
    {
      icon: "fab fa-apple fz30 text-white",
      text: "Download on the",
      title: "Apple Store",
      link: "https://apps.apple.com/ae/app/indus-real-estate/id1574288570",
    },
    {
      icon: "fab fa-google-play fz30 text-white",
      text: "Get it on",
      title: "Google Play",
      link: "https://play.google.com/store/apps/details?id=io.indus.realestate",
    },
  ];

  return (
    <div className="app-widget">
      <h5 className="title  mb10">Apps</h5>
      <div className="row">
        {appList.map((app, index) => (
          <div className="col-auto" key={index}>
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              <div
                className={`app-info light-style d-flex align-items-center mb10 bg-indus`}
              >
                <div className="flex-shrink-0">
                  <i className={app.icon} />
                </div>
                <div className="flex-grow-1 ml20">
                  <p
                    className={`app-text fz13 mb0 text-light`}
                  >
                    {app.text}
                  </p>
                  <h6 className="app-title text-white fz14">{app.title}</h6>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWidget;
