import Link from "next/link";
import Container from "../Container";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="bg-blue-50 py-3 border-b relative">
      <Container className="flex justify-between items-center ">
        <Logo />
        <div className="hidden md:block">
          <ul className="flex items-center gap-x-4">
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
        </div>
        <MobileNav />
        <div className="hidden md:block">
          <Link
            href="/dashboard/all-products"
            className="border bg-white py-1 px-4  text-lg rounded-md w-full mt-5"
          >
            Dashboard
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
