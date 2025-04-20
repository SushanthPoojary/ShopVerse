import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const CartButton = () => {
  // const [isCartOpen, setIsCartOpen] = useState(false);

  // const toggleCart = () => {
  //   setIsCartOpen(!isCartOpen);
  // };

  const cartItems = useSelector((state) => state.cart.cartItems);

  // console.log(cartItems);

  return (
    <NavLink to="/cart" className="">
      <button
        className="relative cursor-pointer"
        aria-label="Shopping cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:text-[#FBBF24] transition-colors duration-200"
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
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#FBBF24] text-[#1E293B] w-[20px] h-[20px] rounded-full flex items-center justify-center text-[12px] font-bold">
            {cartItems.length}
          </span>
        )}
      </button>
    </NavLink>
  );
};

export default CartButton;
