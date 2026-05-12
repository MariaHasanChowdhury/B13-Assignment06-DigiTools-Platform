import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({cardIds}) => {
  const [menuState, setMenuState] = useState(false);

  const navlist = (
    <>
      <li>
        <a href="">Products</a>
      </li>
      <li>
        <a href="">Features</a>
      </li>
      <li>
        <a href="">Pricing</a>
      </li>
      <li>
        <a href="">Testimonials</a>
      </li>
      <li>
        <a href="">FAQ</a>
      </li>
    </>
  )
  return (
    <div>
      <nav className="navbar shadow-sm">
        <div className="navbar-start ml-40">
          <div className="dropdown lg:hidden">
            <div className="btn btn-ghost">

              <CiMenuBurger onClick={() => setMenuState(!menuState)} />

              <ul className={`flex flex-col absolute ${menuState ? "top-14 -right-15" : "-top-90"} gap-2 rounded-xl shadow-sm p-6 w-52 z-50`}>
                {navlist}
                <button className="btn rounded-full  p-2 w-full">Login</button>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full">Get Started</button>
              </ul>


            </div>
          </div>
          <h1 className="hidden lg:flex font-bold text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h1>
        </div>
        <div className="navbar-center">
          <h1 className="flex lg:hidden font-bold text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h1>
          <ul className="hidden lg:flex gap-8 px-1">
            {navlist}
          </ul>
        </div>

        <div className="navbar-end gap-3 mr-40">
          <div className="indicator">
            <span class="indicator-item badge badge-primary badge-sm text-[#101727] font-bold bg-transparent border-none absolute -right-1">{cardIds}</span>
            <FaShoppingCart className=""/>
          </div>
          <div className="hidden lg:flex gap-4">
            <button className="border-none shadow-none hover:cursor-pointer">Login</button>
            <button className="btn bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;