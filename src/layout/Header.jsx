import { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/categoryActions";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const user = useSelector((state) => state.client.user);

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.product.categories);

  const cart = useSelector((state) => state.shoppingCart.cart || []);

  const total = cart.reduce((acc, item) => acc + item.count, 0);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
              <div
                className="relative flex gap-1.5 items-center cursor-pointer"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <Link to="/shop">Shop</Link>
                <ChevronDown size={16} />

                {shopOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg p-6 flex gap-16 z-50">
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-[#252B42]">Kadın</span>

                      {categories
                        ?.filter((c) => c.gender === "k")
                        .map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/shop/kadin/${cat.title}/${cat.id}`}
                            className="text-[#737373] hover:text-black"
                          >
                            {cat.title}
                          </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-[#252B42]">Erkek</span>

                      {categories
                        ?.filter((c) => c.gender === "e")
                        .map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/shop/erkek/${cat.title}/${cat.id}`}
                            className="text-[#737373] hover:text-black"
                          >
                            {cat.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
              </div>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/">Pages</Link>
            </nav>

            <div className="flex text-[#23A6F0] text-sm font-bold leading-6 gap-3.5 items-center">
              <div className="flex gap-[0.313rem] items-center mr-3">
                <User size={16} />

                {user?.name ? (
                  <>
                    <span>Welcome, {user.name}</span>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <span>/</span>
                    <Link to="/signup">Register</Link>
                  </>
                )}
              </div>
              <Search size={16} />
              <div
                className="relative"
                onMouseEnter={() => setCartOpen(true)}
                onMouseLeave={() => setCartOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <ShoppingCart size={16} />
                  <span>{total}</span>
                </div>

                {cartOpen && (
                  <div className="absolute right-0 top-full w-[280px] bg-white shadow-lg rounded-lg p-4 z-50">
                    <h3 className="font-semibold text-sm mb-3">
                      Sepetim ({cart.length} Ürün)
                    </h3>

                    {cart.length === 0 && (
                      <p className="text-xs text-gray-500">Sepet boş</p>
                    )}

                    {cart.map((item) => (
                      <div key={item.product.id} className="flex gap-3 mb-3">
                        <img
                          src={item.product.images?.[0]?.url}
                          className="w-12 h-12 object-cover rounded"
                        />

                        <div className="flex-1">
                          <p className="text-xs font-medium line-clamp-2">
                            {item.product.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            Adet: {item.count}
                          </p>

                          <p className="text-xs font-bold text-red-500">
                            {item.product.price} TL
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="flex gap-2 mt-3">
                      <Link
                        to="/shoppingcart"
                        className="flex-1 border text-center py-1.5 rounded text-xs"
                      >
                        Sepete Git
                      </Link>

                      <button className="flex-1 bg-blue-500 text-white py-1.5 rounded text-xs">
                        Sipariş
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <Heart size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
