import {
  AlarmClock,
  ChartArea,
  ChevronRight,
  Star,
  Download,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";

export default function FeaturedPost({
  image,
  title,
  description,
  date,
  comments,
  priceOld,
  priceNew,
}) {
  return (
    <div className="flex flex-col md:flex-row w-[20.625rem] md:w-[31.313rem] bg-white">
      <div
        className="w-full h-[18.75rem] md:w-[13.063rem] md:h-[25.25rem] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className="absolute top-5 left-5 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
          Sale
        </span>

        <div className="hidden md:flex absolute bottom-5 left-5 gap-2.5">
          <span className="bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
            <Heart size={18} />
          </span>
          <span className="bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
            <ShoppingCart size={18} />
          </span>
          <span className="bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
            <Eye size={18} />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 px-6 pt-6 pb-8 w-full md:w-[18.25rem]">
        <div className="flex justify-between items-center">
          <span className="text-[#23A6F0] text-sm font-bold">
            English Department
          </span>

          <div className="flex items-center gap-1 bg-[#252B42] px-2 py-1 rounded-full">
            <Star size={14} color="#FFCE31" />
            <span className="text-white text-xs">4.9</span>
          </div>
        </div>

        <h5 className="text-[#252B42] text-base font-bold">{title}</h5>

        <p className="text-[#737373] text-sm">{description}</p>

        <div className="flex items-center gap-2 text-[#737373]">
          <Download size={16} />
          <span className="text-sm font-bold">15 Sales</span>
        </div>

        <div className="flex gap-2 font-bold">
          <span className="text-[#BDBDBD] line-through">${priceOld}</span>
          <span className="text-[#23856D]">${priceNew}</span>
        </div>

        <div className="flex gap-2">
          <span className="bg-[#23A6F0] w-4 h-4 rounded-full"></span>
          <span className="bg-[#23856D] w-4 h-4 rounded-full"></span>
          <span className="bg-[#E77C40] w-4 h-4 rounded-full"></span>
          <span className="bg-[#252B42] w-4 h-4 rounded-full"></span>
        </div>

        <div className="flex justify-between pt-4 text-xs text-[#737373]">
          <div className="flex items-center gap-1">
            <AlarmClock size={14} color="#23A6F0" />
            {date}
          </div>

          <div className="flex items-center gap-1">
            <ChartArea size={14} color="#23856D" />
            {comments}
          </div>
        </div>

        <button className="mt-4 text-[#23A6F0] border border-[#23A6F0] rounded-full px-5 py-2 text-sm font-bold flex items-center gap-1 w-fit hover:bg-[#23A6F0] hover:text-white transition">
          Learn More <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
