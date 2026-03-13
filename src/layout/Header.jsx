import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  User,
  Menu,
  ShoppingCart,
  ChevronDown,
  Mail,
  Phone,
  Heart,
  Youtube,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="md:mb-5">
      <div className="mt-9 block md:hidden">
        <div className="flex justify-between items-center px-10 mb-2.5">
          <Link to="/" className="text-2xl font-bold leading-8 text-[#252B42]">
            Bandage
          </Link>
          <div className="flex gap-6 text-[#252B42]">
            <User />
            <Search />
            <ShoppingCart />
            <button onClick={toggleNavbar}>
              <Menu />
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="flex flex-col items-center gap-5 text-2xl font-normal leading-[2.813rem] text-[#737373] my-10">
            <Link to="/" onClick={toggleNavbar}>
              Home
            </Link>
            <Link to="/shop" onClick={toggleNavbar}>
              Product
            </Link>
            <Link to="/pricing" onClick={toggleNavbar}>
              Pricing
            </Link>
            <Link to="/contact" onClick={toggleNavbar}>
              Contact
            </Link>
          </nav>
        )}
      </div>
      <div className="hidden md:block">
        <div className="bg-[#252B42] text-white px-30 flex justify-between items-center py-2.5 text-sm font-bold leading-6">
          <div className="flex gap-8 p-2.5">
            <div className="flex gap-[0.313rem] items-center">
              <Phone size={16} />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex gap-[0.313rem] items-center">
              <Mail size={16} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className="p-2.5">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>
          <div className="flex gap-2.5 p-2.5 items-center">
            <span>Follow Us :</span>
            <Instagram size={16} />
            <Youtube size={16} />
            <Facebook size={16} />
            <Twitter size={16} />
          </div>
        </div>

        <div className="flex items-center px-35 mt-[0.813rem]">
          <Link
            to="/"
            className="text-2xl font-bold text-[#252B42] leading-8 flex-none"
          >
            Bandage
          </Link>

          <div className="flex grow justify-between items-center ml-30">
            <nav className="flex gap-[0.938rem] text-sm font-bold leading-6 text-[#737373]">
              <Link to="/">Home</Link>
              <div className="flex gap-1.5 items-center">
                <Link to="/shop">Shop</Link>
                <ChevronDown size={16} />
              </div>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/">Pages</Link>
            </nav>

            <div className="flex text-[#23A6F0] text-sm font-bold leading-6 gap-3.5 items-center">
              <div className="flex gap-[0.313rem] items-center mr-3">
                <User size={16} />
                <Link to="/login">Login</Link>
                <span>/</span>
                <Link to="/signup">Register</Link>
              </div>
              <Search size={16} />
              <ShoppingCart size={16} />
              <Heart size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
