import { Grip, SlidersHorizontal } from "lucide-react";
import ShopProductCard from "./ShopProductCard";
import { Link } from "react-router-dom";
import product1 from "/src/assets/product1.jpg";

export default function ShopProducts() {
  const products = Array(12).fill(product1);

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-20">
      <div className="flex flex-col items-center gap-8 mb-16 md:flex-row md:justify-between md:items-center">
        <span className="text-sm font-bold text-[#737373]">
          Showing all 12 results
        </span>

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-16">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-[#737373]">Views:</span>

            <div className="flex gap-3">
              <div className="w-[46px] h-[46px] border border-[#DDDDDD] rounded flex items-center justify-center">
                <Grip size={18} />
              </div>

              <div className="w-[46px] h-[46px] border border-[#DDDDDD] rounded flex items-center justify-center">
                <SlidersHorizontal size={18} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <select className="h-[46px] px-6 border border-[#DDDDDD] bg-white text-sm rounded">
              <option>Popularity</option>
            </select>

            <button className="h-[46px] px-8 bg-[#23A6F0] text-white text-sm font-bold rounded">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((img, index) => (
          <Link key={index} to={`/product/${index + 1}`} className="w-full">
            <ShopProductCard key={index} image={img} />
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-20">
        <div className="flex rounded-md overflow-hidden border border-[#D5D5D5] shadow-sm">
          <button className="px-5 py-6 text-sm bg-[#F3F3F3] text-[#BDBDBD] border-r border-[#D5D5D5]">
            First
          </button>

          <button className="px-5 text-sm text-white bg-[#23A6F0] border-r border-[#D5D5D5]">
            1
          </button>

          <button className="px-5 text-sm text-[#23A6F0] border-r border-[#D5D5D5]">
            2
          </button>

          <button className="px-5 text-sm text-[#23A6F0] border-r border-[#D5D5D5]">
            3
          </button>

          <button className="px-5 text-sm text-[#23A6F0]">Next</button>
        </div>
      </div>
    </div>
  );
}
