import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white mt-30'>
            <div className='w-3/4 mx-auto pt-15 md:pt-30 pb-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-10 md:mb-20'>
                    <div>
                        <h1 className='font-extrabold text-5xl mb-4 text-center md:text-left'>Digitools</h1>
                        <p className='text-center md:text-left mb-4'>Premium digital tools for creators, <br className='hidden md:flex' /> professionals, and businesses. Work smarter <br className='hidden md:flex' /> with our suite of powerful tools.</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-12 justify-between'>
                            <div className=" flex flex-col gap-4">
                                <h1 className='text-xl'>Product</h1>
                                <p className='opacity-60'>Features</p>
                                <p className='opacity-60'>Pricing</p>
                                <p className='opacity-60'>Templates</p>
                                <p className='opacity-60'>Integrations</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className='text-xl'>Company</h1>
                                <p className='opacity-60'>About</p>
                                <p className='opacity-60'>Blog</p>
                                <p className='opacity-60'>Careers</p>
                                <p className='opacity-60'>Press</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className='text-xl'>Resources</h1>
                                <p className='opacity-60'>Documentation</p>
                                <p className='opacity-60'>Help Center</p>
                                <p className='opacity-60'>Community</p>
                                <p className='opacity-60'>Contact</p>
                            </div>
                        </div>
                        <div>
                            <h1>Social Links</h1>
                            <div className='flex gap-4 mt-4'>
                                <div className='border rounded-full p-2 bg-white'>
                                    <FaInstagramSquare className='text-black'/>
                                </div>
                                <div className='border rounded-full p-2 bg-white'>
                                    <FaFacebook className='text-black'/>
                                </div>
                                <div className='border rounded-full p-2 bg-white'>
                                    <FaXTwitter className='text-black'/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='opacity-20 mb-7' />
                <div className='flex justify-between opacity-60'>
                    <div>
                        <p><small>&copy; 2026 Digitools. All rights reserved.</small></p>
                    </div>
                    <div className='flex gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;