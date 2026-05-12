import React from "react";

const Stat = () => {
  return (

    <div className="w-3/4 mx-auto mt-24">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-white border border-[#F1F1F1] rounded-3xl shadow-sm text-center p-10">

          <h1 className="text-5xl font-extrabold text-[#4F39F6] mb-3">
            10K+
          </h1>

          <p className="text-[#627382]">
            Active Users
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#F1F1F1] rounded-3xl shadow-sm text-center p-10">

          <h1 className="text-5xl font-extrabold text-[#4F39F6] mb-3">
            500+
          </h1>

          <p className="text-[#627382]">
            Premium Assets
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#F1F1F1] rounded-3xl shadow-sm text-center p-10">

          <h1 className="text-5xl font-extrabold text-[#4F39F6] mb-3">
            98%
          </h1>

          <p className="text-[#627382]">
            Customer Satisfaction
          </p>

        </div>

        {/* Card 4 */}
        <div className="bg-white border border-[#F1F1F1] rounded-3xl shadow-sm text-center p-10">

          <h1 className="text-5xl font-extrabold text-[#4F39F6] mb-3">
            24/7
          </h1>

          <p className="text-[#627382]">
            Live Support
          </p>

        </div>

      </div>

    </div>
  );
};

export default Stat;