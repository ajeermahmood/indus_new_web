"use client";
import { useEffect, useState } from "react";

export default function ScrollDownCustom() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset < 100) {
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
          <div class="arrow-custom"></div>
        </div>
      )}
    </>
  );
}
