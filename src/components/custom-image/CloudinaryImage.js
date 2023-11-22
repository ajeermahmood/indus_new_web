import React from "react";
import Image from "next/image";
const CloudinaryImage = ({ src, width, height, alt, className }) => {
  const cloudinaryImageLoader = ({ src, width ,height}) => {
    return `https://res.cloudinary.com/ugwutotheeshoes/image/upload/bo_10px_solid_rgb:f78585,e_blur:290,b_rgb:e1e6e9,c_scale,r_10,h_${height},w_${width}/v1632752254/${src}`;
  };
  return (
    <Image
      loader={cloudinaryImageLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
export default CloudinaryImage;
