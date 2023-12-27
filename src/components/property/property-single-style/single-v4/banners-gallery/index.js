"use client";
import { getAllIndusBanners } from "@/api/listings";
import CommonDialog from "@/components/common/common-form";
import { Dialog } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import GalleryBox from "./GalleryBox";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const PropertyGallery = () => {
  const size = useWindowSize();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [adOpened, setAdOpened] = useState(sessionStorage.getItem("ad"));
  useEffect(() => {
    getAllIndusBanners()
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const commonDialog = useRef();

  const openCommonDialog = () => {
    handleClose();
    commonDialog.current?.handleOpen();
  };

  return (
    <>
      {/* End container */}

      <CommonDialog ref={commonDialog} />

      <div className="ps-v4-hero-tab">
        <div className="tab-content overflow-visible" id="pills-tabContent2">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container">
              <div className="row" data-aos="fade">
                <div className="col-lg-12">
                  <div className="ps-v4-hero-slider">
                    <GalleryBox
                      banners={data}
                      loading={loading}
                      size={size}
                      openCommonDialog={openCommonDialog}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
    </>
  );
};

export default PropertyGallery;
