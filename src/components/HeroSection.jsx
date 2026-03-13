import heromobile from "/src/assets/heromobile.png";
import hero from "/src/assets/hero.png";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-r from-[#96E9FB] to-[#ABECD6] pt-20 rounded-[1.25rem] mx-5 md:mx-[3.688rem] flex flex-col md:flex-row md:mt-5 md:h-[38.688rem]">
      <div className="flex flex-col items-center gap-8 md:gap-[1.875rem] md:ml-[12.875rem] md:mt-18 md:items-start">
        <span className="text-[#2A7CC7] text-base font-bold leading-6">
          SUMMER 2020
        </span>

        <div className="text-[#252B42] text-[2.5rem] md:text-[3.625rem] font-bold leading-[3.125rem] md:leading-20 flex flex-col items-center md:flex-row md:gap-4">
          <span>NEW</span>
          <span>COLLECTION</span>
        </div>

        <span className="text-[#737373] text-xl leading-[1.875rem] font-normal text-center block md:hidden">
          We know how large objects will act, but things on a small scale.
        </span>

        <span className="text-[#737373] text-xl leading-[1.875rem] font-normal hidden md:block">
          We know how large objects will act,
          <br />
          but things on a small scale.
        </span>

        <button className="w-[13.813rem] h-[3.875rem] bg-[#23A6F0] text-white text-2xl font-bold rounded-[0.313rem]">
          SHOP NOW
        </button>
      </div>

      <div className="flex justify-center">
        <img
          className="hidden md:block md:w-[43.563rem] md:h-[38.688rem] md:absolute md:right-[-0.313rem] md:top-[7.813rem]"
          src={hero}
        />
        <img className="md:hidden w-full" src={heromobile} />
      </div>
    </section>
  );
}
