import React from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingHolder = () => {
    return (
        <div className='w-3/4 mx-auto mt-30'>
            <div className='flex flex-col text-center gap-4 mb-10'>
                <h1 className='text-5xl text-[#101727] font-extrabold'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div>
                <PricingCard />
            </div>
        </div>
    );
};

export default PricingHolder;