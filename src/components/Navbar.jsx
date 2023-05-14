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
    <div className='h-[8vh] sticky top-0 bg-white px-4 flex items-center border-b justify-between'>
      <div>
        <Link to='/'>
          <NotionLogoIcon height={35} width={35} />
        </Link>
      </div>
      <div className='flex items-center gap-3 text-neutral-600'>
        <button className='px-2 py-1 text-sm font-semibold transition-all hover:bg-gray-900 hover:text-white rounded'>
          GitHub
        </button>
        <button className='relative p-1 text-sm font-semibold transition-all hover:bg-gray-900 hover:text-white rounded'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'
            />
          </svg>

          {notifications > 0 && (
            <div className='absolute top-[20%] left-[55%] bg-red-500 h-2 w-2 rounded-full'></div>
          )}
        </button>
        <button className='p-1 transition-all hover:bg-gray-900 hover:text-white rounded'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
