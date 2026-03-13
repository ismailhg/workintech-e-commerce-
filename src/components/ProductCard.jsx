import product1 from "/src/assets/product1.jpg";

export default function ProductCard({
  image = product1,
  title = "Graphic Design",
  department = "English Department",
  oldPrice = "16.48",
  newPrice = "6.48",
}) {
  return (
    <div className="flex flex-col items-center w-[10.5rem] md:w-[11.438rem]">
      <div className="w-full h-[12rem] md:h-[15rem] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col items-center gap-2.5 py-[1.563rem]">
        <h5 className="text-base font-bold text-[#252B42]">{title}</h5>

        <span className="text-sm font-bold text-[#737373]">{department}</span>

        <div className="flex gap-[0.313rem]">
          <h5 className="text-base font-bold text-[#BDBDBD] line-through">
            ${oldPrice}
          </h5>
          <h5 className="text-base font-bold text-[#23856D]">${newPrice}</h5>
        </div>
      </div>
    </div>
  );
}
