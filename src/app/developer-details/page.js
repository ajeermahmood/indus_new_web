"use client";
import { getDeveloperDetails } from "@/app/api/listings";
import Pagination from "@/components/blog/blog-single/Pagination";
import Details from "@/components/blog/dev-single/Details";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DevelopersDetailsPage = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get("id");

  const [data, setData] = useState("");

  useEffect(() => {
    getDeveloperDetails(params).then((res) => {
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

      {/* Blog Section Area */}
      <section className="our-blog pt130">
        <Details devData={data} />

        <div className="container">
          <div className="roww" data-aos="fade-up" data-aos-delay="500">
            <div className="col-xl-8 offset-xl-2">
              <div
                className="mt50 mb50 fz20"
                dangerouslySetInnerHTML={{ __html: data.short_description }}
              ></div>
              <div
                className="mt50 mb50 fz20"
                dangerouslySetInnerHTML={{ __html: data.about_builder }}
              ></div>

              <div className="col-lg-12 mt40">
                <Image
                  width={804}
                  height={470}
                  priority
                  src={`https://www.indusre.com/images/builders/about-image/${data.about_image}`}
                  alt="blog"
                  className="bdrs12 post-img-2 w-100 h-100 cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default DevelopersDetailsPage;
