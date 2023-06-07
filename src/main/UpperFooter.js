import React from "react";
import { useState } from "react";

function UpperFooter(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFooter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 w-full lg:p-2 lg:w-72">
      <div className="font-semibold text-base lg:text-lg flex justify-between lg:block lg:pr-6">
        <p>{props.heading}</p>
        <button
          className="block lg:hidden transition-all duration-300 ease-in-out hover:bg-slate-200 px-3 py-2 rounded-full"
          onClick={toggleFooter}
        >
          {isOpen ? (
            <i className="fas fa-chevron-down transform rotate-180 transition-all duration-300 ease-in-out"></i>
          ) : (
            <i className="fas fa-chevron-up transform -rotate-180 transition-all duration-300 ease-in-out"></i>
          )}
        </button>
      </div>

      <ul
        className={` ${
          isOpen ? "block" : "opacity-0 h-0"
        } lg:hidden  mt-2 transition-all duration-500 ease-in-out`}
      >
        <li className="text-slate-700 hover:text-black cursor-pointer py-3">
          {props.item1}
        </li>
        <li className="text-slate-700 hover:text-black cursor-pointer py-3">
          {props.item2}
        </li>
        <li className="text-slate-700 hover:text-black cursor-pointer py-3">
          {props.item3}
        </li>
      </ul>
      <ul
        className={`hidden lg:block  mt-5 transition-all duration-500 ease-in-out`}
      >
        <li className="text-slate-700 hover:text-black cursor-pointer py-3">
          {props.item1}
        </li>
        <li className="text-slate-700 hover:text-black cursor-pointer py-3">
          {props.item2}
        </li>
        <li className="text-slate-700 hover:text-black cursor-pointer py-3">
          {props.item3}
        </li>
      </ul>
    </div>
  );
}

export default UpperFooter;
