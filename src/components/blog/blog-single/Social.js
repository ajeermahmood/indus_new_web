"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Social = ({ id }) => {
  const path = usePathname();
  const socialIcons = [
    "fab fa-facebook-f",
    "fab fa-twitter",
    "fab fa-instagram",
    "fab fa-linkedin-in",
  ];

  return (
    <>
      {socialIcons.map((iconClass, index) => (
        <a
          className="mr20"
          key={index}
          href={`https://www.facebook.com/sharer/sharer.php?u=indus-new-web.vercel.app/${path}?id=${id}`}
          target="_blank"
        >
          <i className={iconClass} />
        </a>
      ))}
    </>
  );
};

export default Social;
