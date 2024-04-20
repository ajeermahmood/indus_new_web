"use client";
import { useEffect, useState } from "react";

export default function ScrollDownCustom() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 500) {
      setIsVisible(true);
    }
    const toggleVisibility = () => {
      if (window.pageYOffset < 100 && window.innerWidth > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="scroll-down-custom">
          <span className="fz10 fw600">Scroll</span>
          <div className="arrow-custom"></div>
        </div>
      )}
    </>
  );
}
