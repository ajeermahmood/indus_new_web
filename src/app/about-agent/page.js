"use client";
import Footer from "@/components/home/home-v7/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import FormContact from "@/components/property/FormContact";

import { getAgentDetails } from "@/api/listings";
import ProfessionalInfo from "@/components/property/ProfessionalInfo";
import AvailableAgent from "@/components/property/agency-single/AvailableAgent";
import ListingItemsContainer from "@/components/property/agency-single/ListingItems";
import SingleAgencyCta from "@/components/property/agency-single/SingleAgencyCta";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

const AboutAgentPage = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get("id");

  const [data, setData] = useState("");

  useEffect(() => {
    getAgentDetails(params).then((res) => {
      setData(res);
    });
  }, []);
  return data == "" ? (
    <Box
      sx={{
        display: "flex",
        height: "60rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={60} />
    </Box>
  ) : (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Agent Single Section Area */}
      <section className="agent-single pt120">
        <div className="cta-agent bgc-dark mx-auto maxw1600 pt60 pb60 bdrs12 position-relative mx20-lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <SingleAgencyCta agent={data.agentData} />
                <div className="img-box-12 position-relative d-none d-xl-block">
                  <Image
                    width={120}
                    height={120}
                    className="img-1 spin-right"
                    src="/images/about/element-12.png"
                    alt="agents"
                  />
                  <Image
                    width={41}
                    height={11}
                    className="img-2 bounce-x"
                    src="/images/about/element-13.png"
                    alt="agents"
                  />
                  <Image
                    width={57}
                    height={49}
                    className="img-3 bounce-y"
                    src="/images/about/element-11.png"
                    alt="agents"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End cta-agent */}

        <div className="container">
          <div className="row wow fadeInUp" data-aos-delay="300">
            <div className="col-lg-8 pr40 pr20-lg">
              {data.agentData.client_user_bio != "" ? (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="agent-single-details mt30 pb30 bdrb1">
                      <h6 className="fz17 mb30">
                        About {data.agentData.client_user_name}
                      </h6>
                      <p className="text">{data.agentData.client_user_bio}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {/* End .row */}

              <ListingItemsContainer
                agentId={data.agentData.client_user_id}
                name={data.agentData.client_user_name}
              />
              {/* End .row */}

              <div className="row pt30 bdrb1">
                <div className="col-lg-12 mb-3">
                  <h6 className="fz17">Similar Team Members</h6>
                </div>
                <AvailableAgent similarAgents={data.similarAgents} />
              </div>
            </div>
            {/* End .col-lg-8 */}

            <div className="col-lg-4">
              <div className="agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                <h4 className="form-title mb25">Contact Form</h4>
                <FormContact />
              </div>
              <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                <ProfessionalInfo data={data.agentData} />
              </div>
            </div>
            {/* End .col-lg-4 */}
          </div>
        </div>
      </section>
      {/* End Agent Single Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AboutAgentPage;
