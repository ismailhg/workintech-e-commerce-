import featuredimg1 from "/src/assets/featuredimg1.jpg";
import featuredimg2 from "/src/assets/featuredimg2.jpg";

export default function FeaturedProductsSection() {
  return (
    <section className="py-20 flex flex-col gap-[3.125rem] md:flex-row-reverse md:justify-center md:gap-[5.625rem]">
      <div className="flex flex-col gap-4 w-[17.5rem] md:w-[27.938rem] mx-auto md:mx-0">
        <h5 className="text-base font-bold text-[#23A6F0]">
          Featured Products
        </h5>

        <h2 className="text-[2.5rem] font-bold text-[#252B42]">
          We love what we do
        </h2>

        <p className="text-[#737373] text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics.
        </p>
      </div>

      <div className="flex gap-[1.369rem] mx-auto md:mx-0">
        <img
          src={featuredimg1}
          className="w-[9.901rem] md:w-[13.563rem] object-cover"
        />
        <img
          src={featuredimg2}
          className="w-[12.776rem] md:w-[17.5rem] object-cover"
        />
      </div>
    </section>
  );
}
