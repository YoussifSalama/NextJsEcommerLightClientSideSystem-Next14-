"use client";

import { addToCartFunction } from "@/app/services/client/product.client.services";
import generateRandomGuestIdClient from "@/services/client/generateRandomGuestId.client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ReactStars = dynamic(() => import("react-stars"), { ssr: false });

const Card = ({ product , displayButton=true}) => {
  const [rating, setRating] = useState(product.rating?.rate || 3.5);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (isAdding) return;

    setIsAdding(true);
    await addToCartFunction(product);
    setIsAdding(false);
  };

  return (
    <div>
      <div className={`border rounded-xl flex flex-col shadow-md
        ${displayButton && "min-h-[400px]"}
        `}>
       <Link href={`/product/${product.id || product._id}`} >
         {/* Product Image */}
      <div className="p-2 bg-gray-200 rounded-xl flex items-center justify-center h-[200px]">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="rounded-xl object-fill"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="m-2 h-[120px]">
        {/* Title */}
        <div className="font-bold capitalize text-[0.8rem]">
          {product.title}
        </div>

        {/* Rating */}
        <div className="flex gap-2 items-center">
          <ReactStars
            count={5}
            value={rating}
            size={20}
            color2={"#ffd700"}
            edit={false}
          />
          <span className="text-[12px]">
            <span>{rating}/</span>
            <span className="text-gray-400">5</span>
          </span>
        </div>

        {/* Price & Discount */}
        <div className="text-[1rem] flex items-center">
          <span className="font-bold">${product.price}</span>
          {product.oldPrice && (
            <span className="line-through mx-2 text-gray-400">
              ${product.oldPrice}
            </span>
          )}
          {product.discount && (
            <span className="rounded-xl text-[10px] bg-red-100 py-1 px-2 text-red-500">
              {product.discount}%
            </span>
          )}
        </div>
      </div>
       </Link>
                  {/* add to cart button*/}
        <div className={`mt-auto w-full hover:opacity-80 ${!displayButton && "hidden"}`}
        onClick={()=>{handleAddToCart()}}
        >
          <div className="flex justify-between items-center w-full relative">
            <div className="relative w-[12px] h-[12px]">
              <div className="bg-black h-full w-full absolute"></div>
              <div className="bg-white h-full w-full absolute rounded-bl-full"></div>
            </div>
            <div className="relative w-[12px] h-[12px]">
              <div className="bg-black h-full w-full absolute"></div>
              <div className="bg-white h-full w-full absolute rounded-br-full"></div>
            </div>
          </div>

          <button className="bg-black text-white py-3 w-full rounded-b-xl"
          disabled={isAdding}
          >
            {isAdding ? "Adding..." : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
