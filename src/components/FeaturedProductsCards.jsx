import ProductCard from "./ProductCard";
import product1 from "/src/assets/product1.jpg";

export default function FeaturedProductCards({
  align = "center",
  simple = false,
}) {
  const products = [
    { id: 1, image: product1 },
    { id: 2, image: product1 },
    { id: 3, image: product1 },
    { id: 4, image: product1 },
    { id: 5, image: product1 },
    { id: 6, image: product1 },
    { id: 7, image: product1 },
    { id: 8, image: product1 },
    { id: 9, image: product1 },
    { id: 10, image: product1 },
  ];

  const alignClass =
    align === "left"
      ? "items-center text-center lg:items-start lg:text-left"
      : "items-center text-center";

  return (
    <section className={`flex flex-col ${alignClass} mt-20`}>
      <div className={`flex flex-col gap-2.5 mb-10 ${alignClass}`}>
        {!simple && (
          <h4 className="text-[#737373] text-xl">Featured Products</h4>
        )}

        <h3 className="text-2xl font-bold text-[#252B42]">
          BESTSELLER PRODUCTS
        </h3>

        {!simple && (
          <p className="text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        )}
      </div>

      <div className="flex flex-col items-center gap-[1.875rem]">
        <div className="flex flex-col md:flex-row gap-[1.875rem]">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} image={product.image} />
          ))}
        </div>

        <div className="hidden md:flex md:flex-row gap-[1.875rem]">
          {products.slice(5, 10).map((product) => (
            <ProductCard key={product.id} image={product.image} />
          ))}
        </div>
      </div>

      {!simple && (
        <button className="mt-12 mx-auto text-[#23A6F0] text-sm font-bold border border-[#23A6F0] rounded-[0.313rem] w-[16rem] h-[3.25rem]">
          LOAD MORE PRODUCTS
        </button>
      )}
    </section>
  );
}
