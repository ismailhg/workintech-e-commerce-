import HeroSection from "../components/HeroSection";
import BrandSection from "../components/BrandSection";
import ShopCardsSection from "../components/ShopCardsSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import ServicesSection from "../components/ServicesSection";
import FeaturedPostsSection from "../components/FeaturedPostsSection";
import FeaturedProductCards from "../components/FeaturedProductsCards";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <ShopCardsSection />
      <FeaturedProductCards />
      <FeaturedProductsSection />
      <ServicesSection />
      <FeaturedPostsSection />
    </>
  );
}
