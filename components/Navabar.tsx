"use client";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/images/memoji-avatar-1.png";
import Input from "./Input";
import ButtonCircle from "./ButtonCircle";
import { FaRegBell } from "react-icons/fa6";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Product Collection", href: "/products" },
  { name: "Checkout", href: "/checkout" },
  { name: "Cart", href: "/cart" },
  { name: "Contact", href: "/contact" },
];

const Navabar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="container fixed top-0 left-0 right-0 z-50 bg-gray-900">
      <div className="flex items-center justify-between pt-8">
        <div className="flex gap-1 p-0.5 border border-black/15 rounded-lg bg-black/10 backdrop:blur">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="nav-item">
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <span className="text-sm">English</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 lg:gap-40">
        <Input
          type="text"
          className="border-transparent bg-white/15 placeholder:text-neutral-500 focus:border-transparent"
          placeholder="Type anything you are looking for..."
        />
        <div className="flex items-center gap-2">
          <div className="relative hidden lg:block">
            <span className="absolute -top-1/4 left-3/4 aspect-square w-3 rounded-lg bg-red-600" />
            <FaRegBell className="text-2xl" />
          </div>
          <button
            className="text-xs cursor-pointer flex items-center"
            onClick={toggleCart}
          >
            {/* Cart Icon as SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6" // Adjusted size for the icon
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          <div className="flex items-center divide-x divide-neutral-300">
            <div className="flex items-center gap-2 pl-5">
              <ButtonCircle className="overflow-hidden bg-gray">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="h-full w-full object-cover object-center"
                />
              </ButtonCircle>
              <Link href="/signup" className="hidden text-sm lg:block">
                Nanguti
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-white/15 mt-4 md:mt-5 -pb-16" />

      {/* Cart Slider */}
      {isCartOpen && (
        <div
          className={`fixed right-0 top-0 w-80 h-full bg-gray-900 text-white shadow-lg p-4
             transition-transform duration-300 transform ${
               isCartOpen ? "translate-x-0 z-40" : "translate-x-full"
             }`}
        >
          <h2 className="text-xl font-bold">Your Cart</h2>
          {/* Example Cart Item */}
          <div className="flex items-center justify-between my-2">
            <span>Item Name</span>
            <span>$Price</span>
          </div>
          {/* Additional cart items can be listed here */}
          <button
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            onClick={toggleCart} // Close the cart
          >
            Close Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Navabar;
