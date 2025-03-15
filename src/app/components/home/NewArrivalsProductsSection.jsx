"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import SectionHead from "../common/SectionHead";

const NewArrivalsProductsSection = ({ data = [] }) => {
  const router = useRouter();
  const [randomStart, setRandomStart] = useState(0);

  useEffect(() => {
    if (data.length > 4) {
      const maxStart = Math.max(0, data.length - 4);
      setRandomStart(Math.floor(Math.random() * maxStart));
    }
  }, [data.length]);

  if (!data.length) return null;

  const randomEnd = Math.min(randomStart + 4, data.length);

  return (
    <div className="py-8">
      <SectionHead title="New Arrivals" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto">
        {data.slice(randomStart, randomEnd).map((product) => (
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

export default NewArrivalsProductsSection;
