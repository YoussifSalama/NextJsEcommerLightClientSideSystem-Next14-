"use client";

import { useCallback, useEffect, useState } from "react";
import SectionHead from "@/app/components/common/SectionHead";
import { useParams } from "next/navigation";
import { Loader } from "lucide-react";
import OrderCard from "@/app/components/order/OrderCard";
import OrderItemsNotFound from "@/app/components/ui/OrderItemsNotFound";
import GuestDetailsOrderDialog from "@/app/components/order/orderGuestDetails/GuestDetailsOrderDialog";

export default function Order() {
  const { orderGuestId } = useParams();
  const [orderItems, setOrderItems] = useState([]);
  const [refreshOnEvent, setRefreshOnEvent] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchOrderItems=useCallback(async () => {
    setLoading(true);
    const response = await fetch(`/api/order/${orderGuestId}`);
    const data = await response.json();
    data && setLoading(false);
    setOrderItems(data?.data || []);
  }, [orderGuestId]);

  useEffect(() => {
    fetchOrderItems();
  }, [orderGuestId, refreshOnEvent]);

  if(loading) {
    return<div className="flex items-center justify-center h-screen">
    <Loader className="animate-spin text-gray-600 w-10 h-10" />
  </div>
  }

  return (
    <div className="py-8 min-h-screen">
      {orderItems?.length === 0 || orderGuestId === "guest" ? (
        <OrderItemsNotFound />
      ) : (
        <div className="container">
          <div className="flex flex-col gap-4">
            <SectionHead title="Your Order" />

            <div className="flex flex-col gap-5">
              {orderItems?.map((item, index) => (
               <div>
                <GuestDetailsOrderDialog guestOrderData={{name: item?.name, email: item?.email, phone: item?.phone, address: item?.address}}>
                  <h3 className="cursor-pointer mb-1">Order #{index + 1}</h3>
                </GuestDetailsOrderDialog>
                 <OrderCard key={index} item={item} setRefreshOnEvent={setRefreshOnEvent} />
               </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
