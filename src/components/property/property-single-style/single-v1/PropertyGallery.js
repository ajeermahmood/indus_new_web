"use client";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import { useLayoutEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const PropertyGallery = ({ galery }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);
  return (
    <>
      <Gallery>
        <div className="col-sm-6">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img" ref={targetRef}>
              <Item
                original={`https://www.indusre.com/communityimg/${galery[0].ps_gallery_image}`}
                thumbnail={`https://www.indusre.com/communityimg/${galery[0].ps_gallery_image}`}
                width={1000}
                height={710}
              >
                {({ ref, open }) => (
                  <Image
                    src={`https://www.indusre.com/communityimg/${galery[0].ps_gallery_image}`}
                    width={591}
                    height={558}
                    ref={ref}
                    onClick={open}
                    alt="image"
                    role="button"
                    className="w-100 h-100 cover"
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6">
          <div className="row">
            {galery.slice(1, 5).map((image, index) => (
              <div className="col-6 ps-sm-0" key={index}>
                <div className="sp-img-content">
                  <div
                    className={`popup-img preview-img-${index + 2} sp-img mb10`}
                    style={{
                      height: `${dimensions.height / 2 - 6}px`,
                    }}
                  >
                    <Item
                      original={`https://www.indusre.com/communityimg/${image.ps_gallery_image}`}
                      thumbnail={`https://www.indusre.com/communityimg/${image.ps_gallery_image}`}
                      width={1000}
                      height={710}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={270}
                          height={250}
                          className="w-100 h-100 cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={`https://www.indusre.com/communityimg/${image.ps_gallery_image}`}
                          alt={"imgs"}
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
