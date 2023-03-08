import React from "react";
import Note from "../components/Note";
function Home() {
  return (
    <div className='flex-1'>
      <div className='px-4 py-2'>
        <div className='py-2'>
          <span className='text-sm text-neutral-500 font-semibold'>PINNED</span>
          <div className='py-4 flex items-center gap-3 flex-wrap'>
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
        </div>
        <div>
          <span className='text-sm text-neutral-500 font-semibold'>OTHERS</span>
          <div className='py-4 flex items-center gap-3 flex-wrap'>
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
