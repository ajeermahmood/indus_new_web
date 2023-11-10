"use client";
import { useEffect, useState } from "react";
import GalleryBox from "./GalleryBox";
import { getAllIndusBanners } from "@/api/listings";
import { Dialog } from "@mui/material";
import Image from "next/image";

const PropertyGallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllIndusBanners()
      .then((res) => {
        setData(res);
        // console.log(res);
        setAlertDialogImg(res[0]);
      })
      .finally(() => {
        setLoading(false);

        setTimeout(() => {
          handleOpen();
        }, 4000);
      });
  }, []);

  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [alertDialogImg, setAlertDialogImg] = useState("");

  const handleClose = () => {
    setOpenAlertDialog(false);
  };

  const handleOpen = () => {
    setOpenAlertDialog(true);
  };

  return (
    <>
      {/* End container */}

      <div className="ps-v4-hero-tab">
        <div className="tab-content overflow-visible" id="pills-tabContent2">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container">
              <div className="row" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-12">
                  <div className="ps-v4-hero-slider">
                    <GalleryBox banners={data} loading={loading} />
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
      <Dialog onClose={handleClose} open={openAlertDialog} maxWidth="md">
        <button
          type="button"
          className="btn-close close-btn-alert-banner"
          onClick={handleClose}
        />
        <Image
          width={900}
          height={641}
          className={`w-100`}
          src={alertDialogImg.image}
          alt={`img`}
        />
        <a
          target="_blank"
          className="custom-btn-alert-banner"
          href="https://wa.me/971080046387"
        >
          Contact Now
        </a>
      </Dialog>
    </>
  );
};

export default PropertyGallery;
