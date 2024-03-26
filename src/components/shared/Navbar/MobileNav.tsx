"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      {isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white p-1 rounded-md border border-blue-200 "
        >
          <IoCloseSharp size={24} />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white p-1 rounded-md border border-blue-200 "
        >
          <IoMenu size={24} />
        </button>
      )}

      {isOpen && (
        <div className="absolute z-[999] top-[61px] right-0  py-10 px-5 bg-blue-100 min-h-[calc(100vh-61px)] w-1/2">
          <ul className="flex flex-col items-center gap-4 mb-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/flash-sale">Flash Sale</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <div className="flex justify-center text-center">
            <Link
              href="/dashboard/all-products"
              className="border bg-white py-2 px-  rounded-md w-full"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
