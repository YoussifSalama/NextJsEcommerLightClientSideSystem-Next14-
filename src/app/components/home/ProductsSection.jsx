import Card from "../common/Card";


const ProductsSection = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto">
      {data?.map((product, index) => (
        <>
        <Card key={index} product={product} />
        </>
      ))}
    </div>
  );
};

export default ProductsSection;
