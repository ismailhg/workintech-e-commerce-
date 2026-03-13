import FeaturedPost from "./FeaturedPost";
import featuredpost from "/src/assets/featuredpost.jpg";
import featuredpost2 from "/src/assets/featuredpost2.jpg";

export default function FeaturedPostsSection() {
  return (
    <section className="mt-20">
      <div className="flex flex-col gap-2.5 items-center mb-10">
        <h6 className="text-[#23A6F0] text-sm font-bold">Practice Advice</h6>
        <h3 className="text-[#252B42] text-[2.5rem] font-bold">
          Featured Posts
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-[10rem] justify-center items-center">
        <FeaturedPost
          image={featuredpost}
          title="Graphic Design"
          description="We focus on ergonomics and meeting you where you work."
          date="22 April 2021"
          comments="10 Comments"
          priceOld="16.48"
          priceNew="6.48"
        />

        <FeaturedPost
          image={featuredpost2}
          title="UI/UX Design"
          description="We focus on ergonomics and meeting you where you work."
          date="22 April 2021"
          comments="10 Comments"
          priceOld="24.48"
          priceNew="12.48"
        />
      </div>
    </section>
  );
}
