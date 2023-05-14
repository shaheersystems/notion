import { Transition } from "@headlessui/react";
import React from "react";
import { ModalState } from "../context/context";
function Overlay({ show }) {
  const { setModalShow, setSearchModalShow } = ModalState();
  const overlayHandler = () => {
    setModalShow(false);
    setSearchModalShow(false);
  };
  return (
    <Transition show={show}>
      <div
        onClick={overlayHandler}
        className='z-10 h-screen w-screen absolute left-0 top-0 bg-neutral-900/50'
      ></div>
    </Transition>
  );
}

export default Overlay;
