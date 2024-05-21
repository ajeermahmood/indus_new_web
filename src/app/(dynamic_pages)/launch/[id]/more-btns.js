"use client";
import CommonDialog from "@/components/common/common-form";
import { useRef } from "react";

const MoreBtnsLaunch = () => {
  const commonDialog = useRef();

  const openCommonDialog = () => {
    commonDialog.current?.handleOpen();
  };

  return (
    <>
      {/* End container */}

      <CommonDialog ref={commonDialog} />
      <div
        onClick={openCommonDialog}
        className="mt25 mr25 ud-btn btn-dark bdrs0 cursor-pointer"
      >
        Know More<i className="fal fa-arrow-right-long"></i>
      </div>
      <div
        onClick={openCommonDialog}
        className="mt25 ud-btn btn-dark bdrs0 cursor-pointer"
      >
        Download
      </div>
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
    </>
  );
};

export default MoreBtnsLaunch;
