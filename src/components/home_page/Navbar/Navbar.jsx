import { List, ShoppingCart } from 'lucide-react';
import React from 'react'

const Navbar = ({ cartItems = [], onCartClick }) => {
  const cartCount = cartItems.length

  return (
    <div className="w-full border-b border-gray-200 sticky top-0 z-50 bg-white">
      <div className="navbar px-4 lg:px-8">

        {/* left logo */}
        <div className="flex-1">
          <span className="text-3xl lg:text-5xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#8A5CF2] bg-clip-text text-transparent">
            DigiTools
          </span>
        </div>
       
        {/* center menu only mobile */}
        <div className="lg:hidden ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <List size={24} />
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Products</a></li>
              <li><a>Feature</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* center menu only large */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-8">
            <li><a className="text-lg font-bold">Products</a></li>
            <li><a className="text-lg font-bold">Feature</a></li>
            <li><a className="text-lg font-bold">Pricing</a></li>
            <li><a className="text-lg font-bold">Testimonials</a></li>
            <li><a className="text-lg font-bold">FAQ</a></li>
          </ul>
        </div>

        {/* right side */}
        <div className="flex-none flex items-center gap-2">

          <div
            tabIndex={0}
            role="button"
            onClick={onCartClick}
            className="btn btn-circle"
          >
            <div className="indicator">
              <ShoppingCart size={20} />
              <span
                className={`
                  badge badge-sm indicator-item font-bold
                  transition-all duration-200
                  ${cartCount > 0
                    ? 'bg-[#4F39F6] text-white border-[#4F39F6]'
                    : 'badge-neutral'
                  }
                `}
              >
                {cartCount}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p className="hidden lg:block text-lg font-bold">Login</p>
            <button className="btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#8A5CF2]">
              Get Started
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;
