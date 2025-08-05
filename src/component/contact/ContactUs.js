import CustomBanner from "@/common-component/banner/CustomBanner";
import React from "react";
import SocialMedia from "./SocialMedia";
import EnquiryForm from "./EnquiryForm";
// import BreadcrumbsButton from "@/common-component/breadcrumbs/Breadcrumbs";
import SEO from "@/common-component/SEO/seo";
import { Box } from "@mui/material";

const ContactUs = () => {
  // const breadcrumbItems = [
  //   { label: "Home", href: "/" },
  //   { label: "Conact", href: "/conactus" },
  // ];
  return (
    <>
      <>
        <SEO
          url="https://www.vyomedge.uk/contact-us"
          metaTitle="Contact VyomEdge | Discuss Your Project or Get a Quote"
          metaDescription="Get in touch with VyomEdge to discuss your web development, design or digital marketing needs. UK support team."
          keywords="contact VyomEdge, UK web development contact, offshore IT team UK, digital marketing quote UK"
          canonical="https://www.vyomedge.uk/contact-us"
          ogTitle="Contact VyomEdge | Discuss Your Project or Get a Quote"
          ogDescription="Get in touch with VyomEdge to discuss your web development, design or digital marketing needs. UK support team."
          ogImage=""
          twitterTitle="Contact VyomEdge | Discuss Your Project or Get a Quote"
          twitterDescription="Get in touch with VyomEdge to discuss your web development, design or digital marketing needs. UK support team."
          twitterImage=""
          robots="index, follow" //  default
        />
      </>
      <CustomBanner
        data-testid="notify-button"
        title="Contact"
        subtitle="Web Development & Marketing Partner for UK Businesses."
        padding={10}
        breadcrumbs={[
          {
            name: "Home",
            goesto: "/",
          },
          {
            name: "Contact Us",
            goesto: "/contactus",
          },
        ]}
      >
        {/* <BreadcrumbsButton items={breadcrumbItems} /> */}
      </CustomBanner>

      <SocialMedia></SocialMedia>
      <Box paddingTop={4} paddingBottom={4}>
        <EnquiryForm />
      </Box>
    </>
  );
};

export default ContactUs;
