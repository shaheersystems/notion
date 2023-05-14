import React from "react";
import { Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
function SearchModal({ show }) {
  return (
    <Transition show={show}>
      <div className='border space-y-2 px-4 py-2 shadow-md absolute w-1/2 h-96 bg-white rounded-lg m-auto z-50 top-0 bottom-0 left-0 right-0'>
        <div className='w-full h-12 border-b flex items-center gap-2 text-neutral-600'>
          <MagnifyingGlassIcon height={20} width={20} />
          <input
            type='text'
            placeholder='Search in Notion'
            className='flex-1 py-2 outline-none'
          />
        </div>
        <div>
          <h2 className='font-semibold text-neutral-600 text-sm'>Results</h2>
        </div>
        <div className='h-64 w-full overflow-auto no-scrollbar'></div>
      </div>
    </Transition>
  );
}

export default SearchModal;
