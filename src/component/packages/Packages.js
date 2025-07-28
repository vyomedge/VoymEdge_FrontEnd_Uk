import React from 'react'
import CustomBanner from '@/common-component/banner/CustomBanner';
import PriceCards from './priceCard';
import LetsChat from './letsChat';
import AddOnServices from './addOnServices';
import WeCompare from './weCompare';

const Packages = () => {
    return (
        <>
            <CustomBanner
                title="About Us"
                subtitle="Web Development & Marketing Partner for UK Businesses."
                padding={10}
            />
            <PriceCards></PriceCards>
               <AddOnServices></AddOnServices>
               <WeCompare></WeCompare>
            <LetsChat></LetsChat>
         
        </>
    )
}

export default Packages;