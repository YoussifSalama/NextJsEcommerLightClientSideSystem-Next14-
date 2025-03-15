import { CircleX, SearchIcon } from "lucide-react";
import { useState } from "react";

const MobSearchbar = () => {
  const [openInput, setOpenInput] = useState(false);
  return (
    <div>
    {
      openInput?<CircleX className="w-4 h-4"
      onClick={() => setOpenInput(!openInput)}/>:<SearchIcon className="w-4 h-4"
      onClick={() => setOpenInput(!openInput)}/>
    }
      {
        openInput && <input
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Search for products..."
        className=" w-full outline-none placeholder:text-[10px] placeholder:leading-none text-gray-500 text-[10px] [&::-webkit-search-cancel-button]:hidden
        absolute
        top-[100%]
        left-0
        z-50
        bg-gray-200
        p-4
        "
      />
      }
  </div>
  )
}

export default MobSearchbar
