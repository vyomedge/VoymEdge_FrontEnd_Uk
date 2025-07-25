import React from 'react'
import CustomBanner from '@/common-component/banner/CustomBanner';
import PriceCards from './priceCard';
import LetsChat from './letsChat';

const Packages = () => {
    return (
        <>
            <CustomBanner
                title="About Us"
                subtitle="Web Development & Marketing Partner for UK Businesses."
                padding={10}
            />
            <PriceCards></PriceCards>
            <LetsChat></LetsChat>
        </>
    )
}

export default Packages;