"use client";

import { useCallback, useEffect, useState } from "react";
import CartCard from "@/app/components/cart/CartCard";
import SectionHead from "@/app/components/common/SectionHead";
import CartItemsNotFound from "@/app/components/ui/CartItemsNotFound";
import { useParams } from "next/navigation";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteAllMyCartItems } from "@/app/services/client/product.client.services";
import CheckoutCart from "@/app/components/cart/checkout/CheckoutCart";

export default function Cart() {
  const { cartGuestId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [refreshOnEvent, setRefreshOnEvent] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchCartItems=useCallback(async () => {
    setLoading(true);
    const response = await fetch(`/api/cart/${cartGuestId}`);
    const data = await response.json();
    data && setLoading(false);
    setCartItems(data?.data || []);
  }, [cartGuestId]);

  useEffect(() => {
    fetchCartItems();
  }, [cartGuestId, refreshOnEvent]);

  if(loading) {
    return<div className="flex items-center justify-center h-screen">
    <Loader className="animate-spin text-gray-600 w-10 h-10" />
  </div>
  }

  return (
    <div className="py-8">
      {cartItems.length === 0 || cartGuestId === "guest" ? (
        <CartItemsNotFound />
      ) : (
        <div className="container flex flex-col min-h-screen gap-4">
          <div className="flex flex-col gap-4 ">
            <SectionHead title="Your Cart" />

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cartItems.map((item, index) => (
                <CartCard key={index} item={item} setRefreshOnEvent={setRefreshOnEvent} />
              ))}
            </div>
          </div>
          <div className="mt-auto flex items-center justify-between">
            <Button className="w-full h-[50px] bg-red-500 hover:bg-red-400 rounded-xl rounded-r-none"
            onClick={async () => {
              deleteAllMyCartItems(cartGuestId).then(() => {
                setRefreshOnEvent(!refreshOnEvent);
              })
            }}
            >Delete Cart Items</Button>
            <CheckoutCart cartGuestId={cartGuestId} setRefreshOnEvent={setRefreshOnEvent} prodcuts={JSON.stringify(cartItems)}>
            <Button className="w-full h-[50px] rounded-xl rounded-l-none">Checkout</Button>
            </CheckoutCart>
          </div>
        </div>
      )}
    </div>
  );
}
