import React from 'react'
import CustomBanner from '@/common-component/banner/CustomBanner';
import AboutusUK from './AboutusUK';
import OurMission from './OurMission';
import ClientTrust from './ClientTrust';
import WeWork from './WeWork';
import FreeCall from '@/common-component/freeCall/freeCall';

const AboutUs = () => {
    return (
        <>
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