import CustomBanner from '@/common-component/banner/CustomBanner';
import React from 'react'
import MernStack from './MernStack';
import MernServices from './MernServices';
import SEO from '@/common-component/SEO/seo';


const Services = () => {
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
          //ogImage={`${SITE_URL}/og-image.jpg`}
          twitterTitle='About Poornam Events | Wedding Planner in MP'
          twitterDescription='Meet Poornam Events: founders, values & vision. Creating magical weddings across Indore, Bhopal & India.'
        //   twitterImage={`${SITE_URL}/logoo.jpg`}
          robots="index, follow"
        />
      </>
<CustomBanner
  title="What We Offer"
  subtitle="Scalable tech solutions, smart design, and UK-focused marketing – all under one roof."
  padding={10}
/>
<MernStack></MernStack>
<MernServices></MernServices>
</>
  )
}

export default Services;