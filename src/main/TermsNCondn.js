import React from "react";

function TermsNCondn() {
  return (
    <div className="mx-5 md:mx-8 lg:mx-10">
      <ul className="lg:flex">
        <li className="pb-3 text-sm font-semibold w-full lg:w-40 lg:cursor-pointer hover:underline">
          Privacy Notice
        </li>
        <li className="pb-3 text-sm font-semibold w-full lg:w-40 lg:cursor-pointer hover:underline">
          Terms of Use
        </li>
        <li className="pb-3 text-sm font-semibold w-full lg:w-72 lg:cursor-pointer hover:underline">
          Do Not Share My Personal Information
        </li>
        <li className="pb-3 text-sm font-semibold w-full lg:w-40 lg:cursor-pointer hover:underline">
          CA Supply Chain Act
        </li>
        <li className="pb-3 text-sm font-semibold w-full lg:w-40 lg:cursor-pointer hover:underline">
          Cookie Preferences
        </li>
      </ul>
    </div>
  );
}

export default TermsNCondn;
