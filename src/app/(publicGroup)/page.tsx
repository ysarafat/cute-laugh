import FlashSale from "@/components/Home/FlashSale/FlashSale";
import Hero from "@/components/Home/Hero/Hero";
import MostPopularProduct from "@/components/Home/MostPopularProducts/MostPopularProduct";
import TopCategories from "@/components/Home/TopCategories/TopCategories";

const Home = () => {
  return (
    <div>
      <Hero />
      <FlashSale />
      <TopCategories />
      <MostPopularProduct />
    </div>
  );
};

export default Home;
