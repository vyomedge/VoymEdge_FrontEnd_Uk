import React from "react";
import Banner from "./banner";
import Partner from "./partner";
import WeOffer from "./weOffer";
import WhyVyomedge from "./whyVyomedge";
import Services from "./services";
import FAQ from "./FAQ";
import FreeCall from "@/common-component/freeCall/freeCall";
import WorkFlow from "./workFlow";
import SEO from "@/common-component/SEO/seo";

 

export default function Home () {
    return(
       <>  
         <>
          <SEO
          url='https://uk.vyomedge.com/'
          metaTitle='Web Development & Digital Marketing Services for UK Businesses | VyomEdge'
          metaDescription='VyomEdge offers tailored MERN Stack, Python development, UI/UX design, and digital marketing for UK enterprises.'
          keywords='MERN stack development UK, Python development UK, UI UX design UK, digital marketing UK, web development agency UK'
          canonical='https://uk.vyomedge.com/'
          ogTitle='Web Development & Digital Marketing Services for UK Businesses | VyomEdge'
          ogDescription='VyomEdge offers tailored MERN Stack, Python development, UI/UX design, and digital marketing for UK enterprises.'
          ogImage=''
          twitterTitle='Web Development & Digital Marketing Services for UK Businesses | VyomEdge'
          twitterDescription='VyomEdge offers tailored MERN Stack, Python development, UI/UX design, and digital marketing for UK enterprises.'
          twitterImage=''
          robots="index, follow"//  default
        />
      </>
       <Banner></Banner>
       <Partner></Partner>
       <WeOffer></WeOffer>
       <WhyVyomedge></WhyVyomedge>
       <Services></Services>
       <WorkFlow></WorkFlow>
       <FAQ></FAQ>
       <FreeCall></FreeCall>
       </>

     
      
    )
}