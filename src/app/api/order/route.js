import fs from "fs";
import path from "path";

const filePath=path.join(process.cwd(),"src","data","order.json");

export async function GET() {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const orders = fileContent ? JSON.parse(fileContent) : [];
    return Response.json({ success: true, data: orders });
  } catch (error) {
    return Response.json({ success: false, message: "Failed to fetch orders" }, { status: 500 });
  }
}