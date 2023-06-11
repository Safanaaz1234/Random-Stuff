import React from "react";

function SubNavbar() {
  return (
    <>
      <div className="hidden md:bg-lightgray md:block md:py-4 md:px-[150px] sticky top-0 border-b-2">
        <ul className="flex text-sm">
          <li className="underline mr-7 md:cursor-pointer">All Products</li>
          <li className="mr-7 md:cursor-pointer">Featured</li>
          <li className="md:cursor-pointer">Top Products</li>
        </ul>
      </div>
    </>
  );
}

export default SubNavbar;
