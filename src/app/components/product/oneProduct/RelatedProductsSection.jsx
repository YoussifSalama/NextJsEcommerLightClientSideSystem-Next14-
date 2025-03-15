"use client";

import { useRouter } from "next/navigation";
import SectionHead from "../../common/SectionHead";
import Button from "../../common/Button";
import Card from "../../common/Card";


const RelatedProductsSection = ({ data = [],category="" }) => {
  const router = useRouter();

  return (
      data && data?.length>0 && <div>
      <SectionHead title="You May Also Like" className="text-start" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto">
        {data.map((product) => (
          <Card key={product.id || product._id} product={product} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        <Button
          title="View All"
          className="text-[0.7rem] px-8"
          onClick={() => router.push("/product")}
        />
      </div>
    </div>
  );
};

export default RelatedProductsSection;
