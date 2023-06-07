import React from "react";

function SocialFooter() {
  return (
    <div className="cursor-default my-8 mx-5 md:mx-8 lg:mx-10 text-base lg:text-xl text-white">
      <i className="fa fa-instagram mr-2 lg:mr-4 bg-black p-2 lg:px-[10px] lg:py-2 rounded-full cursor-pointer hover:bg-slate-900"></i>
      <i className="fa fa-facebook mr-2 lg:mr-4 bg-black px-[11px] py-2 lg:px-3 lg:py-2 rounded-full cursor-pointer hover:bg-slate-900"></i>
      <i className="fa fa-pinterest mr-2 lg:mr-4 bg-black px-[9px] py-2 lg:px-[10px] lg:py-2 rounded-full cursor-pointer hover:bg-slate-900"></i>
      <i className="fa fa-twitter mr-2 lg:mr-4 bg-black p-2 lg:px-2 lg:py-2 rounded-full cursor-pointer hover:bg-slate-900"></i>
      <i className="fa fa-youtube mr-2 lg:mr-4 bg-black p-2 lg:px-[9px] lg:py-2 rounded-full cursor-pointer hover:bg-slate-900"></i>
    </div>
  );
}

export default SocialFooter;
