import React from "react";
import {
  NotionLogoIcon,
  DotsHorizontalIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='h-[8vh] px-8 flex items-center border-b justify-between'>
      <div>
        <Link to='/'>
          <NotionLogoIcon height={35} width={35} />
        </Link>
      </div>
      <div className='flex items-center gap-3 text-neutral-600'>
        <button className='px-2 py-1 text-sm font-semibold transition-all hover:bg-neutral-200 rounded'>
          GitHub
        </button>
        <button className='px-2 py-1 text-sm font-semibold transition-all hover:bg-neutral-200 rounded'>
          Integrate Apps
        </button>
        <button className='px-2 py-1 transition-all hover:bg-neutral-200 rounded'>
          <DotsHorizontalIcon height={20} width={20} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
