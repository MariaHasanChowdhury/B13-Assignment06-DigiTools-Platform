import React from 'react';
import User from '../../assets/user.png'
import Package from '../../assets/package.png'
import Rocket from '../../assets/rocket.png'


const GetStarted = () => {
    return (

        <div className='bg-base-100'>
            <div className='flex flex-col w-3/4 mx-auto mt-15 '>
                <div className=''>
                    <h1 className='text-5xl font-extrabold text-center text-[#101727] mb-4 mt-15 lg:mt-30'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382] text-center mb-10'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid gap-7 md:grid-cols-3'>
                    <div className='card border-[#F1F1F1] bg-base-100 border w-full shadow-sm drop-shadow-xl rounded-2xl'>
                        <div className='flex justify-end px-4 pt-4'>
                            <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] rounded-full w-fit px-2.5 py-2">
                            <span className='text-white font-bold text-sm'>01</span>
                        </div>
                        </div>
                        <figure className='bg-[#F9FAFC] rounded-full w-fit flex justify-center mx-auto -mb-3'>
                        <img 
                        className='w-16 h-16 object-contain p-2'
                        src={User} 
                        alt="" />

                        </figure>
                        <div className="card-body text-center">
                        <h3 className='font-bold text-2xl'>Create Account</h3>

                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    
                    <div className='card border-[#F1F1F1] bg-base-100 border w-full shadow-sm drop-shadow-xl rounded-2xl'>
                        <div className='flex justify-end px-4 pt-4'>
                            <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] rounded-full w-fit px-2.5 py-2">
                            <span className='text-white font-bold text-sm'>02</span>
                        </div>
                        </div>
                        <figure className='bg-[#F9FAFC] rounded-full w-fit flex justify-center mx-auto -mb-3'>
                        <img 
                        className='w-16 h-16 object-contain p-2'
                        src={Package}
                        alt="" />

                        </figure>
                        <div className="card-body text-center">
                        <h3 className='font-bold text-2xl'>Choose Products</h3>

                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    
                    <div className='card border-[#F1F1F1] bg-base-100 border w-full shadow-sm drop-shadow-xl rounded-2xl'>
                        <div className='flex justify-end px-4 pt-4'>
                            <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] rounded-full w-fit px-2.5 py-2">
                            <span className='text-white font-bold text-sm'>03</span>
                        </div>
                        </div>
                        <figure className='bg-[#F9FAFC] rounded-full w-fit flex justify-center mx-auto -mb-3'>
                        <img 
                        className='w-16 h-16 object-contain p-2'
                        src={Rocket}
                        alt="" />

                        </figure>
                        <div className="card-body text-center">
                        <h3 className='font-bold text-2xl'>Start Creating</h3>

                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default GetStarted;