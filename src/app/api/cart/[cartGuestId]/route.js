import fs from "fs";
import path from "path";

const filepath=path.join(process.cwd(),"src","data","cart.json");

export async function GET(req,{params}){
  const {cartGuestId}=await params;
  if(cartGuestId=="guest"){
    return Response.json({ success: true, data: [] });
  }
  else{
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const cartItems = JSON.parse(fileContent);
    const filteredCartItems = cartItems.filter((item) => item.guestCartId === cartGuestId);
    return Response.json({ success: true, data: filteredCartItems });
  }
}



export async function DELETE(req, { params }) {
  try {
    const { cartGuestId } = await params;
    if(fs.existsSync(filepath)){
      const fileContent=fs.readFileSync(filepath,"utf-8");
      const cartItems=JSON.parse(fileContent);
      const filteredCartItems = cartItems.filter((item) => item.guestCartId !== cartGuestId);
      fs.writeFileSync(filepath, JSON.stringify(filteredCartItems, null, 2));
      return Response.json({ success: true, message: "Cart cleared" });
    }
    else{
      return Response.json({ success: false, message: "Cart not found" }, { status: 404 });
    }
  }
  catch (error) {
    return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
