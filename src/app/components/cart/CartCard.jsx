"use client";
import { Trash } from "lucide-react";
import Card from "../common/Card";
import Quantity from "../common/Quantity";
import { deleteItemFromCart } from "@/app/services/client/product.client.services";

const CartCard = ({ item, setRefreshOnEvent }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* card content */}
      <div>
        <Card product={JSON.parse(item?.product)} displayButton={false} />
      </div>
      {/* card actions */}
      <div className="border p-2 rounded-xl shadow-md flex items-center justify-between">
        {/* delete */}
        <div>
          <button
            className="flex items-center gap-2"
            onClick={async () => {
              await deleteItemFromCart(
                item?.guestCartId,
                JSON.parse(item?.product)?.id,
                setRefreshOnEvent
              );
            }}
          >
            <span className="font-bold text-[1rem]">
              <Trash className="h-4 w-4 text-red-500"/>
            </span>
          </button>
        </div>
        {/* count */}
        <Quantity item={item} />
      </div>
    </div>
  );
};

export default CartCard;
