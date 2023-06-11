import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="hidden lg:block lg:mt-12 lg:ml-[150px] lg:w-64">
        <h2 className="text-xl font-semibold mb-3">Drinks</h2>
        <ul className="text-slate-600">
          <li className="mb-2">
            <Link to="/menu/hot-teas">Hot Teas</Link>
          </li>
          <li className="mb-2">
            <Link to="/menu/hot-coffees">Hot Coffees</Link>
          </li>
          <li className="mb-2">
            <Link to="/menu/cold-coffees">Cold Coffees</Link>
          </li>
          <li className="mb-2">
            <Link to="/menu/milkshakes">Milkshakes</Link>
          </li>
          <li className="mb-2">
            <Link to="/menu/cold-drinks">Cold Drinks</Link>
          </li>
        </ul>
        <h2 className="text-xl font-semibold my-4">Food</h2>
        <ul className="text-slate-700">
          <li className="mb-2">
            <Link to="/menu/bakery">Bakery</Link>
          </li>
          <li className="mb-2">
            <Link to="/menu/hot-breakfast">Hot Breakfast</Link>
          </li>
          <li className="mb-2">
            <Link to="/menu/lunch">Lunch</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
