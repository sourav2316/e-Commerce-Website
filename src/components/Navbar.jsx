import React, { useState } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { FaShopify } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="bg-amber-300 fixed z-10 top-0 w-full drop-shadow-lg">
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="text-3xl">
            <FaShopify />
          </div>
          <a href="/" className="text-xl font-bold cursor-pointer">
            Shopify
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost grid grid-flow-col text-center"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartTotalQuantity}
                </span>
              </div>
              <h2 className="font-bold">Cart</h2>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {cartTotalQuantity} Items
                </span>
                <span className="text-base text-black">
                  Subtotal: ${Math.floor(cartTotalAmount * 100) / 100}
                </span>
                <div className="card-actions">
                  <Link to={"/cart"}>
                    <button className="btn bg-amber-300 btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost avatar grid grid-flow-col text-center"
            >
              <div className="w-8 rounded-full text-3xl">
                <MdOutlineLogin />
              </div>
              <Link to={"/login"}>
                <h2 className="font-bold">Login</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
