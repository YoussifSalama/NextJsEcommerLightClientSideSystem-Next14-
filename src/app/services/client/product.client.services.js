import generateRandomGuestIdClient from "@/services/client/generateRandomGuestId.client";
import { errorClientToast, successClientToast } from "@/services/client/toastify.client";

export const addToCartFunction = async (product) => {
  try {
    const item = {
      product: JSON.stringify(product),
      quantity: 1,
      guestCartId: generateRandomGuestIdClient(6),
    };
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });

    const data = await response.json();

    if (data.success) {
      successClientToast(data?.message);
    } else {
      errorClientToast(data?.message);
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};


export const updateCartItemQuantity = async (cartGuestId, productId, quantity) => {
  try {
    const response = await fetch(`/api/cart/${cartGuestId}/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    });

    const data = await response.json();
    if (data.success) {
      successClientToast(data?.message);
    } else {
      errorClientToast(data?.message);
    }
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
  }
};


export const deleteItemFromCart = async (cartGuestId, productId, setRefreshOnEvent) => {
  try {
    const response = await fetch(`/api/cart/${cartGuestId}/${productId}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (data.success) {
      successClientToast(data?.message);
      setRefreshOnEvent(prev => !prev);
    } else {
      errorClientToast(data?.message);
    }
  } catch (error) {
    console.error("Error deleting item from cart:", error);
  }
};


export const deleteAllMyCartItems = async (cartGuestId) => {
  try {
    const response = await fetch(`/api/cart/${cartGuestId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data.success) {
      successClientToast(data?.message);
    } else {
      errorClientToast(data?.message);
    }
  } catch (error) {
    console.error("Error deleting all cart items:", error);
  }
};


export const addNewOrder = async (orderGuestId,order) => {
  try {
    const response = await fetch(`/api/order/${orderGuestId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    if (data.success) {
      successClientToast(data?.message);
    } else {
      errorClientToast(data?.message);
    }
  } catch (error) {
    console.error("Error adding new order:", error);
  }
};


