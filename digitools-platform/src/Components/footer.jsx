import React from 'react';
import BannerImg from "../../assets/banner.png";
import { FaRegCircleDot } from 'react-icons/fa6';
import Play1 from '../../assets/Play.png';

const Banner = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className='flex gap-15 my-15 justify-between flex-col lg:flex-row items-center'>
                <div className='flex flex-col mt-20'>
                    <div className='bg-[#E1E7FF] btn border-none shadow-none rounded-full w-max mb-4'>
                        <button className='text-transparent bg-clip-text bg-linear-to-tl from-[#4F39F6] to-[#9514FA] flex items-center gap-2'>
                        <FaRegCircleDot className="text-[#9514FA]"/>
                        New: AI-Powered Tools Available</button>
                    </div>
                    <h1 className='text-7xl font-bold mb-4'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-[#627382] mb-4'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today.<br />Explore Products
                    </p>
                    <div className='flex gap-4'>
                        <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Explore Products</button>
                        <button className='btn bg-transparent rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>
                            <img src={Play1} alt="" />
                            Watch Demo</button>
                    </div>
                </div>
                <div className='mt-6'>
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;