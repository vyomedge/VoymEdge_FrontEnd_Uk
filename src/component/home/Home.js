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
          url='http://www.poornamevents.com/about-us'
          metaTitle='About Poornam Events | Wedding Planner in MP'
          metaDescription='Meet Poornam Events: founders, values & vision. Creating magical weddings across Indore, Bhopal & India.'
          keywords='wedding planner in MP, about Poornam Events'
          canonical='http://www.poornamevents.com/about-us'
          ogTitle='About Poornam Events | Wedding Planner in MP'
          ogDescription='Meet Poornam Events: founders, values & vision. Creating magical weddings across Indore, Bhopal & India.'
         // ogImage={`${SITE_URL}/og-image.jpg`}
          twitterTitle='About Poornam Events | Wedding Planner in MP'
          twitterDescription='Meet Poornam Events: founders, values & vision. Creating magical weddings across Indore, Bhopal & India.'
          // twitterImage={`${SITE_URL}/logoo.jpg`}
          robots="index, follow"
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