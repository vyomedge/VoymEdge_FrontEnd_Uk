import CustomBanner from '@/common-component/banner/CustomBanner';
import React from 'react'
import MernStack from './MernStack';
import MernServices from './MernServices';


const Services = () => {
  return (
   <>
 
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