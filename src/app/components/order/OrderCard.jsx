"use client";
import { Trash } from "lucide-react";
import Card from "../common/Card";
import Quantity from "../common/Quantity";

const OrderCard = ({ item }) => {
  let products = JSON.parse(item?.products);
  console.log(products[0]?.product);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* card content */}
      {products?.map((product) => {
        return (
          <div>
            <Card
              product={JSON.parse(product?.product)}
              displayButton={false}
            />
            <div className="border p-2 mt-2 rounded-xl shadow-md text-white bg-[#1f1f1f]">
              {/* count */}
              <div className="flex items-center justify-between">
                <p>Quantity</p>
                <p> {product?.quantity}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderCard;
