import React from "react";
import { Link } from "react-router-dom";
function SlideNavbar(props) {
  return (
    <>
      <div
        className={`${
          props.open ? "max-w-full" : "w-[0px] opacity-0"
        } absolute top-20 right-0 border w-3/4 md:hidden p-5 h-screen bg-white z-20 transition-max-width duration-300 ease-in-out`}
      >
        <ul className={`mt-6 ${props.open ? "block" : "hidden"}`}>
          <li className="uppercase font-mono  hover:text-amber-800 text-lg sm:text-xl mx-2 my-8 cursor-default">
            <Link to="/menu" className="cursor-default">
              Menu
            </Link>
          </li>
          <li className="uppercase font-mono  hover:text-amber-800 text-lg sm:text-xl mx-2 my-8 cursor-default">
            Rewards
          </li>
          <li className="uppercase font-mono  hover:text-amber-800 text-lg sm:text-xl mx-2 my-8 cursor-default">
            Gift Cards
          </li>
        </ul>
        <div className={`border-b-2 ${props.open ? "block" : "hidden"}`}></div>
        <div
          className={`flex justify-between w-44 mt-8 ${
            props.open ? "block" : "hidden"
          }`}
        >
          <button className="px-2 py-[1px] md:px-4 md:py-[2px] rounded-3xl border-2 border-amber-900 text-amber-900 hover:bg-slate-100 cursor-default">
            Sign in
          </button>
          <button className="bg-amber-800 text-white px-2 py-[1px] md:px-4 md:py-[2px] rounded-3xl hover:bg-amber-900 cursor-default">
            Join now
          </button>
        </div>
      </div>
    </>
  );
}

export default SlideNavbar;
