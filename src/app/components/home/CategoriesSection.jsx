"use client";

import { useState, useEffect } from "react";
import SectionHead from "../common/SectionHead";
import { LoaderCircle } from "lucide-react";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center w-full">
      <LoaderCircle size={24} className="animate-spin" />
    </div>;
  }

  return (
    <div className="py-8 container mx-auto">
      <div className="bg-gray-200 rounded-3xl py-6 px-4">
        <SectionHead title="Browse by Dress Style" />
        <div className="grid md:grid-cols-3 gap-4 max-md:col-span-2">
          {categories?.slice(0, 4).map((category, index) => (
            <div
              key={index}
              className={`bg-white text-center p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 font-bold capitalize
                ${index === 1 || index === 2 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
