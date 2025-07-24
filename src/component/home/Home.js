import React from "react";
import Banner from "./banner";
import Partner from "./partner";
import WeOffer from "./weOffer";
import WhyVyomedge from "./whyVyomedge";
import Services from "./services";
import FAQ from "./FAQ";
import FreeCall from "@/common-component/freeCall/freeCall";
import WorkFlow from "./workFlow";

 

export default function Home () {
    return(
       <>  
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