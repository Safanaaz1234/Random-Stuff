import React from "react";
import Kofe from "../assets/Kofe.png";
import { Link } from "react-router-dom";
import SlideNavbar from "./SlideNavbar";
import { useState } from "react";

function Navbar() {
  const [isNavbarOpen, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar(!isNavbarOpen);
  };
  return (
    <>
      <div className="w-full h-20 md:h-24 p-4 flex justify-between items-center relative shadow-md z-50">
        <div className="flex  w-1/4 items-center">
          <div className="w-14 md:w-16">
            <img src={Kofe} alt="Kofe" className="md:cursor-pointer" />
          </div>
          <ul className="hidden md:flex md:justify-between md:w-1/3 md:h-24 items-center">
            <li className="md:h-24 pt-9 px-6 border-b border-transparent hover:border-b-4 hover:border-amber-800 md:cursor-pointer ml-12 hover:text-amber-800  uppercase font-mono ">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="md:h-24 pt-9 px-4 border-b border-transparent hover:border-b-4 hover:border-amber-800 md:cursor-pointer hover:text-amber-800  uppercase font-mono">
              Rewards
            </li>
            <li className="md:h-24 pt-9 px-4 border-b border-transparent hover:border-b-4 hover:border-amber-800 md:cursor-pointer hover:text-amber-800 uppercase font-mono">
              GiftCards
            </li>
          </ul>
        </div>
        <div className="hidden md:flex justify-between md:w-48 mr-3">
          <button className="px-4 py-[2px] rounded-3xl border-2 border-amber-900 text-amber-900 hover:bg-slate-100">
            Sign in
          </button>
          <button className="bg-amber-800 text-white px-4 py-[2px] rounded-3xl hover:bg-amber-900">
            Join now
          </button>
        </div>
        <div className="md:hidden">
          <button
            className="px-3 py-1.5  text-2xl font-bold hover:bg-slate-100 hover:rounded-full cursor-default"
            onClick={toggleNavbar}
          >
            {!isNavbarOpen ? (
              <i className="fa fa-bars text-amber-800"></i>
            ) : (
              <i className="fa fa-times text-amber-800"></i>
            )}
          </button>
        </div>
      </div>
      <SlideNavbar open={isNavbarOpen} />
    </>
  );
}

export default Navbar;
