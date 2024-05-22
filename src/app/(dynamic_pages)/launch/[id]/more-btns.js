"use client";
import CommonDialog from "@/components/common/common-form";
import { useRef } from "react";

const MoreBtnsLaunch = ({ redirect }) => {
  const commonDialog = useRef();

  const openCommonDialog = (redirect, purpose) => {
    commonDialog.current?.handleOpen(redirect, purpose);
  };

  return (
    <>
      {/* End container */}

      <CommonDialog ref={commonDialog} />
      <div
        onClick={() => openCommonDialog(undefined, undefined)}
        className="mt25 mr25 ud-btn btn-dark bdrs0 cursor-pointer"
      >
        Know More<i className="fal fa-arrow-right-long"></i>
      </div>
      <div
        onClick={() => openCommonDialog(redirect, "brochure")}
        className="mt25 ud-btn btn-dark bdrs0 cursor-pointer"
      >
        Download Brochure
      </div>
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
    </>
  );
};

export default MoreBtnsLaunch;
