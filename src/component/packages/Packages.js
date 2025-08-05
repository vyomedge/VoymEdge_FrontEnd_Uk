import React from "react";
import CustomBanner from "@/common-component/banner/CustomBanner";
import PriceCards from "./priceCard";
import LetsChat from "./letsChat";
import AddOnServices from "./addOnServices";
import WeCompare from "./weCompare";
import SEO from "@/common-component/SEO/seo";

const Packages = () => {
  return (
    <>
      <>
        <SEO
          url="https://www.vyomedge.uk/packages"
          metaTitle="Affordable Development & Marketing Packages | VyomEdge"
          metaDescription="Choose from our affordable packages for web development, SEO, design & more — tailored to UK businesses."
          keywords="web development packages UK, SEO packages UK, digital marketing plans UK, UI UX pricing UK"
          canonical="https://www.vyomedge.uk/packages"
          ogTitle="Affordable Development & Marketing Packages | VyomEdge"
          ogDescription="Choose from our affordable packages for web development, SEO, design & more — tailored to UK businesses."
          ogImage=""
          twitterTitle="Affordable Development & Marketing Packages | VyomEdge"
          twitterDescription="Choose from our affordable packages for web development, SEO, design & more — tailored to UK businesses."
          twitterImage=""
          robots="index, follow" //  default
        />
      </>
      <CustomBanner
        title="Packages"
        subtitle="Web Development & Marketing Partner for UK Businesses."
        padding={10}
        breadcrumbs={[
          {
            name: "Home",
            goesto: "/",
          },
          {
            name: "Packages",
            goesto: "/packages",
          },
        ]}
      />
      <PriceCards></PriceCards>
      <AddOnServices></AddOnServices>
      <WeCompare></WeCompare>
      <LetsChat></LetsChat>
    </>
  );
};

export default Packages;
