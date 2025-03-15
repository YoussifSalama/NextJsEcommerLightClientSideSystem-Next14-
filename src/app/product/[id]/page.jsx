"use client";

import Quantity from "@/app/components/common/Quantity";
import CustomersSection from "@/app/components/home/CustomersSection";
import RelatedProductsSection from "@/app/components/product/oneProduct/RelatedProductsSection";
import { addToCartFunction } from "@/app/services/client/product.client.services";
import { Button } from "@/components/ui/button";
import useScrollToTop from "@/hooks/useScrollToTop";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "data":
      return {
        ...state,
        data: action.payload.product,
        relatedData: action.payload.related,
        loading: false,
        error: null,
      };
    case "loading":
      return { ...state, loading: action.payload };
    case "error":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default function SpecificProduct() {
  useScrollToTop();
  const [isClient, setIsClient] = useState(false);
  const { id } = useParams();

  const [state, dispatch] = useReducer(reducer, {
    relatedData: null,
    data: null,
    loading: true,
    error: null,
  });

  const [itemQuantity, setItemQuantity] = useState(1);
  const getProductFromCart=async(productId)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/product/${productId}`);
    const data=await res.json();
    if(data){
      setItemQuantity(data?.data[0]?.quantity);
    }
  }

  useEffect(() => {
    setIsClient(true);
    getProductFromCart(id);
  }, []);

  const fetchProductData = async () => {
    dispatch({ type: "loading", payload: true });

    try {
      const [productRes] = await Promise.all([
        fetch(`https://fakestoreapi.com/products/${id}`),
      ]);

      if (!productRes.ok) throw new Error("Failed to fetch product");

      const product = await productRes.json();

      // Fetch related products based on category
      const relatedRes = await fetch(
        `https://fakestoreapi.com/products/category/${product.category}`
      );
      const related = relatedRes.ok ? await relatedRes.json() : [];

      dispatch({ type: "data", payload: { product, related } });
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch({ type: "error", payload: "Failed to load product" });
    }
  };

  useEffect(() => {
    if (isClient && id) fetchProductData();
  }, [isClient, id]);

  if (!isClient || state.loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin text-gray-600 w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Left Section - Product Details */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            {state?.data?.title}
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            Category: {state?.data?.category}
          </p>
          <p className="text-gray-700">{state?.data?.description}</p>
          <p className="text-lg font-bold text-green-600 mt-3">
            ${state?.data?.price}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            ⭐ {state?.data?.rating?.rate} / 5 ({state?.data?.rating?.count}{" "}
            reviews)
          </p>

          <div className="my-2 flex items-center justify-between">
            <div>
              <Quantity item={{...state?.data, quantity: itemQuantity}} />
            </div>
            <div>
              <Button onClick={()=>{
                addToCartFunction(state?.data);
                setItemQuantity(itemQuantity+1);
              }}>Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* Right Section - Product Image */}
        <div className="flex-1 border rounded-2xl shadow-lg flex items-center justify-center
        max-sm:w-full
        ">
          <img
            src={state?.data?.image}
            alt={state?.data?.title}
            className="scale-75 object-contain max-h-[300px]"
          />
        </div>
      </div>

      {/* Customers Section */}
      <CustomersSection />

      {/* Related Products */}
      <RelatedProductsSection
        data={state.relatedData}
        category={state.data?.category}
      />
    </div>
  );
}
