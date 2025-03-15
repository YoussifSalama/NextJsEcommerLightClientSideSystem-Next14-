import fs from "fs/promises";
import path from "path";

const filepath = path.join(process.cwd(), "src", "data", "cart.json");

// Update cart product count
export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const { cartGuestId, productId } = await params;

    console.log({ cartGuestId, productId, body });

    // Check if the cart file exists
    try {
      await fs.access(filepath);
    } catch (error) {
      return Response.json({ success: false, message: "Cart not found" }, { status: 404 });
    }

    // Read and parse the cart data
    const fileContent = await fs.readFile(filepath, "utf-8");
    const cartItems = JSON.parse(fileContent);

    // Find the correct item in the cart
    const cartItem = cartItems.find(
      (item) => JSON.parse(item?.product).id === parseInt(productId) && item.guestCartId === cartGuestId
    );

    if (!cartItem) {
      return Response.json({ success: false, message: "Item not found" }, { status: 404 });
    }

    // Update the quantity
    cartItem.quantity = body.quantity;

    // Write updated data back to the file
    await fs.writeFile(filepath, JSON.stringify(cartItems, null, 2));

    return Response.json({ success: true, message: "Item quantity updated" });
  } catch (error) {
    return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}


export async function DELETE(req, { params }) {
  try {
    const { cartGuestId, productId } = await params;
    const fileContent = await fs.readFile(filepath, "utf-8");
    const cartItems = JSON.parse(fileContent);
    const filteredCartItems = cartItems.filter(
      (item) => JSON.parse(item?.product).id !== parseInt(productId) || item.guestCartId !== cartGuestId
    );
    await fs.writeFile(filepath, JSON.stringify(filteredCartItems, null, 2));
    return Response.json({ success: true, message: "Item removed from cart" });
  } catch (error) {
    return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}