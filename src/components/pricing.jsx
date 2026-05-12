import React from "react";

const Pricing = () => {
  return (

    <div className="bg-[#101727] py-24 mt-24">

      <div className="w-3/4 mx-auto">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-extrabold text-white mb-4">
            Simple Pricing
          </h1>

          <p className="text-[#B0B7C3]">
            Choose the perfect plan for your workflow.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Basic */}
          <div className="bg-white rounded-3xl p-10 text-center">

            <h2 className="text-3xl font-bold mb-4">
              Basic
            </h2>

            <h1 className="text-6xl font-extrabold text-[#4F39F6] mb-6">
              $19
            </h1>

            <ul className="space-y-4 text-[#627382] mb-8">

              <li>✔ 10 Downloads</li>
              <li>✔ Limited Assets</li>
              <li>✔ Basic Support</li>

            </ul>

            <button className="btn rounded-full w-full bg-[#101727] text-white border-none">
              Get Started
            </button>

          </div>

          {/* Pro */}
          <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl p-10 text-center text-white scale-105">

            <h2 className="text-3xl font-bold mb-4">
              Pro
            </h2>

            <h1 className="text-6xl font-extrabold mb-6">
              $49
            </h1>

            <ul className="space-y-4 mb-8">

              <li>✔ Unlimited Downloads</li>
              <li>✔ Premium Assets</li>
              <li>✔ Priority Support</li>

            </ul>

            <button className="btn rounded-full w-full bg-white text-[#4F39F6] border-none">
              Get Started
            </button>

          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-3xl p-10 text-center">

            <h2 className="text-3xl font-bold mb-4">
              Enterprise
            </h2>

            <h1 className="text-6xl font-extrabold text-[#4F39F6] mb-6">
              $99
            </h1>

            <ul className="space-y-4 text-[#627382] mb-8">

              <li>✔ Team Collaboration</li>
              <li>✔ Dedicated Manager</li>
              <li>✔ 24/7 Support</li>

            </ul>

            <button className="btn rounded-full w-full bg-[#101727] text-white border-none">
              Get Started
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Pricing;