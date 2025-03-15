"use client"

import { ListOrdered, ShoppingCart } from "lucide-react";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import Searchbar from "../common/Searchbar";
import { useEffect, useState } from "react";
import MobSearchbar from "../common/MobSearchbar";
import AppRoutes from "@/data/routes.json";
import { getClientCookie } from "@/lib/js.cookies";
export default function Navbar() {
  const pathname = usePathname();
  const router=useRouter();
  const [switchSearch, setSwitchSearch] = useState(false);

  const handleWindowResizeForInput = () => {
    setSwitchSearch(window.innerWidth < 500);
  };

  useEffect(() => {
    handleWindowResizeForInput();

    window.addEventListener("resize", handleWindowResizeForInput);

    return () => {
      window.removeEventListener("resize", handleWindowResizeForInput);
    };
  }, []);

  return (
    <div className="flex items-center justify-around py-4 bg-gray-100 px-2 fixed top-0 left-0 w-full z-50">
      {/* logo */}
      <h1 className="uppercase font-bold text-black">
        <Link href="/">shop.co</Link>
      </h1>
      {/* routes */}
      <nav>
        <ul className="flex gap-3">
        {
          AppRoutes?.map((route,index)=>{
            const isActive=pathname===route.path;
            return(
              <li key={index} className={`${isActive? "font-bold scale-110 ease-in-out duration-300 transition-transform":""} text-[90%]`}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            )
          })
        }
        </ul>
      </nav>
      {/* serachbar */}
      {/* <div className={`
        ${switchSearch?"":"w-1/4"}
        `}>
        {!switchSearch && <Searchbar/>}
      </div> */}
      {/* else */}
      <div>
        <ul className="flex items-center gap-3">
          {/* <li>
            { switchSearch && <MobSearchbar/>}
          </li> */}
          <li>
            <div onClick={()=>{
              const guestId=getClientCookie("guestid");
              if(guestId){
                router.push(`/cart/${guestId}`);
              }
              else{
                router.push("/cart/guest");
              }
            }}><ShoppingCart className={`w-4 h-4 cursor-pointer
              ${pathname.includes("/cart") ? "w-5 h-5" : ""}
              `}/></div>
          </li>
          <li>
            <div onClick={()=>{
              const guestId=getClientCookie("guestid");
              if(guestId){
                router.push(`/order/${guestId}`);
              }
              else{
                router.push("/order/guest");
              }
            }}><ListOrdered className={`w-4 h-4 cursor-pointer
              ${pathname.includes("/order") ? "w-5 h-5" : ""}
              `}/></div>
          </li>
        </ul>
      </div>
    </div>
  )
}