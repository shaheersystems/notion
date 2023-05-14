import React from "react";
import { Link } from "react-router-dom";
import { ModalState } from "../context/context";

function Sidebar() {
  const { setModalShow, setSearchModalShow } = ModalState();
  const searchModalHandler = () => {
    setSearchModalShow(true);
  };
  return (
    <div className='z-9 sticky top-[8vh] h-[92vh] bg-neutral-50 w-64 flex flex-col justify-between'>
      <div>
        <div className='w-full'>
          <div>
            <h1 className='px-4 py-1 text-sm font-semibold'>Navigation</h1>
          </div>
          <div className=''>
            <button
              onClick={() => setSearchModalShow(true)}
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
              <span>Search</span>
            </button>
            <Link
              to='/'
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                />
              </svg>

              <span>Notes</span>
            </Link>
            <Link
              to='/starred'
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              {/* star icon svg */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                />
              </svg>

              <span>Starred</span>
            </Link>
            <Link
              to='/'
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                />
              </svg>

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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 6h.008v.008H6V6z'
                />
              </svg>

              <span>School</span>
            </Link>
            <Link
              to='/'
              className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 6h.008v.008H6V6z'
                />
              </svg>

              <span>Work</span>
            </Link>
            <button className='px-4 py-1 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>

              <span>New label</span>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <button
          onClick={() => setModalShow(true)}
          className='border-t px-4 py-3 flex w-full items-center gap-2 text-neutral-500 text-sm font-semibold hover:bg-neutral-200'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>

          <span>New note</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
