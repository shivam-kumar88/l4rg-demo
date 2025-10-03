"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";

const HeaderMenus = ({ headerMenus }) => {
  return headerMenus.map((item, idx) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        key={idx}
        className="hidden lg:flex items-center "
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {item.selected && <div className="w-2 h-1 bg-[#e94d65]"></div>}

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className="text-[#000] font-semibold cursor-pointer">
              {item.name}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-60 bg-white border-0 mt-5 z-20 p-2 shadow-[0_0_15px_5px_rgba(0,0,0,0.10)] shadow-4xl shadow- border-white outline-none rounded-sm">
            <div className="flex flex-col space-y-4">
              {item.options.map((option, idx) => {
                return (
                  <a
                    key={idx}
                    className="text-[#000] cursor-pointer hover:text-[#e94d65] font-medium"
                  >
                    {option}
                  </a>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  });
};

export default HeaderMenus;
