import React from "react";

const ProfessionalInfo = ({ data }) => {
  const professionalInfoData = [
    {
      label: "Designation",
      content:
        data.client_user_designation != "" ? data.client_user_designation : "-",
    },
    {
      label: "BRN",
      content: data.client_user_brn != "" ? data.client_user_brn : "-",
    },
    {
      label: "Mobile",
      content: data.client_user_phone != "" ? data.client_user_phone : "-",
    },
    {
      label: "Email",
      content: data.client_user_email != "" ? data.client_user_email : "-",
    },
    {
      label: "Nationality",
      content:
        data.client_user_nationality != "" ? data.client_user_nationality : "-",
    },
    {
      label: "Languages",
      content:
        data.client_user_languages != "" ? data.client_user_languages : "-",
    },
    // { label: "Experience since", content: data.client_user_experience_since },
  ];
  return (
    <div className="widget-wrapper mb-0">
      <h6 className="title fz17 mb35">Professional Information</h6>
      {professionalInfoData.map((info, index) => (
        <div
          key={index}
          className="list-news-style d-flex align-items-center justify-content-between mb10"
        >
          <div className="flex-shrink-0">
            <h6 className="fz14 mb-0">{info.label}</h6>
          </div>
          <div className="news-content flex-shrink-1 ms-3 text-end">
            <p className="text mb-0 fz14">{info.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalInfo;
