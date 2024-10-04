import Categories from "@/sections/Categories";
import Hero from "@/sections/Hero";
import RecommendedProducts from "@/sections/RecommendedProducts";
import TopBrands from "@/sections/TopBrands";
import TopCategories from "@/sections/TopCategories";
import TopDeals from "@/sections/TopDeals";

export default function Home() {
  return (
    <div className="py-40 overflow-x-clip">
      <div className="container">
        <Hero />
        <TopCategories />
        {/* <Categories /> */}
        <TopDeals />
        <TopBrands />
        <RecommendedProducts />
      </div>
    </div>
  );
}
