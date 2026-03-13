import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ShopCategoryCard from "./ShopCategoryCard";
import product1 from "/src/assets/product1.jpg";

export default function ShopCategories() {
  return (
    <div className="bg-[#FAFAFA] py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl font-bold text-[#252B42] text-center md:text-left">
            Shop
          </h2>

          <div className="flex items-center justify-center md:justify-end gap-2 text-sm font-bold">
            <Link to="/" className="text-[#252B42]">
              Home
            </Link>
            <ChevronRight size={16} color="#BDBDBD" />
            <span className="text-[#737373]">Shop</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[...Array(5)].map((_, index) => (
            <ShopCategoryCard key={index} image={product1} />
          ))}
        </div>
      </div>
    </div>
  );
}
