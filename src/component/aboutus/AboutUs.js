import React from 'react'
import CustomBanner from '@/common-component/banner/CustomBanner';
import AboutusUK from './AboutusUK';
import OurMission from './OurMission';
import ClientTrust from './ClientTrust';
import WeWork from './WeWork';
import FreeCall from '@/common-component/freeCall/freeCall';
import SEO from '@/common-component/SEO/seo';

const AboutUs = () => {
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
        //  ogImage={`${SITE_URL}/og-image.jpg`}
          twitterTitle='About Poornam Events | Wedding Planner in MP'
          twitterDescription='Meet Poornam Events: founders, values & vision. Creating magical weddings across Indore, Bhopal & India.'
          // twitterImage={`${SITE_URL}/logoo.jpg`}
          robots="index, follow"
        />
      </>
            <CustomBanner
                title="About Us"
                subtitle="Web Development & Marketing Partner for UK Businesses."
                padding={10}
            />
            <AboutusUK></AboutusUK>
            <OurMission></OurMission>
            <ClientTrust></ClientTrust>
            <WeWork></WeWork>
            <FreeCall></FreeCall>
        </>
    )
}

export default AboutUs;