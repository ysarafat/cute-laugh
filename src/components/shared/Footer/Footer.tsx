import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import Container from "../Container";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <Container className="pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:justify-items-end gap-5">
          <div>
            <Logo />
            <p className="py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              laboriosam rem dolore voluptatibus enim aut nemo ex et laborum
              iste!
            </p>
            <div className="flex items-center gap-x-3">
              <span>
                <FaFacebook size={28} />
              </span>
              <span>
                <FaXTwitter size={28} />
              </span>
              <span>
                <TfiLinkedin size={28} />
              </span>
              <span>
                <IoLogoYoutube size={28} />
              </span>
            </div>
          </div>
          <div className="">
            <h5 className="uppercase text-lg font-semibold">Quick Links</h5>
            <ul className="mt-3 space-y-1">
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/most-popular-products"
                >
                  Popular Products
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/categories"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/about-us"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/contact-us"
                >
                  Customer Care
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="uppercase text-lg font-semibold">Categories</h5>
            <ul className="mt-3 space-y-1">
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/most-popular-products"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/categories"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/about-us"
                >
                  Hoodies
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/contact-us"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 transition-all"
                  href="/contact-us"
                >
                  Sweaters
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="uppercase text-lg font-semibold">NewsLetter</h5>
            <form action="">
              <input
                type="email"
                placeholder="Email "
                required={true}
                className="py-2 mt-3 rounded-lg ring focus:ring-blue-500 outline-none block px-2 w-full"
              />
              <button className=" w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white md:py-2 md:px-5 px-2 py-2 rounded-lg  hover:shadow-md transition-all">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="border-t mt-6 ">
          <p className="mt-6 text-center">
            &copy; 2024 CUTE LAUGH, All Right Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
