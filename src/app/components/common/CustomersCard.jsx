"use client"
import { Check } from "lucide-react";
import dynamic from "next/dynamic"

const CustomersCard = ({data}) => {
  const ReactStars=dynamic(() => import("react-stars"), { ssr: false });
  return (
    <div className="border py-4 px-2 rounded-2xl">
      <div>
      <ReactStars
            count={5}
            value={data?.rating || 5}
            size={20}
            color2={"#ffd700"}
            edit={false}
          />
      </div>
      <div className="flex gap-2">
        <span className="font-bold text-[1rem] capitalize">{data?.name}</span>
        <span className="bg-green-500 p-1 rounded-full scale-75">
          <Check className="w-4 h-4 text-white"/>
        </span>
      </div>
      <div className="text-[0.7rem] text-gray-500">
        {data?.opinion}
      </div>
    </div>
  )
}

export default CustomersCard
