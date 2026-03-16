import { Link } from "react-router-dom";

export default function ShopCategoryCard({ category }) {
  if (!category) return null;

  const gender = category.gender === "k" ? "kadin" : "erkek";

  return (
    <Link to={`/shop/${gender}/${category.title}/${category.id}`}>
      <div className="relative w-full max-w-[200px] mx-auto">
        <div className="w-full h-[15rem] overflow-hidden rounded-md">
          <img
            src={category.img || "/src/assets/product1.jpg"}
            alt={category.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/10 rounded-md"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
          <p className="text-lg">{category.title}</p>
          <p className="text-sm font-normal">{category.rating} Rating</p>
        </div>
      </div>
    </Link>
  );
}
