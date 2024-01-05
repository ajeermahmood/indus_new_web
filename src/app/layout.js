"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { useEffect, useState } from "react";
import "../../public/scss/main.scss";

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
  // const [chatOpen, setChatOpen] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });

    // setTimeout(() => {
    //   document.getElementById("closeBTN").addEventListener("click", () => {
    //     // console.log("close");
    //     setChatOpen(false);
    //     document.getElementById("ChatDiv").classList.remove("d-block");
    //   });

    //   document.getElementById("minimizeButton").addEventListener("click", () => {
    //     // console.log("close");
    //     setChatOpen(false);
    //     document.getElementById("ChatDiv").classList.remove("d-block");
    //   });
    // }, 5000);
  }, []);

  // const handleChatOpen = () => {
  //   if (chatOpen) {
  //     setChatOpen(false);
  //     document.getElementById("ChatDiv").classList.remove("d-block");
  //   } else {
  //     setChatOpen(true);
  //     document.getElementById("ChatDiv").classList.add("d-block");
  //   }
  // };

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

        <div
          id="live_chat_status"
        ></div>

        <Script
          id="live-chat-script"
          strategy="lazyOnload"
          type="text/javascript"
          src="//cdn1.thelivechatsoftware.com/assets/liveadmins/indusre.com/chatloader.min.js"
        ></Script>
      </body>
    </html>
  );
}
