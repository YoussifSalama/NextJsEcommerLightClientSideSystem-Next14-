"use client";

import { updateCartItemQuantity } from "@/app/services/client/product.client.services";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Quantity = ({ item }) => {
  const [itemQuantity, setItemQuantity] = useState(item?.quantity || 1);

  const plusQuantity = async () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    await updateCartItemQuantity(item?.guestCartId, JSON.parse(item?.product)?.id, newQuantity);
  };

  const minusQuantity = async () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      await updateCartItemQuantity(item?.guestCartId, JSON.parse(item?.product)?.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className="font-bold text-[1rem] border rounded-full cursor-pointer p-1"
        onClick={plusQuantity}
      >
        <Plus className="h-4 w-4" />
      </span>
      <span className="font-bold text-[1rem]">{itemQuantity}</span>
      <span
        className="font-bold text-[1rem] border rounded-full cursor-pointer p-1"
        onClick={minusQuantity}
      >
        <Minus className="h-4 w-4" />
      </span>
    </div>
  );
};

export default Quantity;
