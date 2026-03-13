import { BookOpen, Book, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="flex flex-col items-center mt-20">
      <div className="flex flex-col items-center gap-2.5 mb-10">
        <h4 className="text-[#737373] text-xl">Featured Products</h4>
        <h3 className="text-[#252B42] text-2xl font-bold">THE BEST SERVICES</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-[1.875rem] px-10 py-[2.188rem]">
        <div className="flex flex-col items-center gap-5 text-[#23A6F0]">
          <BookOpen size={72} />
          <h3 className="text-2xl font-bold text-[#252B42]">Easy Wins</h3>
          <p className="text-sm text-[#737373] text-center w-[14.063rem]">
            Get your best looking smile now!
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 text-[#23A6F0]">
          <Book size={72} />
          <h3 className="text-2xl font-bold text-[#252B42]">Concrete</h3>
          <p className="text-sm text-[#737373] text-center w-[14.063rem]">
            Helping you discover your most beautiful smile
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 text-[#23A6F0]">
          <TrendingUp size={72} />
          <h3 className="text-2xl font-bold text-[#252B42]">Hack Growth</h3>
          <p className="text-sm text-[#737373] text-center w-[14.063rem]">
            Overcame any hurdle or any other problem.
          </p>
        </div>
      </div>
    </section>
  );
}
