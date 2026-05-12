import React from 'react';

const Stat = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-30'>
            <div className="stats shadow flex items-center justify-center w-3/4 mx-auto text-white py-7">
                <div className="stat place-items-center">
                    <div className="stat-value">51K</div>
                    <div className="stat-desc text-white opacity-70 ">Active Users</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-value">200+</div>
                    <div className="stat-desc text-white opacity-70">Premium Tools</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-value">4.9</div>
                    <div className="stat-desc text-white opacity-70">Rating</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;