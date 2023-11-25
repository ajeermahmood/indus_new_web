"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import "../../public/scss/main.scss";
import Script from "next/script";

if (typeof window !== "undefined") {
  import("bootstrap");
}

// DM_Sans font
// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--body-font-family",
// });

// Poppins font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`body ${montserrat.className}`}
        cz-shortcut-listen="false"
      >
        <Script
          id="google-analytics-script-01"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-JCNP22Y3HM`}
        />

        <Script id="google-analytics-script-02" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JCNP22Y3HM', {
            page_path: window.location.pathname,
            });
          `}
        </Script>
        <div className="wrapper ovh">{children}</div>

        <ScrollToTop />
      </body>
    </html>
  );
}
