import React from "react";
import { Transition } from "@headlessui/react";
function Modal() {
  return (
    <Transition
      show={false}
      enter='ease-out duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='border shadow-md absolute w-80 h-48 bg-neutral-100 rounded m-auto z-10 top-0 bottom-0 left-0 right-0'></div>
    </Transition>
  );
}

export default Modal;
