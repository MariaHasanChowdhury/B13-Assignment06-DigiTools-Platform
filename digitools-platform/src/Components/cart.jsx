import React from "react";

const Cart = ({ cart, handleRemove, handleCheckout }) => {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="w-3/4 mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold text-[#101727] mb-4">
          Your Cart Is Empty 🛒
        </h1>

        <p className="text-[#627382]">
          Add some amazing digital products to continue.
        </p>
      </div>
    );
  }

  return (
    <div className="w-3/4 mx-auto py-16">

      <div className="flex flex-col gap-6">

        {
          cart.map((item) => (

            <div
              key={item.id}
              className="bg-white border border-[#F1F1F1] rounded-3xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-center gap-6"
            >

              <div className="flex items-center gap-5">

                <div className="bg-[#F9FAFC] rounded-full p-5 text-4xl">
                  {item.icon}
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-[#101727]">
                    {item.name}
                  </h1>

                  <p className="text-[#627382]">
                    ${item.price} / {item.period}
                  </p>
                </div>

              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="btn rounded-full bg-red-500 hover:bg-red-600 border-none text-white"
              >
                Remove
              </button>

            </div>
          ))
        }

      </div>

      {/* Checkout */}
      <div className="bg-white border border-[#F1F1F1] rounded-3xl shadow-sm p-8 mt-10">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold text-[#101727]">
            Total
          </h1>

          <h1 className="text-4xl font-extrabold text-[#4F39F6]">
            ${total}
          </h1>

        </div>

        <button
          onClick={handleCheckout}
          className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none"
        >
          Proceed To Checkout
        </button>

      </div>

    </div>
  );
};

export default Cart;