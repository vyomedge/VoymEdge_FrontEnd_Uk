import CustomBanner from '@/common-component/banner/CustomBanner';
import React from 'react'
import SocialMedia from './SocialMedia';
import EnquiryForm from './EnquiryForm';
import BreadcrumbsButton from '@/common-component/breadcrumbs/Breadcrumbs';
import SEO from '@/common-component/SEO/seo';

const ContactUs = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Conact', href: '/conactus' },
  
  ];
  return (
    <>
      <>
        <SEO
          url='http://www.poornamevents.com/about-us'
          metaTitle='About Poornam Events | Wedding Planner in MP'
          metaDescription='Meet Poornam Events: founders, values & vision. Creating magical weddings across Indore, Bhopal & India.'
          keywords='wedding planner in MP, about Poornam Events'
          canonical='http://www.poornamevents.com/about-us'
          ogTitle='About Poornam Events | Wedding Planner in MP'
          ogDescription='Meet Poornam Events: founders, values & vision. Creating magical weddings across Indore, Bhopal & India.'
       //   ogImage={`${SITE_URL}/og-image.jpg`}
          twitterTitle='About Poornam Events | Wedding Planner in MP'
          twitterDescription='Meet Poornam Events: founders, values & vision. Creating magical weddings across Indore, Bhopal & India.'
         //  twitterImage={`${SITE_URL}/logoo.jpg`}
          robots="index, follow"
        />
      </>
      <CustomBanner
        title="Contact"
        subtitle="Web Development & Marketing Partner for UK Businesses."
        padding={10} >
          <BreadcrumbsButton items={breadcrumbItems} />
        </CustomBanner>
 
            
      <SocialMedia></SocialMedia>
      <EnquiryForm></EnquiryForm>
    </>
  )
}

export default ContactUs;