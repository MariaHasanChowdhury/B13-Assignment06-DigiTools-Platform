import React, { use } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Cart = ({ cardIds, CardPromise, setCardIds }) => {
    const CardData = use(CardPromise);
    const cart = CardData.filter(cart => cardIds.includes(cart.id));

    // const {name, price, icon} = cartProduct;
    const total = cart.reduce((sum, item) => {
        const priceNumber = Number(item.price.replace("$", ""));
        return sum + priceNumber;
    }, 0);

    const checkOut = () => {
        setCardIds([])
        toast("Purchase successful");

    }
    const remove = (rID) => {
        setCardIds(prev => prev.filter(id => id !== rID));
        toast(<span className='flex justify-center items-center gap-2'>
            <FaRegTimesCircle className='text-red-700' />
            <span>Remove from Cart</span>
        </span>);
    }

    return (
        <div>
            <div className="w-3/4 mx-auto rounded-2xl  p-8 shadow-xl  border  border-base-200">
                <h2 className="mb-6 text-2xl font-bold text-base-content">Your Cart</h2>

                {
                    cardIds.length === 0 ?
                        <div className='flex justify-center items-center flex-col'>
                            <FaCartShopping className='w-20 h-20 opacity-80' />
                            <h3>Your Cart is empty</h3>
                        </div>
                        :
                        <div>
                            {
                                cart.map(cartProduct => <div className="mb-6 flex items-center justify-between rounded-2xl bg-base-200 px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="w-12 rounded-full bg-base-100 ring-1 ring-base-300 p-2">
                                                <img src={cartProduct.icon} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className=" font-semibold text-base-content">{cartProduct.name}</h3>
                                            <p className="mt-1 text-2xl text-base-content/60">{cartProduct.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => remove(cartProduct.id)}
                                        className="btn btn-ghost btn-sm text-pink-500 hover:bg-transparent hover:text-pink-600">
                                        Remove
                                    </button>
                                </div>)
                            }




                            <div className="mb-6 flex items-center justify-between">

                                <span className=" text-base-content/60">Total:</span>
                                <span className="text-3xl font-bold">${total}</span>
                            </div>

                            <button onClick={() => checkOut()}
                                className="btn w-full rounded-full border-none text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4">
                                Proceed To Checkout
                            </button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Cart;