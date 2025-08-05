import React from "react";
import CustomBanner from "@/common-component/banner/CustomBanner";
import AboutusUK from "./AboutusUK";
import OurMission from "./OurMission";
import ClientTrust from "./ClientTrust";
import WeWork from "./WeWork";
import FreeCall from "@/common-component/freeCall/freeCall";
import SEO from "@/common-component/SEO/seo";

const AboutUs = () => {
  return (
    <>
      <>
        <SEO
          url="https://www.vyomedge.uk/about-us"
          metaTitle="About VyomEdge | Offshore Web & Marketing Partner for the UK"
          metaDescription="Learn about VyomEdge, your trusted partner in MERN, Python, UI/UX & marketing. Built for UK startups & businesses."
          keywords="about VyomEdge, offshore development UK, UK digital agency, UK IT outsourcing, MERN development UK"
          canonical="https://www.vyomedge.uk/about-us"
          ogTitle="About VyomEdge | Offshore Web & Marketing Partner for the UK"
          ogDescription="Learn about VyomEdge, your trusted partner in MERN, Python, UI/UX & marketing. Built for UK startups & businesses."
          ogImage={``}
          twitterTitle="About VyomEdge | Offshore Web & Marketing Partner for the UK"
          twitterDescription="Learn about VyomEdge, your trusted partner in MERN, Python, UI/UX & marketing. Built for UK startups & businesses."
          twitterImage={``}
          robots="index, follow"
        />
      </>
      <CustomBanner
        title="About Us"
        subtitle="Web Development & Marketing Partner for UK Businesses."
        padding={10}
        breadcrumbs={[
          {
            name: "Home",
            goesto: "/",
          },
          {
            name: "About Us",
            goesto: "/aboutus",
          },
        ]}
        // Optional: customize breadcrumbs position
        breadcrumbsPosition={{
          top: "200px",
          left: "43px",
          lg: { top: "350px", left: "60px" },
          md: { top: "300px", left: "10px" },
          sm: { top: "330px", left: "3px" },
          xs: { top: "310px", left: "20px" },
        }}
        overlay={{
          background:
            "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)",
          width: "70%",
          responsive: {
            md: {
              width: "100%",
              background:
                "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 90%)",
            },
          },
        }}
      />

      <AboutusUK></AboutusUK>
      <OurMission></OurMission>
      <ClientTrust></ClientTrust>
      <WeWork></WeWork>
      {/* <FreeCall></FreeCall> */}
    </>
  );
};

export default AboutUs;
