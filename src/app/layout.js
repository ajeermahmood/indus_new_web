"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { useEffect, useState } from "react";
import "../../public/scss/main.scss";

import Head from "next/head";

import JSONLD from "./JSONLD";

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Indus Real Estate LLC",
    url: "https://www.indusre.com/",
    logo: "https://www.indusre.com/images/logo/indus-icon.png",
    description:
      "Discover our story and commitment to excellence at Indus Real Estate LLC. Learn why we're the trusted choice for all your property needs in Dubai.",
    sameAs: [
      "https://www.facebook.com/indusrealestate/",
      "https://twitter.com/indusrealestate",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971-800-INDUS",
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 203, Al Sharafi Building",
      addressLocality: "Dubai",
      postalCode: "118163",
      addressCountry: "AE",
    },
    department: [
      {
        "@type": "RealEstateAgent",
        name: "Our Team",
        description:
          "Meet our dedicated team of real estate experts at Indus Real Estate LLC. With years of experience, we're here to guide you every step of the way toward your dream property.",
      },
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.indusre.com/all-properties?st=Sale&ps=residential",
      "query-input": "Residential Properties For Sale",
    },
    article: [
      {
        "@type": "BlogPosting",
        headline:
          "Stay informed and inspired with our insightful blogs at Indus Real Estate LLC.",
        description:
          "Explore valuable tips, market trends, and expert advice to make the most of your real estate journey.",
        datePublished: "2024-03-28",
        dateModified: "2024-03-28",
        author: {
          "@type": "Person",
          name: "Indus Real Estate LLC",
        },
      },
    ],
    hasPart: [
      {
        "@type": "WebPage",
        name: "About Us",
        description:
          "Discover our story and commitment to excellence at Indus Real Estate LLC. Learn why we're the trusted choice for all your property needs in Dubai.",
      },
      {
        "@type": "WebPage",
        name: "Awards and Achievements",
        description:
          "Explore our accolades and milestones at Indus Real Estate LLC. Discover why we're recognized as leaders in the Dubai real estate industry.",
      },
      {
        "@type": "WebPage",
        name: "Our Partner Developers",
        description:
          "Explore our esteemed partnerships with leading developers including Emaar, Sobha Realty, Damac, Omniyat, Danube, Al Wasl, Dubai Properties, Arada, Nakheel, Meraas, Deyaar, and more at Indus Real Estate LLC.",
      },
      {
        "@type": "WebPage",
        name: "Guides",
        description:
          "Discover valuable insights and tips with our comprehensive guides at Indus Real Estate LLC. From community guides to renter's, buyer's, and seller's guides, we've got you covered for every step of your real estate journey.",
      },
    ],
  };

  return (
    <html lang="en">
      <Head>
        <meta
          property="og:title"
          content="Unveiling Excellence: Best in Dubai with Indus Real Estate LLC"
        />
        <meta
          property="og:description"
          content="Indulge in the luxury of Dubai living with Indus Real Estate LLC! Expert agents, exclusive listings. Your dream property awaits, start your journey now"
        />
        <meta
          property="og:image"
          content="https://indusspeciality.com/api/assets/images/about/group2.jpg"
        />
      </Head>
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

        <div id="live_chat_status"></div>

        <Script
          id="live-chat-script"
          strategy="lazyOnload"
          type="text/javascript"
          src="//cdn1.thelivechatsoftware.com/assets/liveadmins/indusre.com/chatloader.min.js"
        ></Script>

        <JSONLD data={structuredData} />
      </body>
    </html>
  );
}
