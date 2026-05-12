import React, { useState } from "react";

const Product = ({ product, handleAddToCart }) => {

  const [added, setAdded] = useState(false);

  const handleClick = () => {
    handleAddToCart(product);
    setAdded(true);
  };

  return (

    <div className="card bg-base-100 border border-[#F1F1F1] rounded-3xl shadow-sm drop-shadow-xl p-7 hover:-translate-y-2 transition-all duration-300">

      {/* Top */}
      <div className="flex justify-between items-center mb-6">

        <div className="bg-[#F9FAFC] rounded-full w-fit p-5 text-4xl">
          {product.icon}
        </div>

        <div className="bg-[#E1E7FF] rounded-full px-4 py-2">

          <span className="text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            {product.tagType}
          </span>

        </div>

      </div>

      {/* Content */}
      <h1 className="text-3xl font-bold text-[#101727] mb-4">
        {product.name}
      </h1>

      <p className="text-[#627382] mb-6">
        {product.description}
      </p>

      {/* Price */}
      <h2 className="text-5xl font-extrabold text-[#101727] mb-6">
        ${product.price}

        <span className="text-lg text-[#627382]">
          /{product.period}
        </span>
      </h2>

      {/* Features */}
      <ul className="space-y-4 mb-8">

        {
          product.features.map((feature, index) => (

            <li
              key={index}
              className="text-[#627382]"
            >
              ✅ {feature}
            </li>

          ))
        }

      </ul>

      {/* Button */}
      <button
        onClick={handleClick}
        className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none text-white"
      >
        {
          added ? "Added ✓" : "Buy Now"
        }
      </button>

    </div>
  );
};

export default Product;