import fs from "fs";
import path from "path";



const filepath=path.join(process.cwd(),"src","data","cart.json");
export async function GET(req,{params}){
  const {productId}=params;

  if(productId && fs.existsSync(filepath)){
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const cartItems = JSON.parse(fileContent);
    const filteredCartItems = cartItems.filter((item) => {
      const { product } = item;
      const parsedProduct = JSON.parse(product);
      return parsedProduct.id === parseInt(productId) && item.guestCartId === guestId;
    });
    return Response.json({ success: true, data: filteredCartItems });
  }
  else{
    return Response.json({ success: true, data: [] });
  }
}