import CategoriesSection from "./components/home/CategoriesSection";
import CustomersSection from "./components/home/CustomersSection";
import HeroSection from "./components/home/HeroSection";
import NewArrivalsProductsSection from "./components/home/NewArrivalsProductsSection";
import TopSellingProductsSection from "./components/home/TopSellingProductsSection";

export default async function Home() {
  let data = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch data");
    data = await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      {/* hero */}
      <HeroSection />
      <div className="px-4">
        {/* new arrivals */}
        <NewArrivalsProductsSection data={data} />
        {/* top selling */}
        <TopSellingProductsSection data={data} />
        {/* categories */}
        <CategoriesSection />
        {/* customers */}
        <CustomersSection />
      </div>
    </div>
  );
}
