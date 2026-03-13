import { Link } from "react-router-dom";

export default function ShopCategoryCard({ image }) {
  return (
    <Link to="/xxxx">
      <div className="relative w-full max-w-[200px] mx-auto">
        <div className="w-full h-[15rem] overflow-hidden rounded-md">
          <img src={image} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/10 rounded-md"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
          <p className="text-lg">CLOTHS</p>
          <p className="text-sm font-normal">5 Items</p>
        </div>
      </div>
    </Link>
  );
}
