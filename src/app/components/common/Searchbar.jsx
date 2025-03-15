"use client";

import { SearchIcon } from "lucide-react";

const Searchbar = () => {


  return (
    <div className="bg-gray-200 rounded-xl py-1 px-2 flex items-center gap-1">
      <SearchIcon className="w-4 h-4 text-gray-400" />
        <input
          type="search"
          name="searchbar"
          id="searchbar"
          placeholder="Search for products..."
          className="bg-transparent w-full outline-none placeholder:text-[10px] placeholder:leading-none text-gray-500 text-[10px] [&::-webkit-search-cancel-button]:hidden"
        />
    </div>
  );
};

export default Searchbar;
