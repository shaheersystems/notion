import { PlusIcon } from "@radix-ui/react-icons";
import { ModalState } from "../context/context";
export default function EmptyState() {
  const { setModalShow } = ModalState();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='text-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-8 h-8 mx-auto text-gray-400'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
          />
        </svg>

        <h3 className='mt-2 text-xl font-bold text-gray-900'>No Notes</h3>
        <p className='mt-1 text-md text-gray-500'>
          Get started by creating a new note.
        </p>
        <div className='mt-6'>
          <button
            onClick={() => setModalShow(true)}
            type='button'
            className='inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-2 text-xs font-semibold shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            <PlusIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
            New Note
          </button>
        </div>
      </div>
    </div>
  );
}
