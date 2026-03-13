export default function ShopProductCard({ image }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full aspect-[4/5] overflow-hidden">
        <img src={image} className="w-full h-full object-cover" />
      </div>

      <div className="text-center mt-6 space-y-2">
        <h5 className="text-base font-bold text-[#252B42]">Graphic Design</h5>

        <p className="text-sm font-bold text-[#737373]">English Department</p>

        <div className="flex justify-center gap-2">
          <span className="text-base font-bold text-[#BDBDBD] line-through">
            $16.48
          </span>
          <span className="text-base font-bold text-[#23856D]">$6.48</span>
        </div>

        <div className="flex justify-center gap-2 pt-2">
          <span className="w-3 h-3 rounded-full bg-[#23A6F0]"></span>
          <span className="w-3 h-3 rounded-full bg-[#23856D]"></span>
          <span className="w-3 h-3 rounded-full bg-[#E77C40]"></span>
          <span className="w-3 h-3 rounded-full bg-[#252B42]"></span>
        </div>
      </div>
    </div>
  );
}
