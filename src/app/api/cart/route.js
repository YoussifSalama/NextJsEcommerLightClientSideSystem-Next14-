import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data", "cart.json");

export async function POST(req) {
  try {
    const body = await req.json();

    let cart = [];

    // Read existing cart data
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      if (fileContent) {
        cart = JSON.parse(fileContent);
      }
    }

    // chek if product exist
    let newProduct=JSON.parse(body.product);
    const existingProduct = cart.find((item) => JSON.parse(item.product).id === newProduct.id);
    if (existingProduct) {
      existingProduct.quantity += body.quantity;
      fs.writeFileSync(filePath, JSON.stringify(cart, null, 2));
      return Response.json({ success: true, message: "Item quantity updated" });
    }
    else{
      cart.push({...body,id:cart[cart?.length]?.id+1 || 1});
      fs.writeFileSync(filePath, JSON.stringify(cart, null, 2));
    }
    return Response.json({ success: true, message: "Item added to cart" });
  } catch (error) {
    return Response.json({ success: false, message: "Failed to add item" }, { status: 500 });
  }
}

export async function GET() {
  try {
    let cart = [];

    // Read cart data
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      if (fileContent) {
        cart = JSON.parse(fileContent);
      }
    }

    return Response.json({ success: true, data: cart });
  } catch (error) {
    return Response.json({ success: false, message: "Failed to fetch cart" }, { status: 500 });
  }
}
