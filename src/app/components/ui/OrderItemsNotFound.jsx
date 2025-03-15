import Image from "next/image";

export default function OrderItemsNotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image
        src="https://cdn2.iconfinder.com/data/icons/delivery-services-4/128/_shopping_bag_paper_bag_parcel_fast_delivery_wheels_online_shopping_online_order-04-512.png"
        width={300}
        height={300}
        alt="Empty order"
        priority
        className="object-contain"
      />
      <p className="text-gray-500 mt-4 text-lg">No order found</p>
    </div>
  );
}
