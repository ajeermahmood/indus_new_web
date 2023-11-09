"use client";
import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("buy");
  return (
    <>
      <div className="inner-banner-style2 text-center position-relative">
        <HeroContent activeTab={activeTab} setActiveTab={setActiveTab} />
        <h2 className="hero-title" data-aos="fade-up" data-aos-delay="150">
          <i>
            {" "}
            Service you Deserve, <br /> People you Trust!
          </i>
        </h2>
        <p className="hero-text fz15" data-aos="fade-up" data-aos-delay="250">
          Let’s find a home that’s perfect for you
        </p>
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal listingStatus={activeTab} />
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
