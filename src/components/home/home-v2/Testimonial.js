import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: "1st",
    imageSrc: "/images/testimonials/mihar-ved.png",
    text: "Great experience, good follow up service, friendly agents, great property management. Would recommend them to anyone!",
    name: "Mihar Ved",
    designation: "Customer",
  },
  {
    id: "2nd",
    imageSrc: "/images/testimonials/karan-variava.png",
    text: "Agent are friendly and they have good knowledge of Dubai and International market",
    name: "Karan Variava",
    designation: "Customer",
  },
  {
    id: "3rd",
    imageSrc: "/images/testimonials/muhannad-khawam.png",
    text: "The pinnacle of arrangement, refinement and cooperation It's like a beehive",
    name: "Muhannad Khawam",
    designation: "Customer",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`tab-pane fade ${
              testimonial.id === "1st" ? "show active" : ""
            }`}
            id={`pills-${testimonial.id}`}
            role="tabpanel"
            aria-labelledby={`pills-${testimonial.id}-tab`}
          >
            <div className="testi-content text-center">
              <span className="icon fas fa-quote-left" />
              <h4 className="testi-text">{testimonial.text}</h4>
              <h6 className="name">{testimonial.name}</h6>
              <p className="design">{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>
      {/* End tab-content */}
      <div className="tab-list position-relative">
        <ul
          className="nav nav-pills justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          {testimonials.map((testimonial) => (
            <li className="nav-item" role="presentation" key={testimonial.id}>
              <button
                className={`nav-link ${
                  testimonial.id === "1st" ? "ps-0" : ""
                } ${testimonial.id === "1st" ? "active" : ""} ${
                  testimonial.id === "5th" ? "pe-0" : ""
                }`}
                id={`pills-${testimonial.id}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${testimonial.id}`}
                type="button"
                role="tab"
                aria-controls={`pills-${testimonial.id}`}
                aria-selected={testimonial.id === "2nd" ? "true" : "false"}
              >
                <Image
                  width={70}
                  height={71}
                  src={testimonial.imageSrc}
                  alt=""
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Testimonial;
