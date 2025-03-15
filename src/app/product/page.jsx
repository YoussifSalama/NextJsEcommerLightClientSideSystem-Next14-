import ProductsSection from "../components/home/ProductsSection";

export default async function Product() {
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
      {/* Pass data to ProductsSection */}
      <ProductsSection data={data} />
    </div>
  );
}
