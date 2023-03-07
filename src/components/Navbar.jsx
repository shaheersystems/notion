import React from "react";
import {
  NotionLogoIcon,
  DotsHorizontalIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
function Navbar() {
  const notifications = 5;
  return (
    <div className='h-[8vh] px-4 flex items-center border-b justify-between'>
      <div>
        <Link to='/'>
          <NotionLogoIcon height={35} width={35} />
        </Link>
      </div>
      <div className='flex items-center gap-3 text-neutral-600'>
        <button className='px-2 py-1 text-sm font-semibold transition-all hover:bg-neutral-200 rounded'>
          GitHub
        </button>
        <button className='relative px-2 py-1 text-sm font-semibold transition-all hover:bg-neutral-200 rounded'>
          <BellIcon height={20} width={20} />
          {notifications > 0 && (
            <div className='absolute top-[20%] left-[55%] bg-red-500 h-2 w-2 rounded-full'></div>
          )}
        </button>
        <button className='px-2 py-1 transition-all hover:bg-neutral-200 rounded'>
          <DotsHorizontalIcon height={20} width={20} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
