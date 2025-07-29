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
          url='https://www.vyomedge.uk/services'
          metaTitle='Our Services | MERN, Python, UI/UX & Digital Marketing for UK Clients'
          metaDescription='Explore VyomEdge’s full range of services including MERN Stack, Python solutions, UI/UX, and digital marketing.'
          keywords='MERN stack services UK, Python services UK, UI UX design UK, digital marketing services UK, web solutions UK'
          canonical='https://www.vyomedge.uk/services'
          ogTitle='Our Services | MERN, Python, UI/UX & Digital Marketing for UK Clients'
          ogDescription='Explore VyomEdge’s full range of services including MERN Stack, Python solutions, UI/UX, and digital marketing.'
          ogImage=''
          twitterTitle='Our Services | MERN, Python, UI/UX & Digital Marketing for UK Clients'
          twitterDescription='Explore VyomEdge’s full range of services including MERN Stack, Python solutions, UI/UX, and digital marketing.'
          twitterImage=''
          robots="index, follow"//  default
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