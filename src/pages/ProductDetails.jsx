import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Eye,
  Star,
} from "lucide-react";
import { useState } from "react";

import product1 from "/src/assets/product1.jpg";
import product2 from "/src/assets/product2.jpg";

import FeaturedProductCards from "../components/FeaturedProductsCards";
import BrandSection from "../components/BrandSection";

const images = [product1, product2];

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="max-w-[1080px] mx-auto px-6 py-12">
      <div className="flex items-center gap-2 text-sm mb-10">
        <span className="font-medium text-[#252B42]">Home</span>
        <span className="text-gray-400">{">"}</span>
        <span className="text-gray-400">Shop</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src={images[activeImage]}
              className="w-full h-full object-cover"
            />

            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1,
                )
              }
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white"
            >
              <ChevronLeft size={56} strokeWidth={2} />
            </button>

            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1,
                )
              }
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white"
            >
              <ChevronRight size={56} strokeWidth={2} />
            </button>
          </div>

          <div className="flex gap-4 mt-6">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-[80px] aspect-[4/5] overflow-hidden rounded cursor-pointer }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold text-[#252B42]">
            Floating Phone
          </h1>

          <div className="flex items-center mt-2 gap-3">
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}

              <Star size={18} />
            </div>

            <span className="text-gray-500 text-sm">10 Reviews</span>
          </div>

          <p className="text-2xl mt-2 font-bold text-[#252B42]">$1,139.33</p>

          <p className="text-sm mt-5">
            <span className="text-gray-500">Availability :</span>
            <span className="text-[#23A6F0] ml-1 font-medium">In Stock</span>
          </p>

          <p className="text-gray-500 text-sm mt-5 leading-relaxed max-w-[420px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequat door ENIM RELIT Mollie. Excitation venial
            consequat sent nostr.
          </p>

          <hr className="my-2" />

          <div className="flex mt-5 gap-4">
            <div className="w-6 h-6 rounded-full bg-blue-400 cursor-pointer" />
            <div className="w-6 h-6 rounded-full bg-green-400 cursor-pointer" />
            <div className="w-6 h-6 rounded-full bg-orange-400 cursor-pointer" />
            <div className="w-6 h-6 rounded-full bg-gray-800 cursor-pointer" />
          </div>

          <div className="flex items-center mt-15 gap-4 pt-2">
            <button className="bg-[#23A6F0] text-white px-6 py-2 rounded-md text-sm font-medium">
              Select Options
            </button>

            <button className="w-10 h-10 flex items-center justify-center border rounded-full">
              <Heart size={18} />
            </button>

            <button className="w-10 h-10 flex items-center justify-center border rounded-full">
              <ShoppingCart size={18} />
            </button>

            <button className="w-10 h-10 flex items-center justify-center border rounded-full">
              <Eye size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="flex justify-center gap-10 border-b border-gray-300 pb-4 mb-14 text-sm font-medium text-gray-500">
          <button className="pb-2 text-[#252B42]">Description</button>

          <button className="pb-2 hover:text-[#252B42]">
            Additional Information
          </button>

          <button className="pb-2 hover:text-[#252B42]">
            Reviews <span className="text-green-500">(0)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
            <img src={product1} className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#252B42] mb-4">
              the quick fox jumps over
            </h3>

            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequat door ENIM RELIT Mollie. Excitation
              venial consequat sent nostr.
            </p>

            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequat door ENIM RELIT Mollie. Excitation
              venial consequat sent nostr.
            </p>

            <p className="text-sm text-gray-500 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequat door ENIM RELIT Mollie. Excitation
              venial consequat sent nostr.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-lg font-semibold text-[#252B42] mb-4">
                the quick fox jumps over
              </h3>

              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ChevronRight size={20} />
                    the quick fox jumps over the lazy dog
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#252B42] mb-4">
                the quick fox jumps over
              </h3>

              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ChevronRight size={20} />
                    the quick fox jumps over the lazy dog
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <FeaturedProductCards align="left" simple />
      </div>

      <div className="mt-20">
        <BrandSection />
      </div>
    </div>
  );
};

export default ProductDetails;
