import Image from "next/image";

export default function CartItemsNotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image
        src="https://cdn0.iconfinder.com/data/icons/essential-vol-4/1000/shopping_e-commerce___shopping_cart_cart_empty_not_found_basket_shop-512.png"
        width={400}
        height={400}
        alt="Empty cart"
        priority
        className="object-contain"
      />
      <p className="text-gray-500 mt-4 text-lg">Your cart is empty</p>
    </div>
  );
}
