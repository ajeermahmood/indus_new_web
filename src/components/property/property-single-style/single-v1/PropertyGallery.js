"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const PropertyGallery = ({ galery }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  const [thirdImageLoaded, setThirdImageLoaded] = useState(false);
  const [fourthImageLoaded, setFourthImageLoaded] = useState(false);
  const [fifthImageLoaded, setFifthImageLoaded] = useState(false);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  const getImgLoadVar = (index) => {
    switch (index) {
      case 0:
        return secondImageLoaded;
      case 1:
        return thirdImageLoaded;
      case 2:
        return fourthImageLoaded;
      case 3:
        return fifthImageLoaded;
      default:
        break;
    }
  };

  const getImgLoadFunc = (index) => {
    switch (index) {
      case 0:
        setSecondImageLoaded(true);
        break;
      case 1:
        setThirdImageLoaded(true);
        break;
      case 2:
        setFourthImageLoaded(true);
        break;
      case 3:
        setFifthImageLoaded(true);
        break;
      default:
        break;
    }
  };
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
                  <>
                    <Image
                      src={`https://www.indusre.com/communityimg/${galery[0].ps_gallery_image}`}
                      width={591}
                      height={558}
                      ref={ref}
                      onClick={open}
                      alt="image"
                      role="button"
                      className={`${
                        !mainImageLoaded
                          ? "opacity-0 position-absolute w-100 h-100 cover"
                          : "opacity-100 w-100 h-100 cover position-relative"
                      }}`}
                      onLoadingComplete={() => setMainImageLoaded(true)}
                    />

                    {!mainImageLoaded ? (
                      <Skeleton
                        variant="rectangular"
                        className="w-100 h-100 cover"
                        width={591}
                        height={558}
                      />
                    ) : (
                      <></>
                    )}
                  </>
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
                        <>
                          <Image
                            src={`https://www.indusre.com/communityimg/${image.ps_gallery_image}`}
                            width={270}
                            height={250}
                            ref={ref}
                            onClick={open}
                            alt="image"
                            role="button"
                            className={`${
                              !getImgLoadVar(index)
                                ? "opacity-0 position-absolute w-100 h-100 cover"
                                : "opacity-100 w-100 h-100 cover position-relative"
                            }}`}
                            onLoadingComplete={() => getImgLoadFunc(index)}
                          />

                          {!getImgLoadVar(index) ? (
                            <Skeleton
                              variant="rectangular"
                              className="w-100 h-100 cover"
                              width={270}
                              height={250}
                            />
                          ) : (
                            <></>
                          )}
                        </>
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
