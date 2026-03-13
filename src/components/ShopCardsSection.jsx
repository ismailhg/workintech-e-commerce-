import shopcard1 from "/src/assets/shopcard1.png";
import shopcard2 from "/src/assets/shopcard2.png";
import shopcard3 from "/src/assets/shopcard3.png";

export default function ShopCardsSection() {
  return (
    <section className="flex flex-col gap-[0.938rem] mx-[2.563rem] py-6 md:flex-row md:mx-[8.031rem] md:justify-center">
      <div className="h-[34.75rem] md:h-[35.75rem] flex flex-col items-center">
        <div
          className="bg-no-repeat bg-center bg-cover h-full w-[21.563rem] md:w-[38.188rem] relative"
          style={{ backgroundImage: `url(${shopcard1})` }}
        >
          <div className="bg-[#2D8BC0BF] flex flex-col opacity-[75%] absolute bottom-0 w-full h-[14.875rem] text-white md:w-[30rem]">
            <span className="mt-[3.75rem] ml-[2.563rem] text-2xl font-bold">
              Top Product Of
              <br /> the Week
            </span>
            <span className="border border-white py-[0.938rem] px-[2.5rem] w-[12.375rem] ml-[2.594rem] text-center text-sm font-bold mt-3">
              EXPLORE ITEMS
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[0.938rem] md:gap-[1.3rem]">
        <div
          className="h-[24.875rem] md:h-[18.063rem] w-[21.563rem] md:w-[34.813rem] bg-no-repeat bg-center bg-cover relative"
          style={{ backgroundImage: `url(${shopcard2})` }}
        >
          <div className="bg-[#2D8BC0BF] flex flex-col opacity-[75%] absolute bottom-0 w-full h-[14.875rem] text-white">
            <span className="mt-[3.75rem] ml-[2.563rem] text-xl">
              Top Product Of the Week
            </span>
          </div>
        </div>

        <div
          className="h-[24.875rem] md:h-[16.313rem] w-[21.563rem] md:w-[34.813rem] bg-no-repeat bg-center bg-cover relative"
          style={{ backgroundImage: `url(${shopcard3})` }}
        >
          <div className="bg-[#2D8BC0BF] flex flex-col opacity-[75%] absolute bottom-0 w-full h-[14.875rem] text-white">
            <span className="mt-[3.75rem] ml-[2.563rem] text-xl">
              Top Product Of the Week
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
