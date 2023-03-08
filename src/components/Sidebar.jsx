import React from "react";
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FileTextIcon,
  StarIcon,
  TrashIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='sticky top-[8vh] h-[92vh] bg-neutral-50 w-64 flex flex-col justify-between'>
      <div>
        <div className='w-full'>
          <div>
            <h1 className='px-4 py-1 text-sm font-semibold'>Navigation</h1>
          </div>
          <div className=''>
            <button className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'>
              <MagnifyingGlassIcon />
              <span>Search</span>
            </button>
            <Link
              to='/'
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              <FileTextIcon />
              <span>Notes</span>
            </Link>
            <Link
              to='/'
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              <StarIcon />
              <span>Starred</span>
            </Link>
            <Link
              to='/'
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              <TrashIcon />
              <span>Trash</span>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <h1 className='px-4 py-1 text-sm font-semibold'>Labels</h1>
          </div>
          <div>
            <Link
              to='/'
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              <DotFilledIcon />
              <span>School</span>
            </Link>
            <Link
              to='/'
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              <DotFilledIcon />
              <span>Work</span>
            </Link>
            <button className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'>
              <PlusIcon />
              <span>New label</span>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <button className='border-t px-4 py-3 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'>
          <PlusIcon />
          <span>New note</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
