import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Achievements from "@/data/achievements";

import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Achievements | Indus Real Estate LLC",
};

const AchievementsPage = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section pt130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Indus Achievements</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Achievements</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-agents pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            {Achievements.map((ach) => (
              <div key={ach.id} className="col-md-6 col-lg-4">
                <div
                  className="agency-style1 p30 bdrs12 bdr1 mb30"
                  style={{
                    minHeight: "28rem",
                  }}
                >
                  <div className="agency-img">
                    <Image
                      width={324}
                      height={209}
                      className="w-100 contain"
                      style={{
                        borderBottom: "1px solid #dddddd",
                      }}
                      src={ach.img}
                      alt="agency"
                    />
                  </div>
                  <div className="agency-details pt40">
                    <h6 className="agency-title mb1 text-capitalize fz20">
                      {ach.name}
                    </h6>
                    <p className="text-capitalize mb0 fz15">{ach.awardBy}</p>
                    <p className="text-capitalize fz15">{ach.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Agent Section Area */}
      {/* <FilteringAgency /> */}

      {/* End Agent Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AchievementsPage;
