import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "order.json");
const cartPath = path.join(process.cwd(), "src", "data", "cart.json");

export async function POST(req, { params }) {
  try {
    const { orderGuestId } = params;
    const body = await req.json();

    // Read existing orders
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const orders = fileContent ? JSON.parse(fileContent) : [];

    // Create new order
    const newOrder = {
      id: orders.length ? orders.length + 1 : 1,
      orderGuestId,
      ...body
    };
    orders.push(newOrder);

    // Write new orders list
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

    // Delete items from cart
    const fileContentCart = fs.readFileSync(cartPath, "utf-8");
    const cartItems = fileContentCart ? JSON.parse(fileContentCart) : [];

    const filteredCartItems = cartItems.filter(item => item.guestCartId !== orderGuestId);

    fs.writeFileSync(cartPath, JSON.stringify(filteredCartItems, null, 2));

    return Response.json({ success: true, message: "Order added successfully" });
  } catch (error) {
    console.error("Error processing order:", error);
    return Response.json({ success: false, message: "Failed to process order" }, { status: 500 });
  }
}


export async function GET(req, { params }) {
  try {
    const { orderGuestId } = await params;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const orders = fileContent ? JSON.parse(fileContent) : [];
    const filteredOrders = orders.filter((order) => order.orderGuestId === orderGuestId);
    return Response.json({ success: true, data: filteredOrders });
  } catch (error) {
    return Response.json({ success: false, message: "Failed to fetch orders" }, { status: 500 });
  }
}