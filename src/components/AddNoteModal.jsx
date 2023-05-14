import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  PlusIcon,
  FileTextIcon,
  DrawingPinIcon,
  DrawingPinFilledIcon,
  StarIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import { ModalState } from "../context/context";
import { useDispatch } from "react-redux";
import { noteAdded } from "../store/notes";
function AddNoteModal({ show }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [starred, setStarred] = useState(false);
  const [pinned, setPinned] = useState(false);
  const { setModalShow } = ModalState();
  const dispatch = useDispatch();
  const noteHandler = () => {
    dispatch(noteAdded({ title, description, starred, pinned }));
    setPinned(false);
    setStarred(false);
    setTitle("");
    setDescription("");
    setModalShow(false);
  };
  return (
    <Transition show={show}>
      <div className='border space-y-2 px-6 py-4 shadow-md absolute w-1/2 max-h-80 flex flex-col items-center justify-center bg-white rounded-lg m-auto z-50 top-0 bottom-0 left-0 right-0'>
        <div className='py-2 flex items-center w-full gap-2'>
          <div className='flex items-center w-full gap-2'>
            <FileTextIcon height={22} width={22} />
            <h1 className='text-xl font-semibold'>Add new Note</h1>
          </div>
          <div>
            <button
              onClick={() => setPinned((prev) => !prev)}
              className='p-1 hover:bg-neutral-200 rounded'
            >
              {pinned ? <DrawingPinFilledIcon /> : <DrawingPinIcon />}
            </button>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex gap-2 items-center'>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className='py-3 text-2xl font-title outline-none w-full'
              type='text'
              placeholder='Title'
            />
          </div>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name='Description'
            className='outline-none w-full font-assistant font-semibold h-28 py-2 resize-none'
            placeholder='Add a brief note.'
          ></textarea>
          <div className='h-16 flex items-center justify-end gap-2'>
            <button
              onClick={() => setStarred((prev) => !prev)}
              className='p-2 flex items-center text-xs font-semibold gap-3 hover:bg-neutral-200 rounded'
            >
              {starred ? <StarFilledIcon /> : <StarIcon />}
            </button>
            <button
              onClick={noteHandler}
              className='px-3 py-2 flex items-center text-xs font-semibold gap-3 bg-gray-900 text-white rounded'
            >
              <PlusIcon />
              Add Note
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default AddNoteModal;
