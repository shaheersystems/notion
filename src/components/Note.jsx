import {
  DotsVerticalIcon,
  DrawingPinIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";

function Note() {
  return (
    <Link to='/'>
      <div className='relative w-64 max-h-fit  bg-neutral-100 rounded-xl'>
        <div className='p-3 space-y-2'>
          <h1 className='text-xl font-semibold'>Meeting Notes</h1>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ab quae minus cum assumenda?
          </p>
        </div>
        <div className='px-3 rounded-xl h-10 w-full flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <button className='p-1 hover:bg-neutral-200 rounded'>
              <DrawingPinIcon height={15} width={15} />
            </button>
            <button className='p-1 hover:bg-neutral-200 rounded'>
              <StarIcon height={15} width={15} />
            </button>
          </div>
          <div>
            <button className='p-1 peer hover:bg-neutral-200 rounded'>
              <DotsVerticalIcon height={15} width={15} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Note;
